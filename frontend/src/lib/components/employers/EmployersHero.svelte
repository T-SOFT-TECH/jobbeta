<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-neutral-light via-white to-white">
	<div class="page-container flex flex-col items-center gap-10 pt-12 text-center md:pt-16">
		<div class="flex max-w-3xl flex-col items-center gap-5">
			<span class="eyebrow"><Icon name="briefcase" size={14} /> For employers</span>
			<h1 class="title-display text-secondary">Find the right early-career talent with JobBeta.</h1>
			<p class="lead max-w-2xl text-text-secondary">
				Discover promising students and graduates, find candidates who fit your needs, and manage
				hiring in one place.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.waitlistEmployer} class="btn btn-primary">
					Join the Waitlist <Icon name="arrow-right" size={18} />
				</a>
				<a href={links.demo} class="btn btn-outline">Request a Demo</a>
			</div>
		</div>

		<!-- Client review v2: larger and sharper. srcset serves the full-resolution export on dense screens -->
		<div class="relative w-full max-w-6xl">
			<div class="pointer-events-none absolute inset-x-10 -top-6 bottom-0 rounded-[2rem] bg-primary/15 blur-3xl"></div>
			<img
				src="/images/employers/dashboard-overview.webp"
				srcset="/images/employers/dashboard-overview.webp 1400w, /images/employers/dashboard-overview-full.webp 1694w"
				sizes="(min-width: 1280px) 1152px, 92vw"
				width="1400"
				height="815"
				alt="JobBeta employer dashboard showing active roles, new student matches, shortlists and interviews"
				fetchpriority="high"
				class="relative aspect-[16/7.5] w-full rounded-t-2xl object-cover object-top shadow-2xl ring-1 ring-black/5 md:rounded-t-3xl"
			/>
		</div>
	</div>
</section>
