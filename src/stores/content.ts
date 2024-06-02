import type { IArtwork, ICategory, IContent, IGame, IMusic, IVideo } from '@/interface/content'
import { defineStore } from 'pinia'
import artworks from '../data/artworks.json'
import games from '../data/games.json'
import musics from '../data/musics.json'
import videos from '../data/videos.json'

interface IContentState {
  searchQuery: string
  content: IContent[]
  categories: ICategory[]
}

export const useContentStore = defineStore('content', {
  state: (): IContentState => ({
    searchQuery: '',
    content: [],
    categories: []
  }),
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    loadContent() {
      const gamesData: IGame[] = games.map((item) => ({ ...item, category: 'Games' }))
      const musicsData: IMusic[] = musics.map((item) => ({ ...item, category: 'Musics' }))
      const artworksData: IArtwork[] = artworks.map((item) => ({ ...item, category: 'Artworks' }))
      const videosData: IVideo[] = videos.map((item) => ({ ...item, category: 'Videos' }))

      this.content = [...gamesData, ...musicsData, ...artworksData, ...videosData]

      this.categories = [
        { name: 'Games', items: gamesData },
        { name: 'Musics', items: musicsData },
        { name: 'Artworks', items: artworksData },
        { name: 'Videos', items: videosData }
      ]
    }
  },
  getters: {
    filteredContent: (state): IContent[] => {
      const query = state.searchQuery.toLowerCase()
      return state.content.filter(
        (item) =>
          item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
      )
    },
    getContentById:
      (state) =>
      (id: string): IContent | undefined => {
        return state.content.find((item) => item.id === parseInt(id))
      }
  }
})
