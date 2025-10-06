<template>
    <div class="">
        <Menubar :model='items'>

        </Menubar>
    </div>
</template>

<script lang="ts">
import { type MenuItem } from 'primevue/menuitem'



export default {
    name: "NavigationMenuBar",
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: '',
                    command: () => this.$router.push('/')
                },
                {
                    label: 'About',
                    icon: '',
                    command: () => this.$router.push('/about')

                },
                {
                    label: 'Services',
                    icon: '',
                    // command: () => this.$router.push('/services'),
                    items: [
                        {
                            label: 'Alpha',
                            icon: '',
                            command: () => this.$router.push('/services/alpha')
                        }, {
                            label: 'Beta',
                            icon: '',
                            command: () => this.$router.push('/services/beta')
                        }, {
                            label: 'Charlie',
                            icon: '',
                            command: () => this.$router.push('/services/charlie')
                        }, {
                            label: 'Delta',
                            icon: '',
                            command: () => this.$router.push('/services/delta')
                        }, {
                            label: 'Echo',
                            icon: '',
                            command: () => this.$router.push('/services/echo')
                        }
                    ],
                },
                {
                    label: 'Weekly Quotes',
                    icon: '',
                    command: () => this.$router.push('/weekly_quotes')
                },
                {
                    label: 'Weekly Philosophy',
                    icon: '',
                    route: '/weekly_philosophy',
                    command: () => this.$router.push('/weekly_philosophy')

                },
                {
                    label: 'Videos',
                    icon: '',
                    route: '/videos',
                    command: () => this.$router.push('/videos')

                },
                {
                    label: 'Reviews',
                    icon: '',
                    route: '/reviews',
                    command: () => this.$router.push('/reviews')

                },
                {
                    label: "Contact",
                    icon: '',
                    route: '/contact',
                    command: () => this.$router.push('/contact')

                },
                {
                    label: 'Donations',
                    icon: '',
                    route: '/donations',
                    command: () => this.$router.push('/services')

                }

            ] as MenuItem[]
        }
    }
}
</script>

<style scoped></style>