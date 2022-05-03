<template>
	<div :class="`${classPrefix}notify-container`">
		<DefaultNotification 
			v-for="[key, notification] in notifications"
			:body="notification.body"
			:classPrefix="classPrefix"
			:key="key"
			:timeout="notification.timeout"
			:uuid="key"
			@close="removeNotification"
		/>
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
			notifications: new Map()
		}
	},
	methods: {
		async notify(body, options = {}) {
			const key = uuidv4();
			console.log(key);
			const notification = {
				body,
				timeout: options.displayMs || this.displayMs
			};
			await this.$nextTick();
			this.notifications.set(key, notification);
		},
		async removeNotification(key) {
			await this.$nextTick();
			delete this.notifications.delete(key);
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
