import './assets/main.css'
import { createApp } from 'vue'
import App from './App2.vue'
import router from './router'
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$myGlobalVariableLastIDItem=''
app.mount('#app')
