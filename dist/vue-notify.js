'use strict';

var vue = require('vue');
var uuid = require('uuid');

var script$1 = {
		name: 'DefaultNotification',
		props: {
			title: String,
			body: String
		}
	};

const _hoisted_1$1 = { class: "notification" };
const _hoisted_2 = {
  key: 0,
  class: "notification-title"
};
const _hoisted_3 = { class: "notification-body" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    ($props.title)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, vue.toDisplayString($props.title), 1 /* TEXT */))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_3, vue.toDisplayString($props.body), 1 /* TEXT */)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/Notifications/DefaultNotification.vue";

var script = {
		name: 'Notifications',
		components: { DefaultNotification: script$1 },
		data () {
			return {
				displayMs: 5000,
				notifications: []
			}
		},
		methods: {
			notify (body, options) {
				const key = uuid.v4();
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
	};

const _hoisted_1 = { class: "notify-container" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DefaultNotification = vue.resolveComponent("DefaultNotification");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.notifications, (notification) => {
      return (vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(_component_DefaultNotification, {
          body: notification.body
        }, null, 8 /* PROPS */, ["body"])
      ]))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}

script.render = render;
script.__file = "src/Notifications.vue";

var index = {
	install (app, options) {
		const notificationsDiv = document.createElement('div');
		document.body.append(notificationsDiv);
		const notifications = vue.createApp({ extends: script });
		const vm = notifications.mount(notificationsDiv);
		app.config.globalProperties.$notify = (...args) => {
			vm.notify(...args);
		};
	}
};

module.exports = index;
