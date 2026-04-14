import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AlbumView from '@/views/AlbumView.vue'
import PhotoView from '@/views/PhotoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',//網址路徑
      name: 'home',
      component: HomeView,//這是要用變數而非字串，連到哪裡
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    //當設定路徑參數後，如果沒有帶參數的話就會進不了 
    {
      path: '/album',//透過:id可以自定義路徑參數，對應userview裡面的id
      name: 'album',
      component: AlbumView,
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotoView,
    },
    
  ],
})

export default router
