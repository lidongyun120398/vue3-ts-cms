import { createApp } from 'vue'

// 全局引入ui库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).mount('#app')
