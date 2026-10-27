<script lang="ts">
	import Icon from './Icon.svelte';

	// Illustrative candidate card (sample data) showing how a match is presented
	let {
		name = 'Afolasade Williams',
		role = 'Cloud Engineer',
		location = 'Lagos, Nigeria',
		score = 94,
		skills = ['Python', 'AWS', 'Terraform', 'Docker', 'Node.js'],
		class: className = ''
	}: {
		name?: string;
		role?: string;
		location?: string;
		score?: number;
		skills?: string[];
		class?: string;
	} = $props();

	const initials = $derived(
		name
			.split(' ')
			.map((part) => part[0])
			.join('')
	);
</script>

<figure class="relative mx-auto w-full max-w-md {className}">
	<div class="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-7">
		<div class="flex items-center gap-4">
			<span
				class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#3296f8] font-geist text-lg font-bold text-white"
			>
				{initials}
			</span>
			<div class="min-w-0">
				<p class="truncate font-geist text-lg font-semibold text-secondary">{name}</p>
				<p class="flex items-center gap-1 font-geist text-sm text-text-secondary">
					{role} · <Icon name="map-pin" size={14} />
					{location}
				</p>
			</div>
		</div>

		<div class="mt-5 rounded-2xl bg-primary/6 p-4">
			<div class="flex items-baseline justify-between font-geist">
				<span class="text-xs font-semibold tracking-wider text-primary uppercase">AI match score</span>
				<span class="text-sm font-bold text-primary">{score}% · Excellent fit</span>
			</div>
			<div class="mt-3 h-2 overflow-hidden rounded-full bg-primary/15">
				<div
					data-reveal="bar"
					class="h-full rounded-full bg-gradient-to-r from-primary to-[#3296f8]"
					style="width: {score}%"
				></div>
			</div>
		</div>

		<ul class="mt-5 flex flex-wrap gap-2" aria-label="Top skills">
			{#each skills as skill (skill)}
				<li class="rounded-full bg-neutral-light px-3 py-1 font-geist text-sm font-medium text-primary">
					{skill}
				</li>
			{/each}
		</ul>

		<div class="mt-6 flex gap-3" aria-hidden="true">
			<span class="btn btn-primary min-w-0 flex-1 px-3 py-3 text-sm sm:px-6 sm:text-base">Invite to interview</span>
			<span class="btn btn-outline min-w-0 flex-1 px-3 py-3 text-sm sm:px-6 sm:text-base">View profile</span>
		</div>
	</div>

	<span
		class="absolute -top-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 font-geist text-sm font-semibold text-secondary shadow-lg ring-1 ring-black/5"
	>
		<span class="h-2 w-2 rounded-full bg-emerald-500"></span> Top pick for your role
	</span>
	<figcaption class="mt-3 text-center font-geist text-xs text-current opacity-70">
		Example profile for illustration
	</figcaption>
</figure>
