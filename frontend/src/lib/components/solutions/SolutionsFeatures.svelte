<script lang="ts">
	import Icon, { type IconName } from '$lib/components/ui/Icon.svelte';

	const pillars: { icon: IconName; title: string; tagline: string; body: string }[] = [
		{
			icon: 'megaphone',
			title: 'Attract',
			tagline: 'Stand out to early talent before they apply',
			body: 'Personalised employer profiles and targeted job promotion put your brand where students already look.'
		},
		{
			icon: 'users',
			title: 'Connect',
			tagline: 'The right talent for the right role',
			body: 'Match on skills, portfolios, course projects and availability, with filters that actually make sense.'
		},
		{
			icon: 'message',
			title: 'Engage',
			tagline: 'Make impressions that convert',
			body: 'Messages that resonate, branded events and micro-campaigns, without sounding like every other company.'
		},
		{
			icon: 'chart',
			title: 'Hire smarter',
			tagline: 'Track, assess and hire with purpose',
			body: 'Match scores, feedback loops and pipeline data help your team decide with confidence.'
		}
	];
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<span class="eyebrow">Employer solutions</span>
			<h2 class="title-section text-secondary">Four pillars of early-career hiring</h2>
			<p class="lead text-text-secondary">
				Everything you need to attract, connect with and hire students and graduates.
			</p>
		</div>

		<ol class="snap-row mt-10 md:grid-cols-2 lg:grid-cols-4">
			{#each pillars as pillar, i (pillar.title)}
				<li class="lift flex flex-col gap-3 rounded-3xl bg-white p-6">
					<div class="flex items-center justify-between">
						<span class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
							<Icon name={pillar.icon} size={22} />
						</span>
						<span class="font-geist text-sm font-semibold text-text-secondary/60">0{i + 1}</span>
					</div>
					<h3 class="mt-2 font-geist text-xl font-semibold text-secondary">{pillar.title}</h3>
					<p class="font-geist text-sm font-semibold text-primary">{pillar.tagline}</p>
					<p class="font-geist text-sm leading-relaxed text-text-secondary">{pillar.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
