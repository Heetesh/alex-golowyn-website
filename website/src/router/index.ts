import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import WeeklyQuotesView from '@/views/WeeklyQuotesView.vue'
import WeeklyPhilosophyView from '@/views/WeeklyPhilosophyView.vue'
import VideosView from '@/views/VideosView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import ContactView from '@/views/ContactView.vue'
import DonationsView from '@/views/DonationsView.vue'
import AboutView from '@/views/AboutView.vue'
import AlphaService from '@/views/AlphaService.vue'
import BetaService from '@/views/BetaService.vue'
import CharlieService from '@/views/CharlieService.vue'
import DeltaService from '@/views/DeltaService.vue'
import EchoService from '@/views/EchoService.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/services',
			name: 'services',
			children: [
				{
					path: '',
					name: 'services-overview',
					component: ServicesView,
				},
				{
					path: 'alpha',
					name: 'alpha-service',
					component: AlphaService,
				},
				{
					path: 'beta',
					name: 'beta-service',
					component: BetaService,
				},
				{
					path: 'charlie',
					name: 'charlie-service',
					component: CharlieService,
				},
				{
					path: 'delta',
					name: 'delta-service',
					component: DeltaService,
				},
				{
					path: 'echo',
					name: 'Echo-service',
					component: EchoService,
				},
			],
		},

		{
			path: '/weekly_quotes',
			name: 'weekly-quotes',
			component: WeeklyQuotesView,
		},

		{
			path: '/weekly_philosophy',
			name: 'weekly-philosophy',
			component: WeeklyPhilosophyView,
		},

		{
			path: '/videos',
			name: 'videos',
			component: VideosView,
		},

		{
			path: '/reviews',
			name: 'reviews',
			component: ReviewsView,
		},

		{
			path: '/donations',
			name: 'donations',
			component: DonationsView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},

		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
	],
})

export default router
