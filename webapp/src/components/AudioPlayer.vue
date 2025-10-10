<template>
    <div>

    </div>
</template>

<script lang="ts">

import sound from '@/assets/sound.mp3'
import { useAudioStore } from '@/stores/audioStore';

export default {
    name: "AudioPlayer",


    data() {
        return {
            audio: null as HTMLAudioElement | null,
        }
    },

    mounted() {
        this.audio = useAudioStore().getAudioInstance(sound)
        this.audio.loop = true
        this.audio.volume = .1
        this.audio.preload = "auto"
        this.audio.autoplay = true

        this.audio.currentTime = useAudioStore().playbackTime


        const startMusic = () => {
            this.audio?.play()

            document.removeEventListener("click", startMusic)
            document.removeEventListener("touchstart", startMusic)
            document.removeEventListener("keydown", startMusic)
        }

        document.addEventListener("click", startMusic)
        document.addEventListener("touchstart", startMusic)
        document.addEventListener("keydown", startMusic)


        this.audio.addEventListener('timeupdate', () => {
            useAudioStore().playbackTime = this.audio!.currentTime
        })
    },

    beforeUnmount() {
        this.audio?.pause()
    }
}

</script>

<style scoped></style>