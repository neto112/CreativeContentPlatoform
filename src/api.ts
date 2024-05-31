import axios from 'axios'

export const api = {
  async getArtWork() {
    return axios.get('https://api.artic.edu/api/v1/artworks') // Requisição passará pelo proxy configurado
  }
}
