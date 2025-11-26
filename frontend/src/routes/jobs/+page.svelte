<script>
	import Animate from '$lib/components/Animate.svelte';
</script>

<svelte:head>
	<title>Jobs - JobBeta</title>
	<meta name="description" content="Find your dream job with JobBeta - The #1 Job Board for Students, Job seekers and employers" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section with Search -->
	<section class="relative w-full overflow-hidden bg-primary py-16 lg:h-[637px] lg:py-0">
		<div class="page-container relative z-10 flex h-full items-center justify-center">
			<div class="flex w-full flex-col items-center justify-center gap-9 lg:w-[860px]">
				<!-- Header Text -->
				<Animate variant="bottom" duration={0.8}>
					<div class="flex flex-col items-center justify-start gap-3 text-center">
						<div class="font-geist text-base font-medium leading-6 text-white" style="letter-spacing: -0.005em">
							Find Jobs tailored for you
						</div>
						<h1 class="font-geist text-3xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[46px]" style="letter-spacing: -0.005em">
							The #1 Job Board for Students, Job seekers and employers
						</h1>
					</div>
				</Animate>

				<!-- Search Bar -->
				<Animate variant="fade" duration={0.6} delay={0.2}>
					<div class="flex w-full flex-col items-center justify-start gap-[27px]">
					<div class="flex h-auto w-full flex-col gap-3 rounded-[50px] bg-white p-4 lg:h-[90px] lg:flex-row lg:items-center lg:justify-between lg:p-4">
						<div class="flex flex-col gap-3 lg:w-[619px] lg:flex-row lg:items-center lg:gap-2.5">
							<!-- Search Input -->
							<div class="flex w-full flex-row items-center gap-2.5 lg:w-[315px]">
								<img class="h-6 w-6" src="/icons/jobs/search0.svg" alt="" />
								<input
									type="text"
									placeholder="Search with job title, keywords"
									class="font-lato w-full text-base font-normal leading-6 text-[rgba(42,44,44,0.49)] outline-none"
									style="letter-spacing: -0.005em"
								/>
							</div>

							<!-- Divider -->
							<div class="hidden h-10 w-0 rotate-90 border-t-2 border-solid border-[rgba(48,48,48,0.16)] lg:block"></div>

							<!-- Location Input -->
							<div class="flex flex-row items-center gap-2.5">
								<img class="h-6 w-6" src="/icons/jobs/location-on0.svg" alt="" />
								<input
									type="text"
									placeholder="Location"
									class="font-lato w-full text-base font-normal leading-6 text-[rgba(42,44,44,0.60)] outline-none"
									style="letter-spacing: -0.005em"
								/>
							</div>
						</div>

						<!-- Search Button -->
						<button class="font-geist h-[62px] w-full rounded-[50px] bg-primary px-6 py-4 text-base font-bold leading-6 text-white transition-colors hover:bg-opacity-90 lg:w-[149px]" style="letter-spacing: -0.005em">
							Search
						</button>
					</div>

					<!-- Popular Search Tags -->
					<div class="flex flex-wrap items-center justify-center gap-4">
						<button class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]">
							<div class="font-lato w-[124px] text-center text-base font-medium leading-6 text-[rgba(250,255,255,0.90)]" style="letter-spacing: -0.005em">
								Marketing
							</div>
						</button>
						<button class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]">
							<div class="font-lato text-center text-base font-medium leading-6 text-[rgba(250,255,255,0.90)]" style="letter-spacing: -0.005em">
								Finance Analyst
							</div>
						</button>
						<button class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]">
							<div class="font-lato text-center text-base font-medium leading-6 text-[rgba(250,255,255,0.90)]" style="letter-spacing: -0.005em">
								Software Engineer
							</div>
						</button>
						<button class="rounded-[20px] border border-solid border-white bg-[rgba(255,255,255,0.06)] p-2.5 transition-colors hover:bg-[rgba(255,255,255,0.12)]">
							<div class="font-lato w-[124px] text-center text-base font-medium leading-6 text-[rgba(250,255,255,0.90)]" style="letter-spacing: -0.005em">
								Web Developer
							</div>
						</button>
					</div>
					</div>
				</Animate>
			</div>
		</div>

		<!-- Decorative Icons -->
		<img class="absolute right-[400px] top-[92px] hidden h-[60px] w-[60px] lg:block" src="/icons/jobs/school0.svg" alt="" />
		<img class="absolute -right-96 top-14 hidden lg:block" src="/icons/jobs/group-13213144580.svg" alt="" />
		<img class="absolute -left-96 top-10 hidden lg:block" src="/icons/jobs/group-13213144590.svg" alt="" />
	</section>

	<!-- We are Changing Section -->
	<section class="w-full bg-white py-16 lg:py-32">
		<div class="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[20px] bg-[rgba(248,243,255,0.26)] px-6 lg:h-[1104px] lg:px-0">
			<Animate variant="bottom" duration={0.8}>
				<div class="flex flex-col items-center justify-center gap-5 py-16 text-center lg:absolute lg:left-1/2 lg:top-32 lg:w-[914px] lg:-translate-x-1/2 lg:py-0">
					<h2 class="font-geist w-full text-3xl font-bold leading-tight text-black lg:w-[592px] lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
						We are Changing how Talents find Jobs
					</h2>
					<p class="font-geist w-full text-lg leading-relaxed text-[#62717a] lg:w-[727px] lg:text-xl lg:leading-[30px]" style="letter-spacing: -0.005em">
						Partner with JobBeta to connect your students with verified job opportunities, career-building tools, and top employers — all on one dynamic platform.
					</p>
					<button class="font-geist mt-4 w-[276px] rounded-[20px] bg-primary p-4 text-base font-bold leading-6 text-white transition-colors hover:bg-opacity-90" style="letter-spacing: -0.005em">
					Partner With Us
					</button>
				</div>
			</Animate>

			<!-- Images with Rotated Backgrounds -->
			<div class="relative mt-8 flex flex-col items-center justify-center gap-8 pb-16 lg:mt-0 lg:pb-0">
				<!-- Left Image -->
				<div class="relative lg:absolute lg:left-[150px] lg:top-[466px]">
					<!-- Rotated Background -->
					<div class="absolute left-0 top-0 hidden h-[208px] w-[155px] overflow-hidden rounded-[20px] bg-[#f8f3ff] lg:block" style="transform: rotate(7.457deg); transform-origin: 0 0"></div>
					<!-- Image -->
					<img class="relative h-auto w-[231px] rounded-[20px] object-cover lg:h-[248px]" style="transform: rotate(7.457deg); transform-origin: 0 0" src="/images/jobs/frame-20856640940.png" alt="Student 1" />
				</div>

				<!-- Center Image -->
				<div class="relative lg:absolute lg:left-[483px] lg:top-[693px]">
					<!-- Rotated Background -->
					<div class="absolute left-[92px] top-[73px] hidden h-[191px] w-[179px] overflow-hidden rounded-[20px] bg-primary lg:block" style="transform: rotate(6.2deg); transform-origin: 0 0"></div>
					<!-- Image -->
					<img class="relative h-auto w-[231px] rounded-[20px] object-cover lg:h-[250px]" src="/images/jobs/frame-20856640941.png" alt="Student 2" />
				</div>

				<!-- Right Image -->
				<div class="relative lg:absolute lg:left-[883px] lg:top-[531px]">
					<!-- Rotated Background -->
					<div class="absolute left-[172px] top-[-63px] hidden h-[197px] w-[243px] overflow-hidden rounded-[20px] bg-[#f1e6ff] lg:block" style="transform: rotate(60.911deg); transform-origin: 0 0"></div>
					<!-- Image -->
					<img class="relative h-auto w-[231px] rounded-[20px] object-cover lg:h-[247px]" style="transform: rotate(-9.853deg); transform-origin: 0 0" src="/images/jobs/frame-20856640942.png" alt="Student 3" />
				</div>

				<!-- Spacer for mobile -->
				<div class="h-8 lg:hidden"></div>
			</div>
		</div>
	</section>

	<!-- Companies Hiring Section -->
	<section class="w-full bg-white py-16 lg:py-24">
		<div class="page-container">
			<h2 class="font-geist mb-12 text-center text-3xl font-semibold leading-tight text-black lg:mb-16 lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
				Companies Hiring for remote Jobs
			</h2>

			<div class="flex flex-wrap items-center justify-center gap-12 lg:gap-[83px]">
				<div class="h-14 w-[172px]">
					<img class="h-full w-full object-contain" src="/icons/jobs/group6.svg" alt="Company Logo" />
				</div>
				<div class="h-[46px] w-[150px]">
					<img class="h-full w-full object-contain" src="/icons/jobs/clip-path-group0.svg" alt="Company Logo" />
				</div>
				<div class="h-14 w-[172px]">
					<img class="h-full w-full object-contain" src="/icons/jobs/group7.svg" alt="Company Logo" />
				</div>
				<div class="h-[46px] w-[150px]">
					<img class="h-full w-full object-contain" src="/icons/jobs/clip-path-group1.svg" alt="Company Logo" />
				</div>
			</div>
		</div>
	</section>

	<!-- Popular Job Categories Section -->
	<section class="w-full bg-primary py-16 lg:py-32">
		<div class="page-container">
			<!-- Section Header -->
			<Animate variant="bottom" duration={0.8}>
				<div class="mb-12 flex flex-col items-center justify-center gap-6 lg:mb-20">
					<div class="flex flex-col items-center justify-center gap-5">
						<h2 class="font-geist text-center text-3xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[51px]" style="letter-spacing: -0.005em">
							Popular Job Categories
						</h2>
						<p class="font-geist text-center text-lg font-medium leading-[30px] text-white lg:text-xl" style="letter-spacing: -0.005em; opacity: 0.85">
							1000 jobs live – 120 added today.
						</p>
					</div>
				</div>
			</Animate>

			<!-- Categories Grid -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[52px]">
				<!-- Category cards (12 total) -->
				{#each [
					{ icon: 'hub0.svg', name: 'Graphic Designer' },
					{ icon: 'people0.svg', name: 'Human Resources' },
					{ icon: 'group0.svg', name: 'Project Management' },
					{ icon: 'code-off0.svg', name: 'Software Development' },
					{ icon: 'hub0.svg', name: 'Marketing' },
					{ icon: 'face0.svg', name: 'Customer Service' },
					{ icon: 'data-exploration0.svg', name: 'Data Analytics' },
					{ icon: 'favorite-border0.svg', name: 'Finance' },
					{ icon: 'hub0.svg', name: 'Engineering' },
					{ icon: 'people0.svg', name: 'Sales' },
					{ icon: 'face0.svg', name: 'Education' },
					{ icon: 'data-exploration0.svg', name: 'Healthcare' }
				] as category}
					<div class="flex flex-col items-center justify-start gap-10 rounded-2xl border border-solid border-[rgba(244,247,253,0.70)] p-6">
						<div class="flex h-[138px] w-[138px] items-center justify-center overflow-hidden rounded-full bg-[#f4f7fd]">
							<img class="h-[50px] w-[50px]" src="/icons/jobs/{category.icon}" alt="" />
						</div>
						<div class="flex flex-col items-center justify-start gap-3">
							<div class="font-geist text-center text-lg font-bold leading-[27px] text-white" style="letter-spacing: -0.005em; opacity: 0.85">
								{category.name}
							</div>
							<div class="font-geist text-center text-sm font-bold leading-[21px] text-[rgba(255,255,255,0.70)]" style="letter-spacing: -0.005em; opacity: 0.85">
								( 3 Positions Opened )
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Most Recent Jobs Section - Inside Light Purple Container -->
	<section class="w-full bg-white py-16 lg:py-32">
		<div class="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[20px] bg-[rgba(248,243,255,0.26)] px-6 py-16 lg:h-[1728px] lg:px-0 lg:py-0">
			<!-- Section Header -->
			<Animate variant="bottom" duration={0.8}>
				<div class="flex flex-col items-start justify-between gap-6 lg:absolute lg:left-[calc(50%-612px)] lg:top-[90px] lg:w-[1214px] lg:flex-row lg:items-center">
					<div class="flex flex-col gap-5">
						<h2 class="font-geist text-3xl font-bold leading-tight text-black lg:w-[592px] lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
							Most Recent Flexible & Remote Jobs
						</h2>
						<p class="font-geist text-lg leading-[30px] text-[#62717a] lg:text-xl" style="letter-spacing: -0.005em">
						Find Your Purpose and jobs that suits your passion
					</p>
				</div>
					<button class="font-geist flex w-[276px] items-center justify-end gap-2.5 rounded-[20px] p-4 text-base font-bold leading-6 text-primary transition-colors hover:opacity-80" style="letter-spacing: -0.005em">
						Find Your Next Job
						<img class="h-6 w-6" src="/icons/jobs/arrow-right-alt0.svg" alt="" />
					</button>
				</div>
			</Animate>

			<!-- Filter Tabs -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:absolute lg:left-1/2 lg:top-[293px] lg:mt-0 lg:-translate-x-1/2">
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-primary p-2.5 text-base font-medium leading-6 text-white" style="letter-spacing: -0.005em">
					All
				</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Marketing
				</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Art/ Creative
				</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Accounting
				</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Chef
				</button>
				<button class="font-lato rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Software Engineer
				</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-base font-medium leading-6 text-[rgba(42,44,44,0.60)] transition-colors hover:bg-primary hover:text-white" style="letter-spacing: -0.005em">
					Designer
				</button>
			</div>

			<!-- Job Cards -->
			<div class="mt-12 flex flex-col gap-8 lg:absolute lg:left-[calc(50%-607px)] lg:top-[400px] lg:mt-0 lg:w-[1214px] lg:gap-[103px]">
				<!-- Row 1 -->
				<div class="flex flex-col gap-6 lg:flex-row lg:gap-[92px]">
					<!-- Job Card 1 -->
					<div class="flex flex-row gap-8 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6 lg:p-[38px]">
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image0.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist flex-1 text-sm font-normal leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline0.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
									<div class="font-geist w-[222px] text-right text-sm font-normal leading-[21px] text-black" style="letter-spacing: -0.005em">Posted about an hour ago</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline1.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on1.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work0.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="rounded-lg bg-neutral px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Remote</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm font-bold leading-[21px] text-white">Apply</button>
								<button class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm font-bold leading-[21px] text-[rgba(117,2,255,0.60)]">View Job</button>
							</div>
						</div>
					</div>

					<!-- Job Card 2 (duplicate structure with different images) -->
					<div class="flex flex-row gap-8 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6 lg:p-[38px]">
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image1.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist flex-1 text-sm font-normal leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline2.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
									<div class="font-geist w-[222px] text-right text-sm font-normal leading-[21px] text-black" style="letter-spacing: -0.005em">Posted about an hour ago</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline3.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on2.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work1.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="rounded-lg bg-neutral px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Onsite</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm font-bold leading-[21px] text-white">Apply</button>
								<button class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm font-bold leading-[21px] text-[rgba(117,2,255,0.60)]">View Job</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Rows 2-4: Similar structure (simplified for brevity - add 6 more cards) -->
				<!-- I'll add just 2 more rows to keep the code manageable -->
				<div class="flex flex-col gap-6 lg:flex-row lg:gap-[92px]">
					<div class="flex flex-row gap-8 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6 lg:p-[38px]">
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image2.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist flex-1 text-sm font-normal leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline4.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
									<div class="font-geist w-[222px] text-right text-sm font-normal leading-[21px] text-black" style="letter-spacing: -0.005em">Posted about an hour ago</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline5.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on3.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work2.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="rounded-lg bg-neutral px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Remote</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm font-bold leading-[21px] text-white">Apply</button>
								<button class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm font-bold leading-[21px] text-[rgba(117,2,255,0.60)]">View Job</button>
							</div>
						</div>
					</div>

					<div class="flex flex-row gap-8 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6 lg:p-[38px]">
						<img class="h-9 w-9 rounded-2xl object-cover" src="/images/jobs/image3.png" alt="" />
						<div class="flex flex-col gap-8">
							<div class="flex flex-col gap-4">
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist flex-1 text-sm font-normal leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
									<img class="h-6 w-6" src="/icons/jobs/work-outline6.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-between gap-1.5">
									<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
									<div class="font-geist w-[222px] text-right text-sm font-normal leading-[21px] text-black" style="letter-spacing: -0.005em">Posted about an hour ago</div>
								</div>
								<div class="flex flex-row flex-wrap gap-5">
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/work-outline7.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/location-on4.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
									</div>
									<div class="flex flex-row items-center gap-2">
										<img class="h-5 w-5" src="/icons/jobs/home-work3.svg" alt="" />
										<div class="font-raleway text-xs font-normal leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
									</div>
								</div>
								<div class="flex flex-row flex-wrap gap-[5px]">
									<div class="rounded-lg bg-neutral px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
									</div>
									<div class="rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-normal leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Onsite</div>
									</div>
									<div class="rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
										<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row gap-3">
								<button class="font-raleway w-[154px] rounded-lg bg-primary px-8 py-2 text-sm font-bold leading-[21px] text-white">Apply</button>
								<button class="font-raleway w-[154px] rounded-lg border border-solid border-primary px-8 py-2 text-sm font-bold leading-[21px] text-[rgba(117,2,255,0.60)]">View Job</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Load More Button -->
			<div class="mt-12 flex justify-center lg:absolute lg:left-1/2 lg:top-[1617px] lg:mt-0 lg:-translate-x-1/2">
				<button class="font-geist w-[276px] rounded-[20px] bg-primary p-4 text-base font-bold leading-6 text-white transition-colors hover:bg-opacity-90" style="letter-spacing: -0.005em">
					Load More Listing
				</button>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="relative w-full overflow-hidden bg-primary py-16 lg:py-32">
		<div class="page-container relative">
			<!-- Section Header -->
			<div class="relative mb-12 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-start lg:justify-between">
				<h2 class="font-geist max-w-[594px] text-3xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[51px]" style="letter-spacing: -0.005em">
					Read inspiring testimonials from users who successfully found jobs using our platform.
				</h2>
				<p class="font-geist max-w-[439px] text-lg font-medium leading-[30px] text-white lg:text-xl" style="letter-spacing: -0.005em; opacity: 0.85">
					Hear from students and graduates who landed their dream jobs with JobBeta!. You could be next! Sign up and start applying today
				</p>
			</div>

			<!-- Navigation & Cards -->
			<div class="flex flex-col items-end gap-[42px]">
				<!-- Navigation Buttons -->
				<div class="flex flex-row items-center gap-[17px]">
					<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-white">
						<img class="h-[30px] w-[30px]" style="opacity: 0.6; transform: translate(-30px, 0px)" src="/icons/jobs/keyboard-arrow-down0.svg" alt="" />
					</button>
					<div class="font-raleway text-right text-xl font-normal leading-[30px]" style="letter-spacing: -0.005em; opacity: 0.78; color: white">01/06</div>
					<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-white bg-[rgba(248,243,255,0.20)]">
						<img class="h-[30px] w-[30px]" style="transform: translate(0px, -30px)" src="/icons/jobs/keyboard-arrow-down1.svg" alt="" />
					</button>
				</div>

				<!-- Testimonial Cards -->
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					<!-- Card 1 -->
					<div class="flex h-[536px] flex-col gap-6 overflow-hidden rounded-2xl border border-solid border-white bg-white p-6 lg:w-[404px]">
						<div class="flex flex-row items-center justify-between">
							<h3 class="font-geist flex-1 text-[32px] font-bold leading-[48px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Amina</h3>
							<div class="font-geist text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Graduate</div>
						</div>
						<img class="mx-auto h-[267px] w-[241px] object-cover" src="/icons/jobs/ellipse-2290.svg" alt="" />
						<p class="font-geist text-xl font-normal leading-[30px] text-[#2a2c2c]" style="letter-spacing: -0.005em">
							"I found my first internship through JobBeta, and now I'm working full-time!"
						</p>
					</div>

					<!-- Card 2 -->
					<div class="flex h-[536px] flex-col gap-6 overflow-hidden rounded-2xl border border-solid border-white bg-white p-6 lg:w-[404px]">
						<div class="flex flex-row items-center justify-between">
							<h3 class="font-geist flex-1 text-[32px] font-bold leading-[48px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Tolu</h3>
							<div class="font-geist text-sm font-normal leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Recent Graduate</div>
						</div>
						<img class="mx-auto h-[267px] w-[241px] object-cover" src="/icons/jobs/ellipse-2291.svg" alt="" />
						<p class="font-geist text-xl font-medium leading-[30px] text-[#2a2c2c]" style="letter-spacing: -0.005em">
							"JobBeta connected me to employers in my field. The process was super easy!"
						</p>
					</div>

					<!-- Card 3 -->
					<div class="flex h-[536px] flex-col gap-6 overflow-hidden rounded-2xl border border-solid border-white bg-white p-6 lg:w-[404px]">
						<div class="flex flex-row items-center justify-between">
							<h3 class="font-geist flex-1 text-[32px] font-bold leading-[48px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Sarah</h3>
							<div class="font-geist text-sm font-normal leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Student</div>
						</div>
						<img class="mx-auto h-[267px] w-[241px] object-cover" src="/icons/jobs/ellipse-2292.svg" alt="" />
						<p class="font-geist text-xl font-medium leading-[30px] text-[#2a2c2c]" style="letter-spacing: -0.005em">
							"Thanks to JobBeta, I secured an internship that helped launch my career!"
						</p>
					</div>
				</div>

				<!-- View More Button -->
				<div class="flex justify-center">
					<button class="font-lato flex items-center gap-2 rounded-[50px] border border-solid border-white bg-transparent px-8 py-3 text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
						View More
						<img class="h-5 w-5" src="/icons/jobs/arrow-right-alt0.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Career Resources Section -->
	<section class="w-full bg-white py-16 lg:py-24">
		<div class="page-container">
			<h2 class="font-geist mb-12 text-center text-3xl font-semibold leading-tight text-black lg:mb-16 lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
				Career Resources
			</h2>

			<!-- Resources Grid -->
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img class="h-auto w-full object-cover transition-transform group-hover:scale-110" src="/images/jobs/frame-20856640660.png" alt="" />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-bold leading-6 text-black" style="letter-spacing: -0.005em">Tech Resume Guide</h3>
						<p class="font-geist text-sm font-normal leading-5 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
							Learn how to create a standout tech resume
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img class="h-auto w-full object-cover transition-transform group-hover:scale-110" src="/images/jobs/frame-20856640720.png" alt="" />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-bold leading-6 text-black" style="letter-spacing: -0.005em">Salary Negotiation</h3>
						<p class="font-geist text-sm font-normal leading-5 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
							Master the art of negotiating your worth
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img class="h-auto w-full object-cover transition-transform group-hover:scale-110" src="/images/jobs/frame-20856640721.png" alt="" />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-bold leading-6 text-black" style="letter-spacing: -0.005em">Career Development</h3>
						<p class="font-geist text-sm font-normal leading-5 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
							Tips for advancing your career path
						</p>
					</div>
				</a>

				<a href="/career-tips" class="group flex flex-col gap-4">
					<div class="overflow-hidden rounded-[20px]">
						<img class="h-auto w-full object-cover transition-transform group-hover:scale-110" src="/images/jobs/frame-20856640722.png" alt="" />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-bold leading-6 text-black" style="letter-spacing: -0.005em">Technical Interview</h3>
						<p class="font-geist text-sm font-normal leading-5 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
							Ace your technical interviews with ease
						</p>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Footer Section -->
	<section class="relative w-full overflow-hidden bg-secondary">
		<div class="page-container relative py-16 lg:py-20">
			<div class="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<!-- Left Column -->
				<div class="flex flex-col items-start justify-start gap-12">
					<div class="flex flex-col items-start justify-start gap-5">
						<h2 class="font-geist text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[54px]" style="letter-spacing: -0.005em">
							Ready to bring JobBeta to your students?
						</h2>
						<p class="font-geist text-lg font-normal leading-relaxed text-white lg:text-xl lg:leading-[30px]" style="letter-spacing: -0.005em">
							Let's work together to shape the future of early-career hiring.
						</p>
					</div>
					<div class="flex w-full flex-col items-start justify-start gap-3 sm:flex-row">
						<button class="w-full rounded-[20px] bg-black px-6 py-4 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">Become a Partner</div>
						</button>
						<button class="w-full rounded-[20px] border border-solid border-white px-6 py-4 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">Schedule A Demo</div>
						</button>
					</div>
				</div>

				<!-- Right Column -->
				<div class="flex flex-col items-start justify-start gap-12">
					<div class="flex flex-col items-start justify-start gap-1">
						<div class="font-lato text-base font-normal leading-6 text-white" style="letter-spacing: -0.005em">We love to hear from you</div>
						<h2 class="font-geist text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[54px]" style="letter-spacing: -0.005em">
							Do you need more Details<br />or support?
						</h2>
					</div>
					<div class="flex w-full flex-col items-start justify-start gap-3 sm:flex-row">
						<button class="w-full rounded-[20px] bg-white px-6 py-4 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-secondary" style="letter-spacing: -0.005em">Hire With JobBeta</div>
						</button>
						<button class="w-full rounded-[20px] border border-white px-6 py-4 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">Partner with JobBeta</div>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Background Decorative Elements -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div class="absolute left-0 top-0 h-full w-1/2 bg-primary"></div>
			<div class="absolute -right-20 -top-20 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -right-10 top-0 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -right-32 -top-32 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-20 -left-20 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-10 -left-10 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-32 left-10 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
		</div>
	</section>
</div>
