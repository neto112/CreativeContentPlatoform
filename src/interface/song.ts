export interface ISongState {
  isPlaying: boolean
  audio: HTMLAudioElement
  currentTrack: ITrack | any
  openFooter: boolean
}

export interface ITrack {
  id: number
  isTrackTime: string
  length: number
  url_audio: string
  sequencial: number
  unit: number
  descricao: string
}
