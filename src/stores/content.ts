import { defineStore } from 'pinia'
import artists from '../data/artist.json'
import artworks from '../data/artwork.json'
import games from '../data/games.json'
import videos from '../data/videos.json'

export const useContentStore = defineStore('content', {
  state: () => ({
    searchQuery: '',
    content: [],
    categories: []
  }),
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    loadContent() {
      const gamesData = games.map((item) => ({ ...item, category: 'Game' }))
      const artistsData = artists.map((item) => ({ ...item, category: 'Artist' }))
      const artworksData = artworks.map((item) => ({ ...item, category: 'Artwork' }))
      const videosData = videos.map((item) => ({ ...item, category: 'Video' }))

      this.content = [...gamesData, ...artistsData, ...artworksData, ...videosData]

      this.categories = [
        { name: 'Games', items: gamesData },
        { name: 'Artists', items: artistsData },
        { name: 'Artworks', items: artworksData },
        { name: 'Videos', items: videosData }
      ]
    }
  },
  getters: {
    filteredContent: (state) => {
      const query = state.searchQuery.toLowerCase()
      return state.content.filter(
        (item) =>
          item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
      )
    },
    getContentById: (state) => (id) => {
      return state.content.find((item) => item.id === parseInt(id))
    }
  }
})
