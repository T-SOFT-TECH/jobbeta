<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { building } from '$lib/content/careerCenters';
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<span class="eyebrow">Coming Soon</span>
			<h2 class="title-section text-secondary">What we're building for career centres</h2>
			<p class="lead text-text-secondary">
				Tools designed to help institutions support students from career preparation to employment.
			</p>
		</div>

		<ul class="snap-row mt-10 md:grid-cols-3">
			{#each building as item (item.title)}
				<li class="lift flex flex-col gap-4 rounded-3xl bg-white p-6 md:p-7">
					<span
						class="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
						style="background-color: {item.accent}"
					>
						<Icon name={item.icon} size={22} />
					</span>
					<h3 class="font-geist text-xl font-semibold text-secondary">{item.title}</h3>
					<p class="font-geist text-base leading-relaxed text-text-secondary">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
