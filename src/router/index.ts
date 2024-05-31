import { createRouter, createWebHistory } from 'vue-router'
import ArtWork from '../views/ArtWork.vue'
import ContentDetails from '../views/ContentDetails.vue'
import GamesView from '../views/GamesView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: ContentDetails
    },
    {
      path: '/games',
      name: 'Games',
      component: GamesView
    },
    {
      path: '/artwork',
      name: 'ArtWork',
      component: ArtWork
    }
    //   { path: '/*', redirect: '/' }
  ]
})

export default router
