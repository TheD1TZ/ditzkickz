import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')


// TODO: https://www.npmjs.com/package/spotify-web-api-node