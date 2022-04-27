<template>
	<div class="notify-container">
		<div v-for="notification in notifications">
			<DefaultNotification :body="notification.body" />
		</div>
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
				displayMs: 5000,
				notifications: []
			}
		},
		methods: {
			notify (body, options) {
				const key = uuidv4();
				this.notifications.push({ key, body });
				setTimeout(() => {
					this.removeNotification(key);
				}, this.displayMs);
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

<style lang="scss">
	.notify-container {
		width: 100vw;
		height: 100vh;
		position: fixed;
		pointer-events: none;
	}
</style>
