<script lang="ts">
	import type { Testimonial } from '$lib/content/careerCenters';

	// Renders nothing until real quotes are published in /admin/testimonials
	let { testimonials = [] }: { testimonials?: Testimonial[] } = $props();
</script>

{#if testimonials.length}
	<section class="section bg-neutral-light">
		<div class="page-container">
			<h2 class="title-section text-center text-secondary">What our partners say</h2>
			<ul class="snap-row mt-10 md:grid-cols-2 lg:grid-cols-3">
				{#each testimonials as t (t.quote)}
					<li class="flex flex-col gap-4 rounded-3xl bg-white p-6">
						<blockquote class="font-geist text-base leading-relaxed text-secondary">“{t.quote}”</blockquote>
						<p class="mt-auto font-geist text-sm">
							<span class="font-semibold text-secondary">{t.author}</span>
							{#if t.company}<span class="text-text-secondary"> · {t.company}</span>{/if}
						</p>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}
