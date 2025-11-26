<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Coming Soon</title>
	<meta name="description" content="Something beautiful is coming soon." />
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50 px-4"
>
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-3xl"
		></div>
	</div>

	<main
		class="relative max-w-2xl space-y-8 text-center"
		class:opacity-0={!mounted}
		class:animate-fade-in={mounted}
	>
		<div class="flex justify-center">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shadow-lg"
			>
				<svg
					class="h-8 w-8 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			</div>
		</div>

		<h1 class="text-5xl font-bold text-slate-800 md:text-7xl">Coming Soon</h1>

		<p class="mx-auto max-w-md text-lg text-slate-600 md:text-xl">
			Something beautiful is on the horizon.
		</p>

		<a
			href="https://portfolio.antenaina.dev"
			class="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-lg text-slate-600 shadow-sm backdrop-blur-sm hover:text-slate-800 hover:shadow-md"
			target="_blank"
			rel="noopener noreferrer">Check my portfolio in the meantime.</a
		>
	</main>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out forwards;
	}
</style>
