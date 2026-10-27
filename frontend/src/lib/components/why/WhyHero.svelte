<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<!-- Client brief: a smaller image on the right with things happening around it, not a full-bleed photo -->
<section class="relative overflow-hidden bg-gradient-to-b from-neutral-light to-white">
	<div
		class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute right-1/4 -bottom-16 h-80 w-80 rounded-full bg-[#3296f8]/10 blur-3xl"
	></div>

	<div
		class="page-container relative grid items-center gap-12 py-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-16"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow"><Icon name="sparkles" size={14} /> Why JobBeta?</span>
			<h1 class="title-display text-secondary">Because early careers deserve a better start.</h1>
			<p class="lead max-w-xl text-text-secondary">
				We're building more than a job board. JobBeta is a place where students, graduates and
				employers connect meaningfully, grow together and succeed.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.howItWorks} class="btn btn-primary">See How It Works</a>
				<a href={links.waitlist} class="btn btn-outline">Join Now – It's Free</a>
			</div>
		</div>

		<div class="relative mx-auto w-full max-w-sm lg:max-w-md">
			<div class="absolute -top-6 -right-6 hidden h-24 w-24 rounded-full border border-primary/20 sm:block"></div>
			<div class="absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full border border-[#3296f8]/20 sm:block"></div>
			<img
				src="/images/hero-2.jpg"
				alt="Early-career professionals walking and talking together"
				fetchpriority="high"
				class="aspect-[4/5] max-h-[460px] w-full rounded-3xl object-cover shadow-2xl"
			/>
			<div
				class="absolute top-8 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 sm:-left-12"
			>
				<span class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
					<Icon name="calendar" size={18} />
				</span>
				<div class="font-geist leading-tight">
					<p class="text-sm font-semibold text-secondary">Interview booked</p>
					<p class="text-xs text-text-secondary">Graduate Analyst · Tue, 10:00</p>
				</div>
			</div>
			<div
				class="absolute -right-4 -bottom-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 sm:-right-10"
			>
				<span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
					<Icon name="shield-check" size={18} />
				</span>
				<div class="font-geist leading-tight">
					<p class="text-sm font-semibold text-secondary">Verified opportunities</p>
					<p class="text-xs text-text-secondary">From reviewed employers</p>
				</div>
			</div>
		</div>
	</div>
</section>
