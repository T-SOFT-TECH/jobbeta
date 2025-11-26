<script>
	const features = [
		{
			title: 'Attract',
			description: 'Stand out to early talent before they even apply',
			details:
				'Be where Gen Z is looking. From personalized employer profiles to targeted job promotion, JobBeta helps your brand show up (and stand out) on the platforms and places students trust most.',
			icon: '/images/solutions/work-outline4.svg'
		},
		{
			title: 'Connect',
			description:
				'Connecting the right talent to the right opportunities with precision, efficiency, and fairness.',
			details:
				'Search and match with top student talent using filters that actually make sense: skills, portfolios, course projects, and availability. Proactive sourcing meets curated connections.',
			icon: '/images/solutions/connect.svg'
		},
		{
			title: 'Engage',
			description: 'Make meaningful impressions that convert',
			details:
				'Reach out with messages that resonate. Host branded events, run micro-campaigns, and get more from every touchpoint — without sounding like every other company.',
			icon: '/images/solutions/work-outline5.svg'
		},
		{
			title: 'Hire Smarter',
			description: 'Track, assess, and hire with purpose',
			details:
				'From real-time performance data to match scoring and feedback loops, JobBeta empowers your team to make confident hiring decisions — and prove what’s working.',
			icon: '/images/solutions/connect.svg'
		}
	];
</script>

<section class="bg-neutral-light/20 w-full px-4 py-20">
	<div class="mx-auto flex max-w-6xl flex-col gap-20">
		<!-- Header -->
		<div class="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
			<h2 class="text-text-muted text-4xl font-bold">JobBeta Employer Solutions – 4 Pillars</h2>
			<p class="text-text-muted/65 text-xl">
				Our collection of solutions empowers educators, engages students, and builds stronger
				connections between institutions and their communities.
			</p>
		</div>

		<!-- Features Grid -->
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			{#each features as feature}
				<div
					class="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:flex-row"
				>
					<div class="bg-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-lg">
						<img src={feature.icon} alt={feature.title} class="h-8 w-8" />
					</div>
					<div class="flex flex-col gap-4">
						<h3 class="text-secondary text-[32px] font-semibold">{feature.title}</h3>
						<p class="text-secondary/80 text-xl font-medium">{feature.description}</p>
						<p class="text-text-muted/70 text-base leading-relaxed">
							{feature.details}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Show More Button -->
		<div class="flex justify-center">
			<button
				class="text-secondary rounded-[20px] border border-[#62717a] px-16 py-4 text-base font-bold transition-colors hover:bg-gray-50"
			>
				Show More
			</button>
		</div>
	</div>
</section>
