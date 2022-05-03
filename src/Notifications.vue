<template>
<div :class="`${classPrefix}notify-container`">
	<template v-for="notification in notifications">
		<DefaultNotification
			:classPrefix="classPrefix"
			:body="notification.body"
			:timeout="notification.timeout"
			:uuid="notification.key"
			@close="removeNotification"
		/>
	</template>
</div>
</template>

<script>
import {
	v4 as uuidv4
} from 'uuid';
import DefaultNotification from './Notifications/DefaultNotification.vue'
export default {
	name: 'Notifications',
	components: {
		DefaultNotification
	},
	data() {
		return {
			classPrefix: '__vue_notify_',
			displayMs: 2500,
			notifications: []
		}
	},
	methods: {
		async notify(body, options = {}) {
			const key = uuidv4();
			const notification = {
				key,
				body,
				timeout: options.displayMs || this.displayMs
			};
			await this.$nextTick();
			this.notifications.push(notification);
		},
		async removeNotification(key) {
			await this.$nextTick();
			const notificationIndex = this.notifications.findIndex(n => n.key === key);
			this.notifications.splice(notificationIndex, 1);
		}
	}
}
</script>

<style scoped lang="scss">
.notify-container {
	z-index: 2147483647;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	pointer-events: none;
}
</style>
