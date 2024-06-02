export interface IContent {
  id: number
  title: string
  thumbnail: string
  description?: string | null
  category: string
  rating: number
}

export interface IGame extends IContent {}

export interface IMusic extends IContent {}

export interface IArtwork extends IContent {}

export interface IVideo extends IContent {}

export interface ICategory {
  name: string
  items: IContent[]
}
