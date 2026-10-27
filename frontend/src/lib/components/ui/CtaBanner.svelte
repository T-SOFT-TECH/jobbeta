<script lang="ts">
	import Icon from './Icon.svelte';
	import { links } from '$lib/config/site';

	type Action = { label: string; href: string };

	let {
		title = "Your career journey begins here. Let's create magic together.",
		body = 'Be first to access features, stay ahead with early updates and unlock opportunities designed for you.',
		primary = { label: 'Join Waitlist as Student', href: links.waitlistStudent },
		secondary = { label: 'Join as Employer', href: links.waitlistEmployer },
		tertiary = { label: 'Career centre? Talk to us', href: links.partner }
	}: {
		title?: string;
		body?: string;
		primary?: Action;
		secondary?: Action;
		tertiary?: Action | null;
	} = $props();
</script>

<section class="section bg-white">
	<div class="page-container">
		<div
			class="grid gap-8 rounded-[2rem] bg-gradient-to-br from-primary via-[#5a03c9] to-[#3296f8] p-8 text-white md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-14"
		>
			<div class="flex max-w-2xl flex-col gap-4">
				<h2 class="title-section">{title}</h2>
				<p class="lead text-white/85">{body}</p>
			</div>
			<div class="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
				<a href={primary.href} class="btn btn-light text-primary">
					{primary.label} <Icon name="arrow-right" size={18} />
				</a>
				<a href={secondary.href} class="btn btn-outline-light">
					{secondary.label} <Icon name="arrow-right" size={18} />
				</a>
				{#if tertiary}
					<a href={tertiary.href} class="text-center font-geist text-sm text-white/85 underline underline-offset-4 hover:text-white">
						{tertiary.label}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
