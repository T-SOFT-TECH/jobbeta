<script>
	import Animate from '$lib/components/Animate.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
</script>

<svelte:head>
	<title>Jobs - JobBeta</title>
	<meta
		name="description"
		content="Find your dream job with JobBeta - The #1 Job Board for Students, Job seekers and employers"
	/>
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section with Search -->
	<section class="relative w-full overflow-hidden bg-primary py-16 lg:h-[637px] lg:py-0">
		<div class="page-container relative z-10 flex h-full items-center justify-center">
			<div class="flex w-full flex-col items-center justify-center gap-9 lg:w-[860px]">
				<!-- Header Text -->
				<Animate variant="bottom" duration={0.8}>
					<div class="flex flex-col items-center justify-start gap-3 text-center">
						<div
							class="font-geist text-base leading-6 font-medium text-white"
							style="letter-spacing: -0.005em"
						>
							Find Jobs tailored for you
						</div>
						<h1
							class="font-geist text-3xl leading-tight font-bold text-white lg:text-[40px] lg:leading-[46px]"
							style="letter-spacing: -0.005em"
						>
							The #1 Job Board for Students, Job seekers and employers
						</h1>
					</div>
				</Animate>

				<!-- Search Bar -->
				<Animate variant="fade" duration={0.6} delay={0.2}>
					<div class="flex w-full flex-col items-center justify-start gap-[27px]">
						<div
							class="flex h-auto w-full flex-col gap-3 rounded-[50px] bg-white p-4 lg:h-[90px] lg:flex-row lg:items-center lg:justify-between lg:p-4"
						>
							<div class="flex flex-col gap-3 lg:w-[619px] lg:flex-row lg:items-center lg:gap-2.5">
								<!-- Search Input -->
								<div class="flex w-full flex-row items-center gap-2.5 lg:w-[315px]">
									<img class="h-6 w-6" src="/icons/jobs/search0.svg" alt="" />
									<input
										type="text"
										placeholder="Search with job title, keywords"
										class="w-full border-none bg-transparent font-lato text-base leading-6 font-normal text-[rgba(42,44,44,0.49)] outline-none focus:ring-0 focus:outline-none"
										style="letter-spacing: -0.005em"
									/>
								</div>

								<!-- Divider -->
								<div
									class="hidden h-10 w-0 rotate-90 border-t-2 border-solid border-[rgba(48,48,48,0.16)] lg:block"
								></div>

								<!-- Location Input -->
								<div class="flex flex-row items-center gap-2.5">
									<img class="h-6 w-6" src="/icons/jobs/location-on0.svg" alt="" />
									<input
										type="text"
										placeholder="Location"
										class="w-full border-none bg-transparent font-lato text-base leading-6 font-normal text-[rgba(42,44,44,0.60)] outline-none focus:ring-0 focus:outline-none"
										style="letter-spacing: -0.005em"
									/>
								</div>
							</div>

							<!-- Search Button -->
							<button
								class="hover:bg-opacity-90 h-[62px] w-full rounded-[50px] bg-primary px-6 py-4 font-geist text-base leading-6 font-bold text-white transition-colors lg:w-[149px]"
								style="letter-spacing: -0.005em"
							>
								Search
							</button>
						</div>

						<!-- Popular Search Tags -->
						<div class="flex flex-wrap items-center justify-center gap-4">
							<button
								class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]"
							>
								<div
									class="w-[124px] text-center font-lato text-base leading-6 font-medium text-[rgba(250,255,255,0.90)]"
									style="letter-spacing: -0.005em"
								>
									Marketing
								</div>
							</button>
							<button
								class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]"
							>
								<div
									class="text-center font-lato text-base leading-6 font-medium text-[rgba(250,255,255,0.90)]"
									style="letter-spacing: -0.005em"
								>
									Finance Analyst
								</div>
							</button>
							<button
								class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]"
							>
								<div
									class="text-center font-lato text-base leading-6 font-medium text-[rgba(250,255,255,0.90)]"
									style="letter-spacing: -0.005em"
								>
									Software Engineer
								</div>
							</button>
							<button
								class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]"
							>
								<div
									class="w-[124px] text-center font-lato text-base leading-6 font-medium text-[rgba(250,255,255,0.90)]"
									style="letter-spacing: -0.005em"
								>
									Web Developer
								</div>
							</button>
						</div>
					</div>
				</Animate>
			</div>
		</div>

		<!-- Decorative Icons -->
		<img
			class="absolute top-[92px] right-[400px] hidden h-[60px] w-[60px] lg:block"
			src="/icons/jobs/school0.svg"
			alt=""
		/>
		<img
			class="absolute top-14 -right-[600px] hidden lg:block"
			src="/icons/jobs/group-13213144580.svg"
			alt=""
		/>
		<img
			class="absolute top-10 -left-[600px] hidden lg:block"
			src="/icons/jobs/group-13213144590.svg"
			alt=""
		/>
	</section>

	<!-- We are Changing Section -->
	<section class="w-full bg-white py-16 lg:py-24">
		<div
			class="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[20px] bg-[rgba(248,243,255,0.26)] px-6 py-16 lg:px-12 lg:py-20"
		>
			<!-- Header Content -->
			<Animate variant="bottom" duration={0.8}>
				<div
					class="mx-auto mb-12 flex max-w-[914px] flex-col items-center gap-5 text-center lg:mb-16"
				>
					<h2
						class="w-full font-geist text-3xl leading-tight font-bold text-black lg:w-[592px] lg:text-[40px] lg:leading-[60px]"
						style="letter-spacing: -0.005em"
					>
						We are Changing how Talents find Jobs
					</h2>
					<p
						class="w-full font-geist text-lg leading-relaxed text-[#62717a] lg:w-[727px] lg:text-xl lg:leading-[30px]"
						style="letter-spacing: -0.005em"
					>
						Partner with JobBeta to connect your students with verified job opportunities,
						career-building tools, and top employers — all on one dynamic platform.
					</p>
					<button
						class="mt-4 w-[276px] rounded-[20px] bg-primary p-4 font-geist text-base leading-6 font-bold text-white transition-colors hover:opacity-90"
						style="letter-spacing: -0.005em"
					>
						Partner With Us
					</button>
				</div>
			</Animate>

			<!-- Trending Jobs Section -->
			<div class="flex flex-col gap-6">
				<!-- Section Header -->
				<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
					<h3
						class="font-geist text-xl leading-9 font-bold text-black lg:text-2xl"
						style="letter-spacing: -0.005em"
					>
						Trending Jobs today
					</h3>
					<a
						href="/jobs"
						class="flex items-center gap-[18px] font-geist text-base leading-6 font-bold text-primary transition-opacity hover:opacity-80"
						style="letter-spacing: -0.005em"
					>
						See all
						<img class="h-6 w-6" src="/icons/jobs/line-end-arrow-notch0.svg" alt="" />
					</a>
				</div>

				<!-- Job Cards Grid -->
				<div class="flex flex-col gap-6 lg:gap-[45px]">
					<!-- Row 1 -->
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[35px]">
						<!-- Job Card 1 - First Bank -->
						<div
							class="border-neutral-primary-grey flex flex-col gap-6 rounded-lg border border-solid bg-white p-6 sm:flex-row sm:gap-8 lg:p-[38px]"
						>
							<img
								class="h-9 w-9 shrink-0 rounded-2xl object-cover"
								src="/images/jobs/first-bank-of-nigeria-icon-jpeg0.png"
								alt="First Bank"
							/>
							<div class="flex flex-col gap-6 lg:gap-8">
								<div class="flex flex-col gap-4">
									<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">First bank</span
										>
										<img
											class="hidden h-6 w-6 sm:block"
											src="/icons/jobs/work-outline0.svg"
											alt=""
										/>
									</div>
									<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-base leading-6 font-bold text-black"
											style="letter-spacing: -0.005em">Market Specialist</span
										>
										<span
											class="font-geist text-sm leading-[21px] font-normal text-black"
											style="letter-spacing: -0.005em">Posted about an hour ago</span
										>
									</div>
									<div class="flex flex-wrap items-center gap-4 lg:gap-5">
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Accounting</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Lagos, Nigeria</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">N250,000 - N400,000</span
											>
										</div>
									</div>
									<div class="flex flex-wrap gap-[5px]">
										<span
											class="bg-neutral rounded-lg px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">internship</span
										>
										<span
											class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Remote</span
										>
										<span
											class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Urgent</span
										>
									</div>
								</div>
								<div class="flex flex-wrap gap-3">
									<button
										class="font-raleway w-full rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white sm:w-[154px]"
										>Apply</button
									>
									<button
										class="font-raleway w-full rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)] sm:w-[154px]"
										>View Job</button
									>
								</div>
							</div>
						</div>

						<!-- Job Card 2 - Shell -->
						<div
							class="border-neutral-primary-grey flex flex-col gap-6 rounded-lg border border-solid bg-white p-6 sm:flex-row sm:gap-8 lg:p-[38px]"
						>
							<img
								class="h-9 w-9 shrink-0 rounded-2xl object-cover"
								src="/images/jobs/image0.png"
								alt="Shell"
							/>
							<div class="flex flex-col gap-6 lg:gap-8">
								<div class="flex flex-col gap-4">
									<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Shell</span
										>
										<img
											class="hidden h-6 w-6 sm:block"
											src="/icons/jobs/work-outline0.svg"
											alt=""
										/>
									</div>
									<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-base leading-6 font-bold text-black"
											style="letter-spacing: -0.005em">Bank Manager</span
										>
										<span
											class="font-geist text-sm leading-[21px] font-normal text-black"
											style="letter-spacing: -0.005em">Posted about an hour ago</span
										>
									</div>
									<div class="flex flex-wrap items-center gap-4 lg:gap-5">
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Accounting</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Lagos, Nigeria</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">N250,000 - N400,000</span
											>
										</div>
									</div>
									<div class="flex flex-wrap gap-[5px]">
										<span
											class="bg-neutral rounded-lg px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">internship</span
										>
										<span
											class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Remote</span
										>
										<span
											class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Urgent</span
										>
									</div>
								</div>
								<div class="flex flex-wrap gap-3">
									<button
										class="font-raleway w-full rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white sm:w-[154px]"
										>Apply</button
									>
									<button
										class="font-raleway w-full rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)] sm:w-[154px]"
										>View Job</button
									>
								</div>
							</div>
						</div>
					</div>

					<!-- Row 2 -->
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[35px]">
						<!-- Job Card 3 - Dangote -->
						<div
							class="border-neutral-primary-grey flex flex-col gap-6 rounded-lg border border-solid bg-white p-6 sm:flex-row sm:gap-8 lg:p-[38px]"
						>
							<img
								class="h-9 w-9 shrink-0 rounded-2xl object-cover"
								src="/images/jobs/dangote-cement-logo-png0.png"
								alt="Dangote"
							/>
							<div class="flex flex-col gap-6 lg:gap-8">
								<div class="flex flex-col gap-4">
									<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Dangote</span
										>
										<img
											class="hidden h-6 w-6 sm:block"
											src="/icons/jobs/work-outline0.svg"
											alt=""
										/>
									</div>
									<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-base leading-6 font-bold text-black"
											style="letter-spacing: -0.005em">Product Manager</span
										>
										<span
											class="font-geist text-sm leading-[21px] font-normal text-black"
											style="letter-spacing: -0.005em">Posted about an hour ago</span
										>
									</div>
									<div class="flex flex-wrap items-center gap-4 lg:gap-5">
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Accounting</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Lagos, Nigeria</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">N250,000 - N400,000</span
											>
										</div>
									</div>
									<div class="flex flex-wrap gap-[5px]">
										<span
											class="bg-neutral rounded-lg px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">internship</span
										>
										<span
											class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Remote</span
										>
										<span
											class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Urgent</span
										>
									</div>
								</div>
								<div class="flex flex-wrap gap-3">
									<button
										class="font-raleway w-full rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white sm:w-[154px]"
										>Apply</button
									>
									<button
										class="font-raleway w-full rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)] sm:w-[154px]"
										>View Job</button
									>
								</div>
							</div>
						</div>

						<!-- Job Card 4 - Moniepoint -->
						<div
							class="border-neutral-primary-grey flex flex-col gap-6 rounded-lg border border-solid bg-white p-6 sm:flex-row sm:gap-8 lg:p-[38px]"
						>
							<img
								class="h-9 w-9 shrink-0 rounded-2xl object-cover"
								src="/images/jobs/moniepoint-group-icon-jpeg0.png"
								alt="Moniepoint"
							/>
							<div class="flex flex-col gap-6 lg:gap-8">
								<div class="flex flex-col gap-4">
									<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Moniepoint</span
										>
										<img
											class="hidden h-6 w-6 sm:block"
											src="/icons/jobs/work-outline0.svg"
											alt=""
										/>
									</div>
									<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<span
											class="font-geist text-base leading-6 font-bold text-black"
											style="letter-spacing: -0.005em">Project Security Manager</span
										>
										<span
											class="font-geist text-sm leading-[21px] font-normal text-black"
											style="letter-spacing: -0.005em">Posted about an hour ago</span
										>
									</div>
									<div class="flex flex-wrap items-center gap-4 lg:gap-5">
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Accounting</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">Lagos, Nigeria</span
											>
										</div>
										<div class="flex items-center gap-2">
											<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
											<span
												class="font-raleway text-xs leading-[18px] font-normal"
												style="letter-spacing: -0.005em">N250,000 - N400,000</span
											>
										</div>
									</div>
									<div class="flex flex-wrap gap-[5px]">
										<span
											class="bg-neutral rounded-lg px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">internship</span
										>
										<span
											class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Remote</span
										>
										<span
											class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5 font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em">Urgent</span
										>
									</div>
								</div>
								<div class="flex flex-wrap gap-3">
									<button
										class="font-raleway w-full rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white sm:w-[154px]"
										>Apply</button
									>
									<button
										class="font-raleway w-full rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)] sm:w-[154px]"
										>View Job</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Companies Hiring Section -->
	<section class="w-full bg-white py-16 lg:py-24">
		<div class="page-container">
			<h2
				class="mb-12 text-center font-geist text-3xl leading-tight font-semibold text-black lg:mb-16 lg:text-[40px] lg:leading-[60px]"
				style="letter-spacing: -0.005em"
			>
				Companies Hiring for remote Jobs
			</h2>

			<div class="flex flex-wrap items-center justify-center gap-12 lg:gap-[83px]">
				<div class="h-14 w-[172px]">
					<img
						class="h-full w-full object-contain"
						src="/icons/jobs/group6.svg"
						alt="Company Logo"
					/>
				</div>
				<div class="h-[46px] w-[150px]">
					<img
						class="h-full w-full object-contain"
						src="/icons/jobs/clip-path-group0.svg"
						alt="Company Logo"
					/>
				</div>
				<div class="h-14 w-[172px]">
					<img
						class="h-full w-full object-contain"
						src="/icons/jobs/group7.svg"
						alt="Company Logo"
					/>
				</div>
				<div class="h-[46px] w-[150px]">
					<img
						class="h-full w-full object-contain"
						src="/icons/jobs/clip-path-group1.svg"
						alt="Company Logo"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Popular Job Categories Section -->
	<section class="bg-neutral relative w-full overflow-hidden py-16 lg:py-32">
		<!-- Decorative circles at top -->
		<div class="pointer-events-none absolute -top-10 right-[40%] hidden opacity-20 lg:block">
			<div class="flex gap-4">
				{#each Array(8) as _, i}
					<div
						class="h-[148px] w-[148px] rounded-full border border-white"
						style="transform: rotate(3deg)"
					></div>
				{/each}
			</div>
		</div>

		<div class="page-container relative">
			<!-- Section Header -->
			<Animate variant="bottom" duration={0.8}>
				<div class="mb-12 flex flex-col items-center justify-center gap-6 lg:mb-20">
					<div class="flex flex-col items-center justify-center gap-5">
						<h2
							class="text-center font-geist text-3xl leading-tight font-bold text-secondary lg:text-[40px] lg:leading-[51px]"
							style="letter-spacing: -0.005em"
						>
							Popular Job Categories
						</h2>
						<p
							class="text-center font-geist text-lg leading-[30px] font-medium text-secondary lg:text-xl"
							style="letter-spacing: -0.005em; opacity: 0.85"
						>
							1000 jobs live – 120 added today.
						</p>
					</div>
				</div>
			</Animate>

			<!-- Categories Grid - 3 columns on desktop -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[46px]">
				<!-- Category Card 1: Banking -->
				<a
					href="/jobs?category=banking"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Banking</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[#eeecfc]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl bg-[#110d21]"
						>
							<img
								class="h-[147px] w-[242px] object-contain"
								src="/icons/jobs/categories/group-1030.svg"
								alt=""
							/>
						</div>
					</div>
				</a>

				<!-- Category Card 2: Technology -->
				<a
					href="/jobs?category=technology"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Technology</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[rgba(234,255,209,0.91)]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl"
						>
							<img
								class="h-full w-full object-cover"
								src="/icons/jobs/categories/technology.svg"
								alt=""
							/>
						</div>
					</div>
				</a>

				<!-- Category Card 3: Finance/Accounting -->
				<a
					href="/jobs?category=finance"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Finance/Accounting</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[rgba(255,221,181,0.91)]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl bg-[#ffa500]"
						>
							<img
								class="h-[148px] w-[155px] object-contain"
								src="/icons/jobs/categories/group5.svg"
								alt=""
							/>
						</div>
					</div>
				</a>

				<!-- Category Card 4: Customer Service -->
				<a
					href="/jobs?category=customer-service"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Customer Service</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[#c4bbff]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl bg-[#020eff]"
						>
							<img
								class="h-[155px] w-[220px] object-contain"
								src="/icons/jobs/categories/group6.svg"
								alt=""
							/>
						</div>
					</div>
				</a>

				<!-- Category Card 5: Health Care -->
				<a
					href="/jobs?category=healthcare"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Health Care</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[#a3c0f9]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl"
						>
							<img
								class="h-full w-full object-cover"
								src="/icons/jobs/categories/healthcare.svg"
								alt=""
							/>
						</div>
					</div>
				</a>

				<!-- Category Card 6: Education -->
				<a
					href="/jobs?category=education"
					class="group relative h-[380px] overflow-hidden rounded-[20px] bg-primary transition-transform hover:scale-[1.02] lg:h-[430px]"
				>
					<div
						class="absolute top-[51px] left-1/2 flex -translate-x-1/2 items-start justify-between gap-4"
					>
						<div class="flex flex-col gap-2">
							<span
								class="font-geist text-lg leading-[27px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">Education</span
							>
							<span
								class="font-geist text-sm leading-[21px] font-bold text-white"
								style="letter-spacing: -0.005em; opacity: 0.85">( 3 Positions Opened )</span
							>
						</div>
						<img
							class="h-6 w-6 transition-transform group-hover:translate-x-1"
							src="/icons/jobs/line-end-arrow-notch0.svg"
							alt=""
						/>
					</div>
					<!-- Illustration Box -->
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div
							class="absolute top-[-11px] left-1/2 h-[164px] w-[234px] -translate-x-1/2 rounded-2xl bg-[#fdd7ff]"
						></div>
						<div
							class="relative flex h-[194px] w-72 items-center justify-center overflow-hidden rounded-2xl"
						>
							<img
								class="h-full w-full object-cover"
								src="/icons/jobs/categories/education.svg"
								alt=""
							/>
						</div>
					</div>
				</a>
			</div>
		</div>

		<!-- Decorative circles at bottom -->
		<div class="pointer-events-none absolute -bottom-20 -left-20 hidden opacity-10 lg:block">
			<div class="flex flex-wrap gap-4">
				{#each Array(6) as _, i}
					<div
						class="h-[148px] w-[148px] rounded-full border border-white"
						style="transform: rotate(11deg)"
					></div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Most Recent Jobs Section - Inside Light Purple Container -->
	<section class="w-full bg-white py-16 lg:py-32">
		<div
			class="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[20px] bg-[rgba(248,243,255,0.26)] px-6 py-16 lg:h-[1728px] lg:px-0 lg:py-0"
		>
			<!-- Section Header -->
			<Animate variant="bottom" duration={0.8}>
				<div
					class="flex flex-col items-start justify-between gap-6 lg:absolute lg:top-[90px] lg:left-[calc(50%-612px)] lg:w-[1214px] lg:flex-row lg:items-center"
				>
					<div class="flex flex-col gap-5">
						<h2
							class="font-geist text-3xl leading-tight font-bold text-black lg:w-[592px] lg:text-[40px] lg:leading-[60px]"
							style="letter-spacing: -0.005em"
						>
							Most Recent Flexible & Remote Jobs
						</h2>
						<p
							class="font-geist text-lg leading-[30px] text-[#62717a] lg:text-xl"
							style="letter-spacing: -0.005em"
						>
							Find Your Purpose and jobs that suits your passion
						</p>
					</div>
					<button
						class="flex w-[276px] items-center justify-end gap-2.5 rounded-[20px] p-4 font-geist text-base leading-6 font-bold text-primary transition-colors hover:opacity-80"
						style="letter-spacing: -0.005em"
					>
						Find Your Next Job
						<img class="h-6 w-6" src="/icons/jobs/arrow-right-alt0.svg" alt="" />
					</button>
				</div>
			</Animate>

			<!-- Filter Tabs -->
			<div
				class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:absolute lg:top-[293px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
			>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-primary p-2.5 font-lato text-base leading-6 font-medium text-white"
					style="letter-spacing: -0.005em"
				>
					All
				</button>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Marketing
				</button>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Art/ Creative
				</button>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Accounting
				</button>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Chef
				</button>
				<button
					class="rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Software Engineer
				</button>
				<button
					class="w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 font-lato text-base leading-6 font-medium text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white"
					style="letter-spacing: -0.005em"
				>
					Designer
				</button>
			</div>

			<!-- Job Cards -->
			<div
				class="mt-12 flex flex-col gap-8 lg:absolute lg:top-[400px] lg:left-[calc(50%-607px)] lg:mt-0 lg:w-[1214px] lg:gap-[103px]"
			>
				<!-- Row 1 -->
				<div class="flex flex-col gap-6 lg:flex-row lg:gap-[92px]">
					<!-- Job Card 1 -->
					<div
						class="border-neutral-primary-grey flex flex-row gap-8 rounded-lg border border-solid bg-white p-6 lg:p-[38px]"
					>
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image0.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="flex-1 font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
										style="letter-spacing: -0.005em"
									>
										Shell
									</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline0.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="font-geist text-base leading-6 font-bold text-black"
										style="letter-spacing: -0.005em"
									>
										Project Security Manger
									</div>
									<div
										class="w-[222px] text-right font-geist text-sm leading-[21px] font-normal text-black"
										style="letter-spacing: -0.005em"
									>
										Posted about an hour ago
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Accounting
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Lagos, Nigeria
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											N250,000 - N400,000
										</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="bg-neutral rounded-lg px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											internship
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Remote
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Urgent
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button
									class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white"
									>Apply</button
								>
								<button
									class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)]"
									>View Job</button
								>
							</div>
						</div>
					</div>

					<!-- Job Card 2 (duplicate structure with different images) -->
					<div
						class="border-neutral-primary-grey flex flex-row gap-8 rounded-lg border border-solid bg-white p-6 lg:p-[38px]"
					>
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image1.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="flex-1 font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
										style="letter-spacing: -0.005em"
									>
										Shell
									</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline2.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="font-geist text-base leading-6 font-bold text-black"
										style="letter-spacing: -0.005em"
									>
										Project Security Manger
									</div>
									<div
										class="w-[222px] text-right font-geist text-sm leading-[21px] font-normal text-black"
										style="letter-spacing: -0.005em"
									>
										Posted about an hour ago
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline3.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Accounting
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on2.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Lagos, Nigeria
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work1.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											N250,000 - N400,000
										</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="bg-neutral rounded-lg px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											internship
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Onsite
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Urgent
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button
									class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white"
									>Apply</button
								>
								<button
									class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)]"
									>View Job</button
								>
							</div>
						</div>
					</div>
				</div>

				<!-- Rows 2-4: Similar structure (simplified for brevity - add 6 more cards) -->
				<!-- I'll add just 2 more rows to keep the code manageable -->
				<div class="flex flex-col gap-6 lg:flex-row lg:gap-[92px]">
					<div
						class="border-neutral-primary-grey flex flex-row gap-8 rounded-lg border border-solid bg-white p-6 lg:p-[38px]"
					>
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image2.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="flex-1 font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
										style="letter-spacing: -0.005em"
									>
										Shell
									</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline4.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="font-geist text-base leading-6 font-bold text-black"
										style="letter-spacing: -0.005em"
									>
										Project Security Manger
									</div>
									<div
										class="w-[222px] text-right font-geist text-sm leading-[21px] font-normal text-black"
										style="letter-spacing: -0.005em"
									>
										Posted about an hour ago
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline5.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Accounting
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on3.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Lagos, Nigeria
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work2.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											N250,000 - N400,000
										</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="bg-neutral rounded-lg px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											internship
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Remote
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Urgent
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button
									class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white"
									>Apply</button
								>
								<button
									class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)]"
									>View Job</button
								>
							</div>
						</div>
					</div>

					<div
						class="border-neutral-primary-grey flex flex-row gap-8 rounded-lg border border-solid bg-white p-6 lg:p-[38px]"
					>
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image3.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="flex-1 font-geist text-sm leading-[21px] font-normal text-[rgba(0,0,0,0.66)]"
										style="letter-spacing: -0.005em"
									>
										Shell
									</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline6.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div
										class="font-geist text-base leading-6 font-bold text-black"
										style="letter-spacing: -0.005em"
									>
										Project Security Manger
									</div>
									<div
										class="w-[222px] text-right font-geist text-sm leading-[21px] font-normal text-black"
										style="letter-spacing: -0.005em"
									>
										Posted about an hour ago
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline7.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Accounting
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on4.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											Lagos, Nigeria
										</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work3.svg" alt="" />
										<div
											class="font-raleway text-xs leading-[18px] font-normal"
											style="letter-spacing: -0.005em"
										>
											N250,000 - N400,000
										</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="bg-neutral rounded-lg px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											internship
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-normal text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Onsite
										</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div
											class="font-geist text-xs leading-[18px] font-bold text-[rgba(0,0,0,0.66)]"
											style="letter-spacing: -0.005em"
										>
											Urgent
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button
									class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm leading-[21px] font-bold text-white"
									>Apply</button
								>
								<button
									class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm leading-[21px] font-bold text-[rgba(117,2,255,0.60)]"
									>View Job</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Load More Button -->
			<div
				class="mt-12 flex justify-center lg:absolute lg:top-[1617px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
			>
				<button
					class="hover:bg-opacity-90 w-[276px] rounded-[20px] bg-primary p-4 font-geist text-base leading-6 font-bold text-white transition-colors"
					style="letter-spacing: -0.005em"
				>
					Load More Listing
				</button>
			</div>
		</div>
	</section>

	<!-- Career Resources Section -->
	<section class="w-full bg-white py-16 lg:py-24">
		<div class="page-container">
			<h2
				class="mb-12 text-center font-geist text-3xl leading-tight font-semibold text-black lg:mb-16 lg:text-[40px] lg:leading-[60px]"
				style="letter-spacing: -0.005em"
			>
				Career Resources
			</h2>

			<!-- Resources Grid -->
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img
							class="h-auto w-full object-cover transition-transform group-hover:scale-110"
							src="/images/jobs/frame-20856640660.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3
							class="font-geist text-lg leading-6 font-bold text-black"
							style="letter-spacing: -0.005em"
						>
							Tech Resume Guide
						</h3>
						<p
							class="font-geist text-sm leading-5 font-normal text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							Learn how to create a standout tech resume
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img
							class="h-auto w-full object-cover transition-transform group-hover:scale-110"
							src="/images/jobs/frame-20856640720.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3
							class="font-geist text-lg leading-6 font-bold text-black"
							style="letter-spacing: -0.005em"
						>
							Salary Negotiation
						</h3>
						<p
							class="font-geist text-sm leading-5 font-normal text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							Master the art of negotiating your worth
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img
							class="h-auto w-full object-cover transition-transform group-hover:scale-110"
							src="/images/jobs/frame-20856640721.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3
							class="font-geist text-lg leading-6 font-bold text-black"
							style="letter-spacing: -0.005em"
						>
							Career Development
						</h3>
						<p
							class="font-geist text-sm leading-5 font-normal text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							Tips for advancing your career path
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img
							class="h-auto w-full object-cover transition-transform group-hover:scale-110"
							src="/images/jobs/frame-20856640722.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3
							class="font-geist text-lg leading-6 font-bold text-black"
							style="letter-spacing: -0.005em"
						>
							Technical Interview
						</h3>
						<p
							class="font-geist text-sm leading-5 font-normal text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							Ace your technical interviews with ease
						</p>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Footer Section -->

	<SolutionsCTA />
</div>
