import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import ReadableTime from './components/common/ReadableTime.vue'

createApp(App)
  .component('ReadableTime',ReadableTime)
  .use(store)
  .mount('#app')