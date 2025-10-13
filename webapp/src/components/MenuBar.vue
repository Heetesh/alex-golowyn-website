<template>
	<div>
		<!-- <div class="w-full h-[40px]" :class="audioStore.hasInteracted ? 'bg-green-500' : 'bg-red-500'">
			{{ audioStore.hasInteracted ? 'User Interacted' : 'Not interacted yet' }}
		</div> -->
		<Menubar :model="items" pt:root="" pt:itemLabel="">
			<template #end>
				<Button v-if="audioStore.hasInteracted"
					:class="audioStore.isAudioMuted ? 'p-button-primary' : 'p-button-info'"
					:icon="audioStore.isAudioMuted ? 'pi pi-volume-off' : 'pi pi-volume-up'" @click="muteAudio()" />
			</template>
		</Menubar>
	</div>
</template>

<script lang="ts">
import { useAudioStore } from '@/stores/audioStore'
import { type MenuItem } from 'primevue/menuitem'

export default {
	name: 'NavigationMenuBar',
	data() {
		return {
			items: [
				{
					label: 'Home',
					icon: '',
					command: () => this.$router.push('/'),
				},

				{
					label: 'Services',
					icon: '',
					// command: () => this.$router.push('/services'),
					items: [
						{
							label: 'Alpha',
							icon: '',
							command: () => this.$router.push('/services/alpha'),
						},
						{
							label: 'Beta',
							icon: '',
							command: () => this.$router.push('/services/beta'),
						},
						{
							label: 'Charlie',
							icon: '',
							command: () => this.$router.push('/services/charlie'),
						},
						{
							label: 'Delta',
							icon: '',
							command: () => this.$router.push('/services/delta'),
						},
						{
							label: 'Echo',
							icon: '',
							command: () => this.$router.push('/services/echo'),
						},
					],
				},
				{
					label: 'Weekly Quotes',
					icon: '',
					command: () => this.$router.push('/weekly_quotes'),
				},
				{
					label: 'Weekly Philosophy',
					icon: '',
					route: '/weekly_philosophy',
					command: () => this.$router.push('/weekly_philosophy'),
				},
				{
					label: 'Videos',
					icon: '',
					route: '/videos',
					command: () => this.$router.push('/videos'),
				},
				{
					label: 'Reviews',
					icon: '',
					route: '/reviews',
					command: () => this.$router.push('/reviews'),
				},
				{
					label: 'Contact',
					icon: '',
					route: '/contact',
					command: () => this.$router.push('/contact'),
				},
				{
					label: 'Donations',
					icon: '',
					route: '/donations',
					command: () => this.$router.push('/services'),
				},
				{
					label: 'About',
					icon: '',
					command: () => this.$router.push('/about'),
				},
			] as MenuItem[],

			audioStore: useAudioStore(),
		}
	},
	methods: {
		muteAudio() {
			useAudioStore().toggleMute()
		},
	},
}
</script>

<style scoped></style>
