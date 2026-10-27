<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import EmailCapture from '$lib/components/ui/EmailCapture.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import JobCard from '$lib/components/jobs/JobCard.svelte';
	import { sampleJobs } from '$lib/content/home';
	import { morph, vtName } from '$lib/motion/transitions';

	// Pre-launch: listings are fictional samples, labelled as such. Filtering is real (client-side)
	// so the chips do what they look like they do.
	const categories = ['All', ...new Set(sampleJobs.map((j) => j.category))];
	let category = $state('All');
	const visible = $derived(
		category === 'All' ? sampleJobs : sampleJobs.filter((j) => j.category === category)
	);

	let grid: HTMLUListElement;
	const slug = (role: string) => role.toLowerCase().replace(/[^a-z0-9]+/g, '-');

	// Filtering runs as a View Transition: cards that stay fly to their new slot, the rest pop in or out
	function pick(next: string) {
		if (next === category) return;
		morph(() => (category = next), {
			arm: (on) =>
				grid.querySelectorAll<HTMLElement>('[data-job]').forEach((el) =>
					vtName(el, on ? `job-${el.dataset.job}` : null, 'vt-card')
				)
		});
	}

	const resources = [
		{ title: 'Tech CV guide', body: 'Write a CV that gets noticed.', img: '/images/jobs/frame-20856640660.png' },
		{ title: 'Salary negotiation', body: 'Master the art of negotiating your worth.', img: '/images/jobs/frame-20856640720.png' },
		{ title: 'Career development', body: 'Tips for growing in your first role.', img: '/images/jobs/frame-20856640721.png' },
		{ title: 'Technical interviews', body: 'Prepare for your next interview.', img: '/images/jobs/frame-20856640722.png' }
	];
</script>

<svelte:head>
	<title>Jobs | JobBeta</title>
	<meta
		name="description"
		content="Internships, graduate roles and first jobs for students and graduates. Join the waitlist for job alerts at launch."
	/>
</svelte:head>

<section class="relative overflow-hidden bg-primary text-white">
	<div class="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
	<div class="page-container relative flex flex-col items-center gap-6 py-14 text-center md:py-20">
		<span class="eyebrow-light"><Icon name="briefcase" size={14} /> Jobs</span>
		<h1 class="title-display max-w-3xl">Internships and first jobs, matched to you.</h1>
		<p class="lead max-w-2xl text-white/85">
			Job listings open when JobBeta launches. Get alerts now and be first to apply for roles that
			fit your skills.
		</p>
		<EmailCapture role="student" buttonLabel="Get job alerts" class="w-full max-w-xl" />
	</div>
</section>

<section class="section bg-white">
	<div class="page-container">
		<div class="flex flex-col gap-3">
			<h2 class="title-section text-secondary">The kind of roles you'll find</h2>
			<p class="lead text-text-secondary">Sample listings from fictional companies, shown for illustration.</p>
		</div>

		<!-- Swipeable on phones, wraps from md up -->
		<div
			class="-mx-6 mt-8 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:-mx-10 sm:px-10 md:mx-0 md:flex-wrap md:px-0"
			role="group"
			aria-label="Filter by category"
		>
			{#each categories as c (c)}
				<button
					type="button"
					aria-pressed={category === c}
					onclick={() => pick(c)}
					class="shrink-0 rounded-full px-4 py-2 font-geist text-sm font-medium whitespace-nowrap transition-colors {category === c
						? 'bg-primary text-white'
						: 'bg-neutral-light text-secondary hover:bg-neutral-grey'}"
				>
					{c}
				</button>
			{/each}
		</div>

		<ul bind:this={grid} class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as job (job.role)}
				<li data-job={slug(job.role)}><JobCard {job} /></li>
			{/each}
		</ul>
	</div>
</section>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
			<h2 class="title-section text-secondary">Career resources</h2>
			<a href="/career-tips" class="inline-flex items-center gap-2 font-geist font-semibold text-primary">
				All career tips <Icon name="arrow-right" size={18} />
			</a>
		</div>
		<ul class="snap-row mt-8 md:grid-cols-2 lg:grid-cols-4">
			{#each resources as r (r.title)}
				<li>
					<a href="/career-tips" class="group lift flex h-full flex-col gap-3 rounded-2xl bg-white p-3">
						<img src={r.img} alt="" loading="lazy" class="aspect-[4/3] w-full rounded-xl object-cover" />
						<div class="px-1 pb-1 font-geist">
							<p class="font-semibold text-secondary group-hover:text-primary">{r.title}</p>
							<p class="mt-1 text-sm text-text-secondary">{r.body}</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<CtaBanner />
