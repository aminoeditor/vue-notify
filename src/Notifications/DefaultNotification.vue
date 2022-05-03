<template>
<div :class="`${classPrefix}notification notification`">
	<div class="surface">
		<div class="content">
			<div class="`${classPrefix}notification-title`" v-if="title">{{ title }}</div>
			<div class="`${classPrefix}notification-body`">{{ body }}</div>
		</div>
		<div class="actions">
			<button @click.prevent="close">
				<svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 24 24" width="12px" fill="#aaaaaa"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
			</button>
		</div>
	</div>
</div>
</template>

<script>
import { gsap } from "gsap";
export default {
	name: 'DefaultNotification',
	props: {
		classPrefix: String,
		title: String,
		body: String,
		uuid: String,
		timeout: Number
	},
	data () {
		return {
			timer: null
		}
	},
	computed: {
		surfaceEl () {
			return this.$el.getElementsByClassName('surface')[0];
		}
	},
	methods: {
		async close () {
			await this.$nextTick();
			gsap.to(this.surfaceEl, {
				opacity: 0,
				visibility: 'visible',
				y: 16,
				scale: 0.8,
				delay: .1,
				duration: 0.2,
				onComplete: async () => {
					await this.$nextTick();
					clearTimeout(this.timer);
					this.$emit('close', this.uuid);
				}
			});
		}
	},
	async mounted() {
		gsap.to(this.surfaceEl, {
			opacity: 1,
			visibility: 'visible',
			y: 0,
			scale: 1,
			delay: .1,
			duration: 0.2,
			onComplete: () => {
				this.timer = setTimeout(this.close, this.timeout);
			}
		});
	}
}
</script>

<style lang="scss">
.notification {
	position: fixed;
	display: flex;
	justify-content: center;
	bottom: 0;
	left: 0;
	width: 100%;
	font-size: 14px;
	padding: 1em;
	pointer-events: none;

	.surface {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		box-shadow: 0 15px 15px -3px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.07), 0 3px 14px 2px rgba(0, 0, 0, 0.06);
		padding: 1em;
		border-radius: 0.5em;
		pointer-events: auto;
		min-width: 300px;
		opacity: 0;
		visibility: hidden;
		transform: scale(0.8) translateY(1rem);
	}

	.actions {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2em;
			height: 2em;
			border-radius: 4em;
			cursor: pointer;
			background: none;
			border: 1px solid #F2F2F2;
			&:not(:last-of-type) {
				margin-right: 1em;
			}
			&:hover {
				background-color: #F5F5F5;
			}
			&:active {
				background-color: #F2F2F2;
			}
		}
	}
}
</style>
