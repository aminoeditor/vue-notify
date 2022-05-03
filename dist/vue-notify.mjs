import { openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, withModifiers, resolveComponent, Fragment, renderList, createBlock, createApp } from 'vue';
import { v4 } from 'uuid';
import { gsap } from 'gsap';

var script$1 = {
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
				y: 0,
				scale: 0,
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
};

const _hoisted_1 = { class: "surface" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = {
  key: 0,
  class: "`${classPrefix}notification-title`"
};
const _hoisted_4 = { class: "`${classPrefix}notification-body`" };
const _hoisted_5 = { class: "actions" };
const _hoisted_6 = /*#__PURE__*/createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "12px",
  viewBox: "0 0 24 24",
  width: "12px",
  fill: "#aaaaaa"
}, [
  /*#__PURE__*/createElementVNode("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }),
  /*#__PURE__*/createElementVNode("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
], -1 /* HOISTED */);
const _hoisted_7 = [
  _hoisted_6
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`${$props.classPrefix}notification notification`)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        ($props.title)
          ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString($props.title), 1 /* TEXT */))
          : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_4, toDisplayString($props.body), 1 /* TEXT */)
      ]),
      createElementVNode("div", _hoisted_5, [
        createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => ($options.close && $options.close(...args)), ["prevent"]))
        }, _hoisted_7)
      ])
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
			notifications: new Map()
		}
	},
	methods: {
		async notify(body, options = {}) {
			const key = v4();
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
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DefaultNotification = resolveComponent("DefaultNotification");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`${$data.classPrefix}notify-container`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.notifications, ([key, notification]) => {
      return (openBlock(), createBlock(_component_DefaultNotification, {
        body: notification.body,
        classPrefix: $data.classPrefix,
        key: key,
        timeout: notification.timeout,
        uuid: key,
        onClose: $options.removeNotification
      }, null, 8 /* PROPS */, ["body", "classPrefix", "timeout", "uuid", "onClose"]))
    }), 128 /* KEYED_FRAGMENT */))
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
		const global = options?.global || 'notify';
		app.config.globalProperties[`$${global}`] = (...args) => {
			vm.notify(...args);
		};
	}
};

export { index as default };
