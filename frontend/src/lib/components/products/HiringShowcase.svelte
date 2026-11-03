<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<!-- Moved from the old Solutions page (client review v2); h2 because the page hero owns the h1 -->
<section class="relative overflow-hidden bg-gradient-to-b from-neutral-light via-white to-white">
	<div class="page-container flex flex-col items-center gap-10 pt-14 text-center md:pt-20">
		<div class="flex max-w-3xl flex-col items-center gap-5">
			<span class="eyebrow"><Icon name="dashboard" size={14} /> Solutions</span>
			<h2 class="title-section text-secondary">Your next hire starts here.</h2>
			<p class="lead max-w-2xl text-text-secondary">
				We match skilled students and graduates with the right roles, helping businesses grow and
				people thrive.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.waitlistEmployer} class="btn btn-primary">
					Join the Waitlist <Icon name="arrow-right" size={18} />
				</a>
				<a href={links.demo} class="btn btn-outline">Request a Demo</a>
			</div>
		</div>

		<!-- The client's candidate-review screen (review image 15), relabelled for BetaMatch and Express Interest -->
		<div class="relative w-full max-w-5xl">
			<div class="pointer-events-none absolute inset-x-10 -top-6 bottom-0 rounded-[2rem] bg-primary/15 blur-3xl"></div>
			<img
				src="/images/products/talent-review.webp"
				srcset="/images/products/talent-review-1200.webp 1200w, /images/products/talent-review.webp 1744w"
				sizes="(min-width: 1100px) 1024px, 92vw"
				width="1744"
				height="1348"
				alt="JobBeta candidate review screen showing matched marketing graduates, BetaMatch scores and Express Interest"
				loading="lazy"
				decoding="async"
				class="relative aspect-[16/7] w-full rounded-t-2xl object-cover object-top shadow-2xl ring-1 ring-black/5 md:rounded-t-3xl"
			/>
		</div>
	</div>
</section>
