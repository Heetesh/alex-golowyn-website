import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
    state: () => ({
        playbackTime: 0,
        
    }),

    actions: {
        setPlaybackTime(time: number) {
            this.playbackTime = time
        }
    },

    persist: true,
})
