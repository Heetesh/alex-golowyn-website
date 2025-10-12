import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
	state: () => ({
		currentTime: 0,
		isAudioMuted: false,
		hasInteracted: false,
	}),

	actions: {
		setPlaybackTime(time: number): void {
			this.currentTime = time
		},

		toggleMute() {
			this.isAudioMuted = !this.isAudioMuted
		},
	},

	persist: {
		pick: ['currentTime'],
		//  pick: ['currentTime', 'isAudioMuted'],
		//  pick: ['isAudioMuted'],
	},
})
