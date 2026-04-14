// 引入boostrap
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// // Tailwind
// import './index.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS（包含 Popper）
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//引入fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
