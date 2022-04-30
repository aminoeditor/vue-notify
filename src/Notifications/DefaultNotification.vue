<template>
<div :class="`${classPrefix}notification notification`">
	<div class="surface">
		<div class="content">
			<div class="`${classPrefix}notification-title`" v-if="title">{{ title }}</div>
			<div class="`${classPrefix}notification-body`">{{ body }}</div>
		</div>
		<div class="actions">
			<button>
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
		body: String
	},
	async mounted() {
		gsap.to(".surface", {
			opacity: 1,
			visibility: 'visible',
			y: 0,
			delay: .2,
			duration: 0.2,
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
	padding: 1.5em;
	pointer-events: none;

	.surface {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		padding: 1em;
		border-radius: 0.5em;
		box-shadow: 0 15px 15px -3px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.07), 0 3px 14px 2px rgba(0, 0, 0, 0.06);
		pointer-events: auto;
		min-width: 280px;
		opacity: 0;
		visibility: hidden;
		transform: translateY(1rem);
	}

	.actions {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2em;
			height: 2em;
			border-radius: 0.5em;
			cursor: pointer;
			border: 1px solid #e5e5e5;
			background-color: white;
			&:not(:last-of-type) {
				margin-right: 1em;
			}
		}
	}
}
</style>
