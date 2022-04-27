<template>
	<div class="notification">
		<div class="notification-title" v-if="title">{{ title }}</div>
		<div class="notification-body">{{ body }}</div>
	</div>
</template>

<script>
	export default {
		name: 'DefaultNotification',
		props: {
			title: String,
			body: String
		}
	}
</script>
