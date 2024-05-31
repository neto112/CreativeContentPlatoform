import type { ISongState, ITrack } from '@/interface/song'
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () =>
    ({
      isPlaying: false,
      audio: null as HTMLAudioElement | null,
      currentTrack: {},
      openFooter: false
    }) as ISongState,

  actions: {
    loadSong(track: ITrack) {
      this.currentTrack = track

      if (this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.url_audio

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200)
    },

    playOrPauseSong() {
      if (this.audio) {
        if (this.audio.paused) {
          this.isPlaying = true
          this.audio.play()
        } else {
          this.isPlaying = false
          this.audio.pause()
        }
      }
    },

    playOrPauseThisSong(track: ITrack) {
      if (
        !this.audio ||
        !this.audio.src ||
        this.currentTrack.sequencial !== track.sequencial ||
        this.currentTrack.unit !== track.unit
      ) {
        this.openFooter = true
        this.loadSong(track)
        return
      }
      this.playOrPauseSong()
    },

    resetState() {
      this.audio.pause()
      this.isPlaying = false
      this.currentTrack = {}
      this.openFooter = false
    }
  }
})
