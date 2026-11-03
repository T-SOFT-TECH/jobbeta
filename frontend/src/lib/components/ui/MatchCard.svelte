<script lang="ts">
	import Icon from './Icon.svelte';

	/**
	 * Illustrative match card (sample data).
	 * - `candidate`: what an employer sees, a candidate with their BetaMatch score.
	 * - `job`: what a student sees, an opportunity with their BetaMatch score
	 *   (layout follows the Figma job cards: logo, role, meta, type tags).
	 * Both end in "Express Interest": BetaMatch is mutual interest, not applying.
	 */
	let {
		variant = 'candidate',
		name = variant === 'job' ? 'Graduate Analyst' : 'Afolasade Williams',
		role = variant === 'job' ? 'Bluepine Finance' : 'Cloud Engineer',
		location = variant === 'job' ? 'Abuja' : 'Lagos, Nigeria',
		score = variant === 'job' ? 92 : 94,
		skills = variant === 'job'
			? ['Excel', 'Financial modelling', 'SQL', 'Presentation']
			: ['Python', 'AWS', 'Terraform', 'Docker', 'Node.js'],
		tags = ['Graduate programme', 'Hybrid'],
		logoColor = '#3296f8',
		class: className = ''
	}: {
		variant?: 'candidate' | 'job';
		/** Candidate name, or job title for `job` */
		name?: string;
		/** Candidate's role, or the employer for `job` */
		role?: string;
		location?: string;
		score?: number;
		skills?: string[];
		/** `job` only: opportunity type chips */
		tags?: string[];
		/** `job` only: employer logo tile colour */
		logoColor?: string;
		class?: string;
	} = $props();

	const isJob = $derived(variant === 'job');
	// Job cards show the employer's initials; candidate cards the person's
	const initials = $derived(
		(isJob ? role : name)
			.split(' ')
			.slice(0, 2)
			.map((part) => part[0])
			.join('')
	);
</script>

<figure class="relative mx-auto w-full max-w-md {className}">
	<div class="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-7">
		<div class="flex items-center gap-4">
			{#if isJob}
				<span
					class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-geist text-lg font-bold text-white"
					style="background-color: {logoColor}"
				>
					{initials}
				</span>
			{:else}
				<span
					class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#3296f8] font-geist text-lg font-bold text-white"
				>
					{initials}
				</span>
			{/if}
			<div class="min-w-0">
				<p class="truncate font-geist text-lg font-semibold text-secondary">{name}</p>
				<p class="flex items-center gap-1 font-geist text-sm text-text-secondary">
					{role} · <Icon name="map-pin" size={14} />
					{location}
				</p>
			</div>
		</div>

		{#if isJob}
			<ul class="mt-4 flex flex-wrap gap-2" aria-label="Opportunity type">
				{#each tags as tag (tag)}
					<li class="rounded-full bg-[#eaf4ff] px-3 py-1 font-geist text-xs font-semibold text-[#1f6fc4]">
						{tag}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mt-5 rounded-2xl bg-primary/6 p-4">
			<div class="flex items-baseline justify-between gap-3 font-geist">
				<span class="text-xs font-semibold tracking-wider text-primary uppercase">BetaMatch Score</span>
				<span class="text-sm font-bold text-primary">{score}% · {isJob ? 'Great match' : 'Excellent fit'}</span>
			</div>
			<div class="mt-3 h-2 overflow-hidden rounded-full bg-primary/15">
				<div
					data-reveal="bar"
					class="h-full rounded-full bg-gradient-to-r from-primary to-[#3296f8]"
					style="width: {score}%"
				></div>
			</div>
		</div>

		{#if isJob}
			<p class="mt-5 font-geist text-xs font-semibold tracking-wider text-text-secondary uppercase">
				Why you match
			</p>
		{/if}
		<ul class="flex flex-wrap gap-2 {isJob ? 'mt-2' : 'mt-5'}" aria-label={isJob ? 'Matching skills' : 'Top skills'}>
			{#each skills as skill (skill)}
				<li class="flex items-center gap-1 rounded-full bg-neutral-light px-3 py-1 font-geist text-sm font-medium text-primary">
					{#if isJob}<Icon name="check" size={13} strokeWidth={3} />{/if}
					{skill}
				</li>
			{/each}
		</ul>

		<div class="mt-6 flex gap-3" aria-hidden="true">
			<span class="btn btn-primary min-w-0 flex-1 px-3 py-3 text-sm sm:px-6 sm:text-base">Express Interest</span>
			<span class="btn btn-outline min-w-0 flex-1 px-3 py-3 text-sm sm:px-6 sm:text-base">
				{isJob ? 'View role' : 'View profile'}
			</span>
		</div>
	</div>

	<span
		class="absolute -top-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 font-geist text-sm font-semibold text-secondary shadow-lg ring-1 ring-black/5"
	>
		<span class="h-2 w-2 rounded-full bg-emerald-500"></span>
		{isJob ? 'Top match for you' : 'Top pick for your role'}
	</span>
	<figcaption class="mt-3 text-center font-geist text-xs text-current opacity-70">
		{isJob ? 'Example opportunity for illustration' : 'Example profile for illustration'}
	</figcaption>
</figure>
