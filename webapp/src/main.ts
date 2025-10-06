import './assets/index.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

import Nora from '@primeuix/themes/nora'
import Material from '@primeuix/themes/material'
import Lara from '@primeuix/themes/lara'


const app = createApp(App)

export const WebsiteColorPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: 'var(--primary-50)',
			100: 'var(--primary-100)',
			200: 'var(--primary-200)',
			300: 'var(--primary-300)',
			400: 'var(--primary-400)',
			500: 'var(--primary-500)', 
			600: 'var(--primary-600)',
			700: 'var(--primary-700)',
			800: 'var(--primary-800)',
			900: 'var(--primary-900)',
			950: 'var(--primary-950)',
		},
		surface: {
			50: 'var(--secondary-50)',
			100: 'var(--secondary-100)',
			200: 'var(--secondary-200)',
			300: 'var(--secondary-300)',
			400: 'var(--secondary-400)',
			500: 'var(--secondary-500)',
			600: 'var(--secondary-600)',
			700: 'var(--secondary-700)',
			800: 'var(--secondary-800)',
			900: 'var(--secondary-900)',
			950: 'var(--secondary-950)',
		},
		// info: {
		// 	50: 'var(--accent-50)',
		// 	100: 'var(--accent-100)',
		// 	200: 'var(--accent-200)',
		// 	300: 'var(--accent-300)',
		// 	400: 'var(--accent-400)',
		// 	500: 'var(--accent-500)',
		// 	600: 'var(--accent-600)',
		// 	700: 'var(--accent-700)',
		// 	800: 'var(--accent-800)',
		// 	900: 'var(--accent-900)',
		// 	950: 'var(--accent-950)',
		// },
	},
})

app.use(router)

app.use(createPinia())
app.use(pinia)

app.use(PrimeVue, {
	theme: {
		preset: WebsiteColorPreset,
	},
	ripple: true,
	options: {
		// darkModeSelector: 'class', // User toggle via .dark class
		darkModeSelector: false || 'none',
		cssLayer: false,
	},
})

app.mount('#app')

// useUIStore().applyDarkClass()
