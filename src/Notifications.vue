<template>
	<div :class="`${classPrefix}notify-container`">
		<template v-for="notification in notifications">
			<DefaultNotification
				:classPrefix="classPrefix"
				:body="notification.body"
			/>
		</template>
	</div>
</template>

<script>
	import { v4 as uuidv4 } from 'uuid';
	import DefaultNotification from './Notifications/DefaultNotification.vue'
	export default {
		name: 'Notifications',
		components: { DefaultNotification },
		data () {
			return {
				classPrefix: '__vue_notify_',
				displayMs: 5000,
				notifications: []
			}
		},
		methods: {
			notify (body, options={}) {
				const key = uuidv4();
				this.notifications.push({ key, body });
				setTimeout(() => {
					this.removeNotification(key);
				}, options.displayMs || this.displayMs);
			},
			removeNotification (key) {
				this.notifications.splice(
					this.notifications.findIndex(n => n.key === key),
					1
				);
			}
		}
	}
</script>

<style scoped lang="scss">
	.notify-container {
		z-index: 2147483647;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		pointer-events: none;
	}
</style>
