<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import MatchCard from '$lib/components/ui/MatchCard.svelte';
	import { exclusiveFeatures } from '$lib/content/students';
</script>

<!-- Client review: "two cards on the right instead of the long image" -->
<section class="section bg-neutral-light">
	<div class="page-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-3">
				<h2 class="title-section text-secondary">Exclusive features for students & graduates</h2>
				<p class="lead text-text-secondary">
					We don't just help you find jobs. We help you build a career, and it's free.
				</p>
			</div>
			<ul class="grid gap-4 sm:grid-cols-2">
				{#each exclusiveFeatures as feature (feature.title)}
					<li class="flex gap-3">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
							<Icon name={feature.icon} size={20} />
						</span>
						<div class="font-geist">
							<p class="font-semibold text-secondary">{feature.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-text-secondary">{feature.body}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex flex-col gap-5">
			<div class="flex flex-col gap-3 rounded-3xl bg-primary p-6 text-white md:p-7">
				<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
					<Icon name="shield-check" size={20} />
				</span>
				<p class="font-geist text-xl font-semibold">Verified opportunities only</p>
				<p class="font-geist text-sm leading-relaxed text-white/80">
					Every listing comes from a reviewed employer, so you never waste time on dead or fake job
					posts.
				</p>
			</div>
			<MatchCard />
		</div>
	</div>
</section>
