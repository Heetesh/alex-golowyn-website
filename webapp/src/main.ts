/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
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
import { semantic  as Semantics } from '@primeuix/themes/lara/base'


export const WebsiteColorPreset = definePreset(Aura, {
	semantic: {
		 primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
			500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
		},
		colorScheme: {
			light: {
				primary: {
					color: '{primary.500}',
					hoverColor: '{primary.600}',
					activeColor: '{primary.800}',
					contrastColor: '{primary.50}'
				},
				// primary: {
				// 	color: 'red',
				// 	hoverColor: 'green',
				// 	activeColor: 'blue',
				// 	contrastColor: 'yellow'
				// },
				surface: {
					0: '{slate-0}',      // usually pure white or background
					50: '{slate-50}',
					100: '{slate-100}',
					200: '{slate-200}',
					300: '{slate-300}',
					400: '{slate-400}',
					500: '{slate-500}',
					600: '{slate-600}',
					700: '{slate-700}',
					800: '{slate-800}',
					900: '{slate-900}',
					950: '{slate-950}',
				},
				content: {
					color: '{primary.600}',
					background: '{primary.500}',
					borderColor: '{primary.500}',
					hoverBackground: '{primary.500}',
					hoverColor:  '{primary.500}',
				},
				overlay: {
					modal: {

					},
					popover: {},
					select: {}
				},
				text: {
					color: '#ffffff',
					hoverColor: '',
					hoverMutedColor: '',
					mutedColor: '',
				},
				highlight: {

				},
				focusRing: {
					shadow: ''
				},
				formField: {
					hoverBorderColor: '{primary.color}'
				}

				
			}, 
		}
	} as typeof Semantics

});

const app = createApp(App)





app.use(router)

app.use(createPinia())
app.use(pinia)

app.use(PrimeVue, {
	theme: {
		preset: WebsiteColorPreset,
	},
	ripple: true,
	
})

// app.component('Button', Button)


app.mount('#app')

// useUIStore().applyDarkClass()
