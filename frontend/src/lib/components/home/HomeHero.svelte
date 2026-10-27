<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-neutral-light to-white">
	<div
		class="page-container grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-16"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow"><Icon name="graduation" size={14} /> Level up your career</span>
			<h1 class="title-display text-secondary">
				Discover your next career opportunity and find the perfect candidate today.
			</h1>
			<p class="lead max-w-xl text-text-secondary">
				We're changing how companies hire and how early-career talent finds meaningful
				opportunities — from first internships to full-time roles.
			</p>
			<a href={links.waitlist} class="btn btn-primary w-full sm:w-auto">
				Join Our Waitlist <Icon name="arrow-right" size={18} />
			</a>
			<p class="font-geist text-sm text-text-secondary">Free for students and graduates.</p>
		</div>

		<div class="relative">
			<img
				src="/images/2148190729 1.webp"
				alt="Two young professionals celebrating with a thumbs up"
				fetchpriority="high"
				class="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[4/5] lg:max-h-[520px]"
			/>
			<!-- Product hint: what a match notification looks like -->
			<div
				class="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 sm:left-6 lg:-left-8"
			>
				<span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
					<Icon name="sparkles" size={18} />
				</span>
				<div class="font-geist leading-tight">
					<p class="text-sm font-semibold text-secondary">New match for you</p>
					<p class="text-xs text-text-secondary">Software Engineering Intern · Lagos</p>
				</div>
			</div>
		</div>
	</div>
</section>
