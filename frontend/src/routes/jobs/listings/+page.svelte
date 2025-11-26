<svelte:head>
	<title>Job Listings - JobBeta</title>
	<meta name="description" content="Browse and search job listings - Find your dream job with JobBeta" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Main Content Container -->
	<div class="w-full bg-[rgba(248,243,255,0.35)] py-12">
		<div class="mx-auto w-full max-w-[1344px] rounded-[20px] bg-[rgba(248,243,255,0.26)] px-6 py-16">
			<!-- Section Header -->
			<div class="mb-12 flex flex-col items-center justify-center gap-5">
				<h1 class="font-geist text-center text-[40px] font-bold leading-[60px] text-black" style="letter-spacing: -0.005em">
					All Jobs Listings
				</h1>
				<p class="font-geist text-center text-xl font-normal leading-[30px] text-[#62717a]" style="letter-spacing: -0.005em">
					Find Your Purpose and jobs that suits your passion
				</p>
			</div>

			<!-- Filter Tabs -->
			<div class="mb-12 flex flex-wrap items-center justify-center gap-4">
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[#7502ff] p-2.5 text-center text-base font-medium leading-6 text-white" style="letter-spacing: -0.005em">All</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Marketing</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Art/ Creative</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Accounting</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Chef</button>
				<button class="font-lato rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Software Engineer</button>
				<button class="font-lato w-[124px] rounded-[20px] border border-solid border-[#d9d9d9] bg-[rgba(255,255,255,0.06)] p-2.5 text-center text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Designer</button>
			</div>

			<!-- Two Column Layout -->
			<div class="flex flex-col gap-[78px] lg:flex-row">
				<!-- Left Sidebar - Filters -->
				<div class="flex w-full flex-col gap-[78px] lg:w-auto lg:shrink-0">
					<!-- Main Filters Card -->
					<div class="flex flex-col gap-8 rounded-2xl bg-[rgba(63,1,138,0.05)] p-6">
						<div class="flex w-full flex-col gap-6 lg:w-[425px]">
							<!-- Keywords -->
							<div class="flex w-full flex-col gap-[19px]">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">keywords</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<img class="h-6 w-6" src="/icons/job-listings/search0.svg" alt="" />
									<input
										type="text"
										placeholder="Search with job title, keywords"
										class="font-lato w-full text-base leading-6 text-[rgba(42,44,44,0.49)] outline-none"
										style="letter-spacing: -0.005em"
									/>
								</div>
							</div>

							<!-- Location -->
							<div class="flex w-full flex-col gap-[19px]">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">location</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<img class="h-6 w-6" src="/icons/job-listings/location-on0.svg" alt="" />
									<input
										type="text"
										placeholder="City or zipcode"
										class="font-lato w-full text-base leading-6 text-[rgba(42,44,44,0.49)] outline-none"
										style="letter-spacing: -0.005em"
									/>
								</div>
							</div>

							<!-- Job Category -->
							<div class="flex w-full flex-col gap-[19px]">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Job Category</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<img class="h-5 w-5" src="/icons/job-listings/work-outline0.svg" alt="" />
									<div class="font-lato flex-1 text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Job category</div>
								</div>
							</div>

							<!-- Job Type -->
							<div class="flex w-full flex-col gap-[19px]">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Job type</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<img class="h-5 w-5" src="/icons/job-listings/work-outline1.svg" alt="" />
									<div class="font-lato flex-1 text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Job category</div>
								</div>
							</div>

							<!-- Date Posted -->
							<div class="flex w-full flex-col gap-6">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Date Posted</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record0.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Last 24 hours</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record1.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Last 7 Days</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record2.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Last 14 days</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record3.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Last 30 days</div>
								</div>
								<div class="flex flex-row items-center gap-3">
									<div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[50px] bg-[#3f018a]">
										<img class="h-5 w-5" src="/icons/job-listings/add0.svg" alt="" />
									</div>
									<div class="font-lato text-base font-extrabold leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">See More</div>
								</div>
							</div>

							<!-- Experience Level -->
							<div class="flex flex-col gap-3.5">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Experience Level</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record4.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Entry-level</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record5.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Mid-level</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record6.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Intermediate level</div>
								</div>
								<div class="flex flex-row items-center gap-4">
									<img class="h-5 w-5" src="/icons/job-listings/fiber-manual-record7.svg" alt="" />
									<div class="font-lato text-base leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">Senior Level</div>
								</div>
								<div class="flex flex-row items-center gap-3">
									<div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[50px] bg-[#3f018a]">
										<img class="h-5 w-5" src="/icons/job-listings/add1.svg" alt="" />
									</div>
									<div class="font-lato text-base font-extrabold leading-6 text-[rgba(42,44,44,0.90)]" style="letter-spacing: -0.005em">See More</div>
								</div>
							</div>

							<!-- Salary Range -->
							<div class="flex flex-col gap-3.5">
								<div class="font-geist text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Salary</div>
								<div class="font-geist text-center text-base font-semibold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">N80,000 - N1,000,000</div>
								<div class="relative h-8 w-full">
									<div class="absolute left-0 top-3 h-2 w-full rounded-xl bg-[#7502ff]"></div>
									<div class="absolute left-2.5 top-0 flex h-[30px] w-[30px] items-center justify-center rounded-[20px] bg-[#7502ff]">
										<div class="h-4 w-4 rounded-[20px] bg-white"></div>
									</div>
									<div class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-center rounded-[20px] bg-[#7502ff]">
										<div class="h-4 w-4 rounded-[20px] bg-white"></div>
									</div>
								</div>
							</div>
						</div>

						<!-- Find Jobs Button -->
						<button class="font-geist w-full rounded-[20px] bg-primary p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
							Find Jobs
						</button>
					</div>

					<!-- Job Alert Card -->
					<div class="flex flex-col gap-8 rounded-2xl bg-[rgba(63,1,138,0.05)] p-6">
						<h2 class="font-geist text-xl font-bold leading-[30px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Job Alert</h2>

						<div class="flex w-full flex-col gap-6">
							<!-- Job Title -->
							<div class="flex flex-col gap-[19px]">
								<div class="font-geist text-base font-bold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Job Title</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<div class="font-lato flex-1 text-left text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Enter Job title</div>
									<img class="h-6 w-6" src="/icons/job-listings/arrow-drop-down0.svg" alt="" />
								</div>
							</div>

							<!-- Notification Frequency -->
							<div class="flex flex-col gap-[19px]">
								<div class="font-geist text-base font-bold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Notification Frequency</div>
								<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
									<div class="font-lato flex-1 text-left text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Daily</div>
									<img class="h-6 w-6" src="/icons/job-listings/arrow-drop-down1.svg" alt="" />
								</div>
							</div>
						</div>

						<!-- Save Alert Button -->
						<button class="font-geist w-full rounded-[20px] bg-primary p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
							Save Alert
						</button>
					</div>
				</div>

				<!-- Right Section - Job Listings -->
				<div class="flex w-full flex-col gap-10">
					<div class="flex flex-col gap-6">
						<!-- Results Header -->
						<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
							<div class="flex flex-row items-center gap-[23px]">
								<div class="flex flex-row items-center justify-center gap-2.5 rounded-[20px] bg-[rgba(255,255,255,0.06)] p-2.5">
									<div class="font-lato text-base font-extrabold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Showing 1 – 10 of 18 results</div>
								</div>
							</div>
							<div class="flex flex-row items-center gap-[23px]">
								<div class="flex flex-row items-center justify-center gap-2.5 rounded-[20px] bg-[rgba(42,44,44,0.06)] p-2.5">
									<div class="font-lato text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">Sort By</div>
									<img class="h-6 w-6" src="/icons/job-listings/arrow-drop-down2.svg" alt="" />
								</div>
								<div class="flex flex-row items-center justify-center gap-2.5 rounded-[20px] bg-[rgba(42,44,44,0.05)] p-2.5">
									<div class="font-lato text-base font-medium leading-6 text-[rgba(42,44,44,0.60)]" style="letter-spacing: -0.005em">10 Per-page</div>
									<img class="h-6 w-6" src="/icons/job-listings/arrow-drop-down3.svg" alt="" />
								</div>
							</div>
						</div>

						<!-- Job Cards -->
						<div class="flex flex-col gap-6">
							{#each Array(5) as _, i}
								<div class="flex flex-row items-start justify-between gap-8 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6 lg:gap-20 lg:p-[38px]">
									<div class="flex flex-row gap-5">
										<img class="h-9 w-9 shrink-0 rounded-2xl object-cover" src="/icons/job-listings/image{i}.png" alt="" />
										<div class="flex flex-col gap-8">
											<div class="flex flex-col gap-4">
												<div class="flex flex-row items-center justify-between gap-1.5">
													<div class="font-geist flex-1 text-sm leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
												</div>
												<div class="flex flex-row items-center gap-4">
													<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
													{#if i === 0}
														<div class="flex w-[68px] flex-row items-center justify-center gap-2.5 rounded-lg bg-[rgba(255,0,0,0.08)] px-2.5 py-1">
															<div class="font-geist text-xs font-bold leading-[18px] text-[#ff0000]" style="letter-spacing: -0.005em">New</div>
														</div>
													{/if}
												</div>
												<div class="flex flex-row flex-wrap gap-5">
													<div class="flex flex-row items-center gap-2">
														<img class="h-5 w-5" src="/icons/job-listings/work-outline{i + 3}.svg" alt="" />
														<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
													</div>
													<div class="flex flex-row items-center gap-2">
														<img class="h-5 w-5" src="/icons/job-listings/location-on{i + 1}.svg" alt="" />
														<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
													</div>
													<div class="flex flex-row items-center gap-2">
														<img class="h-5 w-5" src="/icons/job-listings/home-work{i}.svg" alt="" />
														<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
													</div>
												</div>
												<div class="flex flex-row flex-wrap gap-[5px]">
													<div class="flex items-center justify-center gap-2.5 rounded-lg bg-neutral px-2.5 py-1.5">
														<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
													</div>
													<div class="flex items-center justify-center gap-2.5 rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
														<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">{i % 2 === 0 ? 'Onsite' : 'Remote'}</div>
													</div>
													<div class="flex items-center justify-center gap-2.5 rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
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
									<button class="shrink-0">
										<img class="h-6 w-6" src="/icons/job-listings/bookmark-border{i}.svg" alt="Bookmark" />
									</button>
								</div>
							{/each}
						</div>
					</div>

					<!-- Pagination -->
					<div class="flex flex-row items-center justify-center gap-3">
						<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]">
							<img class="h-6 w-6 rotate-180" src="/icons/job-listings/arrow-right-alt0.svg" alt="Previous" />
						</button>
						<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] bg-[#3f018a] text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">1</button>
						<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] text-base font-bold leading-6 text-[#62717a]" style="letter-spacing: -0.005em">2</button>
						<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] text-base font-bold leading-6 text-[#62717a]" style="letter-spacing: -0.005em">3</button>
						<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]">
							<img class="h-6 w-6" src="/icons/job-listings/arrow-right-alt1.svg" alt="Next" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
