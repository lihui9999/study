import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
createApp(App).use(router).use(store).mount('#app')
