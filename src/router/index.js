import { createRouter, createWebHistory } from 'vue-router'
import GuideView from '../views/GuideView.vue'
import CollectionView from '../views/CollectionView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView
    }
  ]
})

export default router
