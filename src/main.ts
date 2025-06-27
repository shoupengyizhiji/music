import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import '@/styles/commnt.scss'
import '@/styles/tailwind.css'
// import { Swipe, SwipeItem } from 'vant'
import VueLazyload from 'vue-lazyload'
const app = createApp(App)

app.use(VueLazyload)
app.use(createPinia())

app.use(router)

app.mount('#app')

// app.use(Swipe)
// app.use(SwipeItem)
