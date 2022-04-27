import { createApp } from 'vue';
import Notifications from './Notifications.vue';
export default {
	install (app, options) {
		const notificationsDiv = document.createElement('div');
		document.body.append(notificationsDiv);
		const notifications = createApp({ extends: Notifications });
		const vm = notifications.mount(notificationsDiv);
		app.config.globalProperties.$notify = (...args) => {
			vm.notify(...args);
		}
	}
}
