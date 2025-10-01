import { defineStore } from 'pinia'

interface UIState {
	darkMode: boolean 
	sidebarOpen: boolean
	currentTheme: string
}

export const useUIStore = defineStore('ui', {
	state: () => ({
		darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
		sidebarOpen: false,
		currentTheme: 'aura',
	}),

	getters: {
		isDarkMode: (state) => state.darkMode ,
		isSideBarOpen: (state) => state.sidebarOpen,
		isCurrentTheme: (state) => state.currentTheme,
	},

	actions: {
		toggleDarkMode() {
			this.darkMode = !this.darkMode
			this.applyDarkClass()
		},

		applyDarkClass() {
			if (this.darkMode) {
				document.documentElement.classList.add("dark")
			}
			else {
				document.documentElement.classList.remove("dark")
			}
		}

	},
	persist: true,
})
