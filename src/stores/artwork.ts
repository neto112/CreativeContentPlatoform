import { api } from '@/api'
import type { IArtWork } from '@/interface/artwork'
import { defineStore } from 'pinia'

export const useArtWorkStore = defineStore({
  id: 'movies',
  state: () => ({
    artWork: [] as IArtWork[]
  }),
  actions: {
    async getArtWork() {
      try {
        const response = await api.getArtWork()
        this.artWork = response.data.data
      } catch (error) {
        alert(error)
        console.error('Error fetching games:', error)
      }
    }
  }
})
