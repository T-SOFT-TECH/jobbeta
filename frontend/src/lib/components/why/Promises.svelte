<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { promises } from '$lib/content/why';
</script>

<!-- Replaces the old "numbers" band: pre-launch, commitments are more honest than invented stats -->
<section class="section bg-secondary text-white">
	<div class="page-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
		<div class="flex flex-col gap-4">
			<span class="eyebrow-light">Our promise</span>
			<h2 class="title-section">Our numbers are just getting started. Our promises aren't.</h2>
		</div>
		<ul class="grid gap-4 sm:grid-cols-3">
			{#each promises as promise (promise.title)}
				<li class="lift flex flex-col gap-3 rounded-2xl bg-white/6 p-5 ring-1 ring-white/10">
					<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
						<Icon name={promise.icon} size={20} />
					</span>
					<p class="font-geist font-semibold">{promise.title}</p>
					<p class="font-geist text-sm leading-relaxed text-white/70">{promise.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
