<template>
	<div>
		<UButton>About Page</UButton>

		<div
			v-auto-animate
			class="p-8 rounded-lg bg-neutral-900 w-96"
		>
			<UButton
				class="text-xl font-bold"
				@click="isOpen = !isOpen"
			>
				Title
			</UButton>
			<p
				v-if="isOpen"
				class="py-8 text-xl font-bold"
			>
				Description goes here
			</p>
		</div>

		<UButton @click="dmHasBall = !dmHasBall">
			Pass Ball
		</UButton>
		<div v-auto-animate>
			<UButton
				v-if="dmHasBall"
				class="w-64 flex justify-center bg-secondary hover:bg-secondary-300"
			>
				Defensive Midfielder has ball
			</UButton>

			<UButton
				v-if="!dmHasBall"
				class="w-64 flex justify-center bg-primary"
			>
				Central Midfielder has ball
			</UButton>
		</div>

		<div>
			<UButton
				class="animate__animated"
				:class="isButtonBouncing ? 'animate__tada' : ''"
				@click="handleButtonClick($event)"
			>
				Animated Button
			</UButton>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			isOpen: false as boolean,
			dmHasBall: true,
			playerNames: ["Leonardo Lelo", "Simone Pafundi", "Roberto Carlos"],
			isButtonBouncing: false,
		};
	},
	methods: {
		handleButtonClick(event: Event): void {
			if (this.isButtonBouncing) return;

			const button = event.currentTarget as HTMLElement;

			this.isButtonBouncing = true;

			const onAnimationEnd = () => {
				button.removeEventListener("animationend", onAnimationEnd);
				this.isButtonBouncing = false;
			};

			button.addEventListener("animationend", onAnimationEnd);
		},
	},
};
</script>

<style scoped></style>
