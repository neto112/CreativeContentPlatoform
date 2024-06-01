import { createRouter, createWebHistory } from 'vue-router'
import ArtWork from '../views/ArtWork/ArtWork.vue'
import ContentDetails from '../views/ContentDetails.vue'
import GamesView from '../views/Games/GamesView.vue'
import HomeView from '../views/HomeView.vue'
import MusicView from '../views/Music/MusicView.vue'
import VideosView from '../views/Videos/VideosView.vue'

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
    },
    {
      path: '/videos',
      name: 'Videos',
      component: VideosView
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicView
    }
  ]
})

export default router
