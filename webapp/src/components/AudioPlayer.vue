<template>
	<div></div>
</template>

<script lang="ts">
import sound from '@/assets/sound.mp3'
import { useAudioStore } from '@/stores/audioStore'

export default {
	name: 'AudioPlayer',

	data() {
		return {
			audio: null as HTMLAudioElement | null,
			audioStore: useAudioStore(),
		}
	},

	watch: {
		'audioStore.isAudioMuted': {
			handler(newVal: boolean) {
				if (this.audio) {
					this.audio.muted = newVal
				}
			},
			immediate: true,
		},
	},

	mounted() {
		this.setupAudioWithInteraction()
	},

	methods: {
		async setupAudioWithInteraction() {
			await this.setupAudio()

			await this.waitForInteraction()
		},

		async setupAudio() {
			this.audio = new Audio(sound)
			this.audio.loop = true
			this.audio.preload = 'auto'
			this.audio.volume = 0.1
			this.audio.muted = true
			this.audio.currentTime = this.audioStore.currentTime

			this.audio.addEventListener('timeupdate', () => {
				this.audioStore.currentTime = this.audio!.currentTime
			})
		},

		async waitForInteraction(): Promise<void> {
			return new Promise((resolve) => {
				const interactionHandler = async () => {
					document.removeEventListener('click', interactionHandler)
					document.removeEventListener('touchstart', interactionHandler)
					document.removeEventListener('keydown', interactionHandler)

					// if (this.audio) {
					// 	this.audio.muted = false
					// 	try {
					// 		await this.audio.play()
					// 		console.log('Playback started (mobile-safe)')
					// 	} catch (error) {
					// 		console.warn('Playback blocked even after interaction:', error)
					// 	}
					// }

					if (this.audio) {
						this.audio.muted = false
						const playPromise = this.audio.play()
						if (playPromise !== undefined) {
							playPromise
								.then(() => console.log('Playback started (mobile-safe)'))
								.catch((error) =>
									console.warn('Playback blocked even after interaction:', error),
								)
						}
					}

					this.audioStore.hasInteracted = true

					resolve()
				}

				document.addEventListener('click', interactionHandler, { once: true })
				document.addEventListener('touchstart', interactionHandler, { once: true })
				document.addEventListener('keydown', interactionHandler, { once: true })
			})
		},
	},

	beforeUnmount() {
		if (this.audio) {
			this.audio?.pause()
		}
	},
}
</script>

<style scoped></style>
