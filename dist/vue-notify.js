'use strict';

var vue = require('vue');
var uuid = require('uuid');
var gsap = require('gsap');

var script$1 = {
	name: 'DefaultNotification',
	props: {
		classPrefix: String,
		title: String,
		body: String
	},
	async mounted() {
		gsap.gsap.to(".surface", {
			opacity: 1,
			visibility: 'visible',
			y: 0,
			scale: 1,
			delay: .1,
			duration: 0.2,
		});
	}
};

const _hoisted_1 = { class: "surface" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = {
  key: 0,
  class: "`${classPrefix}notification-title`"
};
const _hoisted_4 = { class: "`${classPrefix}notification-body`" };
const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("div", { class: "actions" }, [
  /*#__PURE__*/vue.createElementVNode("button", null, [
    /*#__PURE__*/vue.createElementVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "12px",
      viewBox: "0 0 24 24",
      width: "12px",
      fill: "#aaaaaa"
    }, [
      /*#__PURE__*/vue.createElementVNode("path", {
        d: "M0 0h24v24H0V0z",
        fill: "none"
      }),
      /*#__PURE__*/vue.createElementVNode("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
    ])
  ])
], -1 /* HOISTED */);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(`${$props.classPrefix}notification notification`)
  }, [
    vue.createElementVNode("div", _hoisted_1, [
      vue.createElementVNode("div", _hoisted_2, [
        ($props.title)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, vue.toDisplayString($props.title), 1 /* TEXT */))
          : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_4, vue.toDisplayString($props.body), 1 /* TEXT */)
      ]),
      _hoisted_5
    ])
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/Notifications/DefaultNotification.vue";

var script = {
	name: 'Notifications',
	components: {
		DefaultNotification: script$1
	},
	data() {
		return {
			classPrefix: '__vue_notify_',
			displayMs: 2500,
			notifications: []
		}
	},
	methods: {
		notify(body, options = {}) {
			const key = uuid.v4();
			this.notifications.push({
				key,
				body
			});
			setTimeout(() => {
				this.removeNotification(key);
			}, options.displayMs || this.displayMs);
		},
		removeNotification(key) {
			this.notifications.splice(
				this.notifications.findIndex(n => n.key === key),
				1
			);
		}
	}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DefaultNotification = vue.resolveComponent("DefaultNotification");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(`${$data.classPrefix}notify-container`)
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.notifications, (notification) => {
      return (vue.openBlock(), vue.createBlock(_component_DefaultNotification, {
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
		const notifications = vue.createApp({ extends: script });
		const vm = notifications.mount(notificationsDiv);
		app.config.globalProperties.$notify = (...args) => {
			vm.notify(...args);
		};
	}
};

module.exports = index;
