<script>
	import { base } from '$app/paths';

	const sidebarItems = [
		{ icon: 'account-balance2.svg', label: 'Overview', active: true },
		{ icon: 'class0.svg', label: 'Inbox' },
		{ icon: 'work-outline0.svg', label: 'Jobs' },
		{ icon: 'family-history0.svg', label: 'Events' },
		{ icon: 'task0.svg', label: 'People' },
		{ icon: 'patient-list2.svg', label: 'Career Center' },
		{ icon: 'library-books2.svg', label: 'Events' }
	];

	const candidates = [
		{
			name: 'Franklin Adekola',
			role: 'Full-time Cloud Engineer',
			exp: '6 Years Of Experience',
			location: 'Lagos',
			initial: 'F',
			color: 'bg-[#7502ff]',
			status: 'Passed Assesment'
		},
		{
			name: 'Jude Williams',
			role: 'Professional Marketer',
			exp: '3 Years Of Marketing',
			location: 'Oyo',
			initial: 'J',
			color: 'bg-[#d0e1fd]',
			textColor: 'text-[#2a2c2c]',
			status: 'Passed Assesment',
			highlight: true
		},
		{
			name: 'Jumoke Jadesola',
			role: 'Web Designer',
			exp: '4 Years Experience',
			location: 'Lagos, Nigeria',
			initial: 'J',
			color: 'bg-[#f7931e]',
			status: 'Passed Assesment'
		}
	];
</script>

<div class="relative mx-auto h-[500px] w-full max-w-[657px] md:h-[608px]">
	<!-- Main Window -->
	<div
		class="absolute top-0 left-0 h-full w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.30)]"
	>
		<!-- Inner Content with Top Border -->
		<div
			class="absolute top-[70px] left-1/2 flex h-[85%] w-[90%] -translate-x-1/2 overflow-hidden rounded-[20px] border-t-8 border-[#7502ff] bg-neutral-50 shadow-sm"
		>
			<!-- Sidebar -->
			<div
				class="hidden w-[140px] shrink-0 flex-col gap-6 border-r border-neutral-200/50 bg-white/50 p-6 sm:flex md:w-[209px]"
			>
				<div class="mb-4 flex items-center gap-2">
					<img src="{base}/images/employers/layer-23.svg" alt="JobBeta Logo" class="h-8" />
				</div>

				<div class="flex flex-col gap-5">
					{#each sidebarItems as item}
						<div
							class="flex items-center gap-4 text-sm font-bold {item.active
								? 'text-[#7502ff]'
								: 'font-normal text-[#2a2c2c]'}"
						>
							<img src="{base}/icons/employers/{item.icon}" alt="" class="h-5 w-5" />
							<span>{item.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Main Content Area -->
			<div class="relative flex-1 p-8">
				<div class="mb-8 pl-12 md:pl-24">
					<!-- Added padding-left to push text right -->
					<h3 class="mb-1 text-xl font-bold text-[#2a2c2c]">Candidates with passed Assessment</h3>
					<p class="text-sm text-[#2a2c2c]/50">Here is your Company's current status</p>
				</div>
			</div>
		</div>

		<!-- Floating Cards Container (Positioned Absolutely to Overlap) -->
		<div
			class="absolute top-[180px] left-[80px] z-20 flex w-[280px] flex-col gap-4 md:left-[130px] md:w-[320px]"
		>
			{#each candidates as candidate, i}
				<div
					class="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105 {candidate.highlight
						? 'z-30 scale-105 shadow-lg ring-1 ring-primary/10'
						: ''}"
					style="transform: translateX({i * 20}px);"
				>
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white {candidate.color} {candidate.textColor ||
							'text-white'}"
					>
						{candidate.initial}
					</div>
					<div class="flex-1">
						<div class="flex items-start justify-between">
							<div>
								<h4 class="text-base font-bold text-[#2a2c2c]">{candidate.name}</h4>
								<p class="mb-2 text-xs text-[#2a2c2c]/80">{candidate.role}</p>
							</div>
							{#if candidate.highlight}
								<!-- More options dots for highlighted card -->
								<div class="flex gap-1">
									<div class="h-1 w-1 rounded-full bg-neutral-400"></div>
									<div class="h-1 w-1 rounded-full bg-neutral-400"></div>
									<div class="h-1 w-1 rounded-full bg-neutral-400"></div>
								</div>
							{/if}
						</div>

						<div
							class="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-medium text-[#2a2c2c]/80"
						>
							<span>{candidate.exp}</span>
							<span class="list-item list-inside marker:text-neutral-300">{candidate.location}</span
							>
						</div>

						<div class="flex items-center gap-2 text-[10px] font-bold text-[#2a2c2c]">
							<div class="flex h-4 w-4 items-center justify-center rounded-full bg-[#008000]">
								<svg
									class="h-2.5 w-2.5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="4"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							{candidate.status}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- External Floating Elements (Decorations from SVG) -->
	<!-- Purple shape top right -->
	<div class="absolute top-20 right-10 -z-10 h-20 w-20 rounded-full bg-[#7502ff]/10 blur-xl"></div>
</div>
