<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { services } from '$lib/content/employers';
</script>

<section class="section bg-primary text-white">
	<div class="page-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
		<div class="flex flex-col items-start gap-5">
			<span class="eyebrow-light">Recruitment solutions</span>
			<h2 class="title-section">Everything you need to hire early-career talent</h2>
			<p class="lead text-white/80">
				End-to-end recruitment services built around students and graduates. Need a tailored
				hiring package? Talk to us.
			</p>
			<a href={links.contact} class="btn btn-light text-primary">Contact us</a>
		</div>

		<ul class="snap-row md:grid-cols-2">
			{#each services as service, i (service.title)}
				<li class="lift flex flex-col gap-3 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 {i === 0 ? 'md:col-span-2' : ''}">
					<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
						<Icon name={service.icon} size={20} />
					</span>
					<p class="font-geist font-semibold">{service.title}</p>
					<p class="font-geist text-sm leading-relaxed text-white/75">{service.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
