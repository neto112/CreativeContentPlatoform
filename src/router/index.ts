import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ContentDetails = () => import('../views/ContentDetails.vue')
const GamesView = () => import('../views/Games/GamesView.vue')
const ArtWork = () => import('../views/ArtWork/ArtWork.vue')
const VideosView = () => import('../views/Videos/VideosView.vue')
const MusicView = () => import('../views/Music/MusicView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/details/:id', name: 'Details', component: ContentDetails },
    { path: '/games', name: 'Games', component: GamesView },
    { path: '/artworks', name: 'ArtWorks', component: ArtWork },
    { path: '/videos', name: 'Videos', component: VideosView },
    { path: '/musics', name: 'Musics', component: MusicView }
  ]
})

export default router
