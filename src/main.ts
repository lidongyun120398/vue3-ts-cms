import { createApp } from 'vue'

// import './service/axios_demo'
import hyRequest from './service'

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
console.log(process.env)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('单独相应的response')
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
// hyRequest.get()
