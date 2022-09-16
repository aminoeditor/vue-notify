# Vue Notify
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://timothylong.com"><img src="https://avatars.githubusercontent.com/u/1380218?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Timothy Long</b></sub></a><br /><a href="https://github.com/aminoeditor/vue-notify/commits?author=timothylong" title="Code">💻</a> <a href="#design-timothylong" title="Design">🎨</a></td>
      <td align="center"><a href="https://aminoeditor.com"><img src="https://avatars.githubusercontent.com/u/3223296?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Uldall</b></sub></a><br /><a href="https://github.com/aminoeditor/vue-notify/commits?author=ericuldall" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!