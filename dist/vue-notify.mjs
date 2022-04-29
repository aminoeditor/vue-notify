import { openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createElementVNode, resolveComponent, Fragment, renderList, createBlock, createApp } from 'vue';
import { v4 } from 'uuid';

var script$1 = {
		name: 'DefaultNotification',
		props: {
			classPrefix: String,
			title: String,
			body: String
		}
	};

const _hoisted_1 = {
  key: 0,
  class: "`${classPrefix}notification-title`"
};
const _hoisted_2 = { class: "`${classPrefix}notification-body`" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`${$props.classPrefix}notification`)
  }, [
    ($props.title)
      ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($props.title), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_2, toDisplayString($props.body), 1 /* TEXT */)
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/Notifications/DefaultNotification.vue";

var script = {
		name: 'Notifications',
		components: { DefaultNotification: script$1 },
		data () {
			return {
				classPrefix: '__vue_notify_',
				displayMs: 5000,
				notifications: []
			}
		},
		methods: {
			notify (body, options) {
				const key = v4();
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DefaultNotification = resolveComponent("DefaultNotification");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`${$data.classPrefix}notify-container`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.notifications, (notification) => {
      return (openBlock(), createBlock(_component_DefaultNotification, {
        classPrefix: $data.classPrefix,
        body: notification.body
      }, null, 8 /* PROPS */, ["classPrefix", "body"]))
    }), 256 /* UNKEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script.render = render;
script.__scopeId = "data-v-05708dbf";
script.__file = "src/Notifications.vue";

var index = {
	install (app, options) {
		const notificationsDiv = document.createElement('div');
		document.body.append(notificationsDiv);
		const notifications = createApp({ extends: script });
		const vm = notifications.mount(notificationsDiv);
		app.config.globalProperties.$notify = (...args) => {
			vm.notify(...args);
		};
	}
};

export { index as default };
