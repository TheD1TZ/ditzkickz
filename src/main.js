import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {loadTokens} from "./spotify/loadTokens.js";


createApp(App)
    .use(router)
    .mount('#app')

loadTokens().then(r => console.log(r));




// TODO: https://www.npmjs.com/package/spotify-web-api-node
// chaotic 12XFFT7c5VUYdNzJODHOLn
// ditz: 02Qk9K9AJwyQWcZ5BrSgd7

