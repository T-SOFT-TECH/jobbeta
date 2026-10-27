<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { talentPoints } from '$lib/content/employers';
</script>

<!-- Client review (image 33): the candidate list + match panel replaces the old card -->
<section class="section bg-neutral-light">
	<div class="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col items-start gap-6">
			<div class="flex flex-col gap-3">
				<h2 class="title-section text-secondary">Find top talent faster and smarter</h2>
				<p class="lead text-text-secondary">
					We connect employers with skilled students and graduates who are ready to grow with
					your organisation, and our matching shows you who fits and why.
				</p>
			</div>
			<ul class="grid gap-5 sm:grid-cols-2">
				{#each talentPoints as point (point.title)}
					<li class="flex gap-3">
						<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
							<Icon name="check" size={15} strokeWidth={3} />
						</span>
						<div class="font-geist">
							<p class="font-semibold text-secondary">{point.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-text-secondary">{point.body}</p>
						</div>
					</li>
				{/each}
			</ul>
			<a href={links.waitlistEmployer} class="btn btn-primary w-full sm:w-auto">
				Start hiring <Icon name="arrow-right" size={18} />
			</a>
		</div>

		<div class="overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5 md:p-4">
			<img
				src="/images/employers/candidate-match-panel.png"
				alt="Candidate list beside a match view explaining a 90% AI match"
				loading="lazy"
				class="aspect-[4/3] w-full rounded-2xl object-cover object-top"
			/>
		</div>
	</div>
</section>
