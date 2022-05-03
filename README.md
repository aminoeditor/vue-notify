# Vue Notify
Minimalist global notifications for your Vue 3 application

### Getting started
#### Install
```
npm i --save @aminoeditor/vue-notify
```
---
#### Setup
*Install the plugin*
```
// main.js
import { createApp } from 'vue'

import App from './App.vue'
import VueNotify from '@aminoeditor/vue-notify';

createApp(App)
.use(VueNotify)
.mount('#app')
```
*Load the default styles*
```
// App.vue
<style lang="scss">
@import "@aminoeditor/vue-notify";
</style>
```
---
#### Use Case
```
<template>
	<a @click.prevent="$notify('Hello World!')">Say Hello</a>
</template>
```
---
#### Configuration
##### Global Options
```
//main.js
createApp(App)
.use(VueNotify, {
   global: 'toast' // now you can call this.$toast('Hello World');
})
.mount('#app');
```
|Key  | Data Type | Description | Default |
|--|--|--|--|
| global | String | Rename the global option key |  notify  |

##### Notification Level Options
```
this.$notify('Hello World!', {
	displayMs: 5000 // how long before notification should disappear
});
```
|Key  | Data Type | Description | Default |
|--|--|--|--|
| displayMs | Number | Set display time (in ms) for notification |  2500  |
