<script>
	import { base } from '$app/paths';
	import EmployerHeroDashboard from './EmployerHeroDashboard.svelte';
	import Animate from '$lib/components/Animate.svelte';

	let {
		title = 'Why Hire with JobBeta?',
		subtitle = 'Streamline your hiring process with efficient tools that simplify candidate sourcing, evaluation, and onboarding—saving you time while helping you find the right talent faster with JobBeta'
	} = $props();
</script>

<section class="relative overflow-hidden bg-white pb-32 pt-20">
	<!-- Decorative Background Lines -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Vertical Lines -->
		<div class="bg-primary/5 absolute bottom-0 left-[10%] top-0 w-[1px] -skew-x-12 transform"></div>
		<div class="bg-primary/5 absolute bottom-0 left-[25%] top-0 w-[1px] -skew-x-12 transform"></div>
		<div class="bg-primary/5 absolute bottom-0 left-[40%] top-0 w-[1px] -skew-x-12 transform"></div>
		<div class="bg-primary/5 absolute bottom-0 left-[60%] top-0 w-[1px] -skew-x-12 transform"></div>
		<div class="bg-primary/5 absolute bottom-0 left-[75%] top-0 w-[1px] -skew-x-12 transform"></div>
		<div class="bg-primary/5 absolute bottom-0 left-[90%] top-0 w-[1px] -skew-x-12 transform"></div>

		<!-- Horizontal/Diagonal Lines -->
		<div class="bg-primary/5 absolute left-0 right-0 top-[20%] h-[1px] -rotate-1 transform"></div>
		<div class="bg-primary/5 absolute left-0 right-0 top-[40%] h-[1px] -rotate-1 transform"></div>
		<div class="bg-primary/5 absolute left-0 right-0 top-[60%] h-[1px] -rotate-1 transform"></div>
	</div>

	<div class="container relative z-10 mx-auto px-4">
		<!-- Hero Content -->
		<Animate variant="bottom" duration={0.8}>
			<div class="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center">
				<h1 class="font-geist mb-6 text-4xl font-bold leading-tight text-neutral-800 md:text-6xl">
					{title}
				</h1>
				<p class="font-geist mx-auto mb-8 max-w-3xl text-lg text-neutral-600 md:text-xl">
					{subtitle}
				</p>

				<div class="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
					<button
						class="bg-primary font-lato hover:bg-primary/90 transform rounded-[20px] px-8 py-4 font-bold text-white shadow-lg transition-colors hover:-translate-y-0.5 hover:shadow-xl"
					>
						Register as An Employer
					</button>
					<button
						class="text-brand-dark-purple border-secondary font-lato hover:bg-secondary/10 rounded-[20px] border bg-transparent px-8 py-4 font-bold transition-colors"
					>
						Request For a Demo
					</button>
				</div>
			</div>
		</Animate>

		<!-- Dashboard Preview -->
		<Animate variant="fade" duration={0.8} delay={0.2}>
			<div class="relative mx-auto w-full max-w-[1149px]">
			<!-- Glow Effect behind dashboard -->
			<div
				class="bg-gradient-conic from-primary/20 to-primary/5 absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full via-transparent opacity-50 blur-3xl"
			></div>

				<EmployerHeroDashboard />
			</div>
		</Animate>
	</div>
</section>

<style>
	/* Custom font classes if not globally available, assuming they are in app.css or similar */
	.font-geist {
		font-family: 'Geist', sans-serif;
	}
	.font-lato {
		font-family: 'Lato', sans-serif;
	}
</style>
