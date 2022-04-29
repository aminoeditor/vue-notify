<template>
	<div :class="`${classPrefix}notification`">
		<div class="`${classPrefix}notification-title`" v-if="title">{{ title }}</div>
		<div class="`${classPrefix}notification-body`">{{ body }}</div>
	</div>
</template>

<script>
	export default {
		name: 'DefaultNotification',
		props: {
			classPrefix: String,
			title: String,
			body: String
		}
	}
</script>
