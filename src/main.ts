import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";

import './assets/styles/style.css'

const app = createApp(App)

app.use(router).use(Toaster).mount('#app')