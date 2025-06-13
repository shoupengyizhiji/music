import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/commnt.scss'
import '@/styles/tailwind.css'
// import { Swipe, SwipeItem } from 'vant'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')

// app.use(Swipe)
// app.use(SwipeItem)
