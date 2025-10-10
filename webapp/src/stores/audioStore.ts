import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
    state: () => ({
        playbackTime: 0,
        audioInstance : null as HTMLAudioElement | null,
        
    }),

    actions: {
        setPlaybackTime(time: number) {
            this.playbackTime = time
        },
        getAudioInstance(src: string) {
            if (!this.audioInstance) {
                this.audioInstance = new Audio(src)
            }
            return this.audioInstance
        }
    },

    persist: true,
})
