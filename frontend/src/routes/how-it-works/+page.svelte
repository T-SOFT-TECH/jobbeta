<script lang="ts">
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
</script>

<svelte:head>
	<title>How It Works - JobBeta</title>
	<meta name="description" content="Learn how JobBeta works for job seekers and employers" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section -->
	<section class="relative w-full overflow-hidden bg-primary py-20 lg:h-[712px] lg:py-0"
		style="background: linear-gradient(to bottom, #7502ff, #7502ff), url(/images/how-it-works/frame-20856641690.png); background-size: cover; background-position: center;">
		<div class="page-container relative z-10 flex h-full items-center justify-center">
			<!-- Main Hero Content -->
			<div class="flex flex-col items-center justify-center gap-4 text-center lg:w-[640px]">
				<h1 class="font-geist text-4xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
					How it works
				</h1>
				<p class="font-geist text-lg font-medium leading-relaxed text-white opacity-85 lg:text-xl lg:leading-[30px]" style="letter-spacing: -0.005em">
					Get expert-backed insights, practical tips, and guidance to help you make informed career decisions, grow your skills, and reach your professional goals.
				</p>
			</div>
		</div>

		<!-- Background Decorative Elements -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<img class="absolute left-1/2 top-0 -translate-x-1/2 opacity-35 transform" src="/icons/how-it-works/group-13213144600.svg" alt="" />
			<img class="absolute -right-20 top-12 lg:right-10" src="/icons/how-it-works/group-13213144590.svg" alt="" />
			<img class="absolute -left-20 bottom-0 lg:left-10" src="/icons/how-it-works/group-13213144580.svg" alt="" />
			<img class="absolute right-0 bottom-12 lg:right-20" src="/icons/how-it-works/group-13213144620.svg" alt="" />
		</div>
	</section>

	<!-- Process Section - Using Reusable Component -->
	<ProcessSteps />

	<!-- Finding a Job Section -->
	<section class="w-full bg-[#fafafa] py-16 lg:py-32">
		<div class="page-container">
			<!-- Section Header -->
			<div class="mb-12 flex flex-col items-center justify-center gap-0 text-center lg:mb-20">
				<div class="font-geist text-xl font-medium leading-[30px] text-[rgba(42,44,44,0.80)]" style="letter-spacing: -0.005em">
					How it works
				</div>
				<h2 class="font-geist text-3xl font-bold leading-tight text-secondary lg:text-[40px] lg:leading-[60px]" style="letter-spacing: -0.005em">
					Finding a Job has never been easier
				</h2>
			</div>

			<!-- Job Process Cards - Responsive Grid -->
			<div class="flex flex-col gap-10 lg:gap-[39px]">
				<!-- Row 1: Two Cards -->
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-11">
					<!-- Card 1: Create Free Account -->
					<div class="overflow-hidden rounded-[20px] bg-[#f3f3f3]">
						<div class="relative h-[400px] lg:h-[663px]">
							<!-- Mockup Image -->
							<div class="absolute left-[50%] top-0 h-[300px] w-[90%] lg:left-[115px] lg:top-[-4px] lg:h-[452px] lg:w-[425px]" style="translate: -50% 0; transform: translate(-50%, 0)">
								<img class="h-full w-full rounded-2xl object-cover" src="/images/how-it-works/frame-20856642040.png" alt="Create Account" />
							</div>

							<!-- Text Content -->
							<div class="absolute bottom-6 left-6 right-6 flex flex-col gap-[17px] lg:bottom-[82px] lg:left-[30px] lg:right-[30px]">
								<h3 class="font-geist text-xl font-bold leading-9 text-black lg:text-2xl" style="letter-spacing: -0.005em">
									Create Your Free Account
								</h3>
								<p class="font-geist text-sm font-normal leading-6 text-[rgba(42,44,44,0.80)] lg:text-base" style="letter-spacing: -0.005em">
									Sign up in minutes and build your profile to showcase your skills and career interests for personalized openings.
								</p>
							</div>

							<!-- CTA Link -->
							<div class="absolute bottom-6 left-6 flex flex-row items-center gap-2.5 lg:bottom-[14px] lg:left-[30px]">
								<div class="font-geist text-base font-bold leading-6 text-primary" style="letter-spacing: -0.005em">
									Build your Profile
								</div>
								<img class="h-6 w-6" src="/icons/how-it-works/arrow-right-alt0.svg" alt="" />
							</div>
						</div>
					</div>

					<!-- Card 2: Complete Profile -->
					<div class="overflow-hidden rounded-[20px] bg-[#f3f3f3]">
						<div class="relative h-[400px] lg:h-[663px]">
							<!-- Mockup Image -->
							<div class="absolute left-[50%] top-0 h-[300px] w-[90%] lg:left-[115px] lg:top-[-4px] lg:h-[452px] lg:w-[425px]" style="translate: -50% 0; transform: translate(-50%, 0)">
								<img class="h-full w-full rounded-2xl object-cover" src="/images/how-it-works/frame-20856642041.png" alt="Complete Profile" />
							</div>

							<!-- Text Content -->
							<div class="absolute bottom-6 left-6 right-6 flex flex-col gap-8 lg:bottom-[82px] lg:left-[30px] lg:right-[30px]">
								<div class="flex flex-col gap-[17px]">
									<h3 class="font-geist text-xl font-bold leading-9 text-black lg:text-2xl" style="letter-spacing: -0.005em">
										Complete Your Profile
									</h3>
									<p class="font-geist text-sm font-normal leading-6 text-[rgba(42,44,44,0.80)] lg:text-base" style="letter-spacing: -0.005em">
										Highlight your skills, education, and experience to attract employers
									</p>
								</div>
								<!-- CTA Link -->
								<div class="flex flex-row items-center gap-2.5">
									<div class="font-geist text-base font-bold leading-6 text-primary" style="letter-spacing: -0.005em">
										Build your Profile
									</div>
									<img class="h-6 w-6" src="/icons/how-it-works/arrow-right-alt1.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Row 2: Two Cards -->
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-11">
					<!-- Card 3: Find Jobs -->
					<div class="overflow-hidden rounded-[20px] bg-[#f3f3f3]">
						<div class="relative h-[400px] lg:h-[663px]">
							<!-- Mockup Image with overlapping cards -->
							<div class="absolute left-[50%] top-4 w-[90%] lg:left-[87px] lg:top-[-17px] lg:w-[448px]" style="translate: -50% 0; transform: translate(-50%, 0)">
								<img class="h-auto w-full" src="/images/how-it-works/frame-20856642042.png" alt="Find Jobs" />
							</div>

							<!-- Text Content -->
							<div class="absolute bottom-6 left-6 right-6 flex flex-col gap-[17px] lg:bottom-[82px] lg:left-[30px] lg:right-[30px]">
								<h3 class="font-geist text-xl font-bold leading-9 text-black lg:text-2xl" style="letter-spacing: -0.005em">
									Find Jobs That Fit You
								</h3>
								<p class="font-geist text-sm font-normal leading-6 text-[rgba(42,44,44,0.80)] lg:text-base" style="letter-spacing: -0.005em">
									Search for jobs and internships that match your preferences and career goals
								</p>
							</div>

							<!-- CTA Link -->
							<div class="absolute bottom-6 left-6 flex flex-row items-center gap-2.5 lg:bottom-[14px] lg:left-[30px]">
								<div class="font-geist text-base font-bold leading-6 text-primary" style="letter-spacing: -0.005em">
									Start Searching
								</div>
								<img class="h-6 w-6" src="/icons/how-it-works/arrow-right-alt2.svg" alt="" />
							</div>
						</div>
					</div>

					<!-- Card 4: Apply & Connect -->
					<div class="overflow-hidden rounded-[20px] bg-[#f3f3f3]">
						<div class="relative h-[400px] lg:h-[663px]">
							<!-- Mockup Image -->
							<div class="absolute left-[50%] top-4 w-[90%] lg:left-[87px] lg:top-[-17px] lg:w-[448px]" style="translate: -50% 0; transform: translate(-50%, 0)">
								<img class="h-auto w-full" src="/images/how-it-works/frame-20856642043.png" alt="Apply Connect" />
							</div>

							<!-- Text Content -->
							<div class="absolute bottom-6 left-6 right-6 flex flex-col gap-[17px] lg:bottom-[82px] lg:left-[30px] lg:right-[30px]">
								<h3 class="font-geist text-xl font-bold leading-9 text-black lg:text-2xl" style="letter-spacing: -0.005em">
									Apply & Connect with Employers
								</h3>
								<p class="font-geist text-sm font-normal leading-6 text-[rgba(42,44,44,0.80)] lg:text-base" style="letter-spacing: -0.005em">
									Submit applications and get direct connections to employers and hiring managers.
								</p>
							</div>

							<!-- CTA Link -->
							<div class="absolute bottom-6 left-6 flex flex-row items-center gap-2.5 lg:bottom-[14px] lg:left-[30px]">
								<div class="font-geist text-base font-bold leading-6 text-primary" style="letter-spacing: -0.005em">
									See Interactive Job Map
								</div>
								<img class="h-6 w-6" src="/icons/how-it-works/arrow-right-alt3.svg" alt="" />
							</div>
						</div>
					</div>
				</div>

				<!-- Row 3: Single Centered Card -->
				<div class="flex justify-center">
					<div class="w-full overflow-hidden rounded-[20px] bg-[#f3f3f3] md:w-[calc(50%-1rem)] lg:w-[calc(50%-22px)]">
						<div class="relative h-[400px] lg:h-[663px]">
							<!-- Mockup Image -->
							<div class="absolute left-[50%] top-4 w-[90%] lg:left-[87px] lg:top-[-17px] lg:w-[448px]" style="translate: -50% 0; transform: translate(-50%, 0)">
								<img class="h-auto w-full" src="/images/how-it-works/frame-20856642240.png" alt="Land Dream Job" />
							</div>

							<!-- Text Content -->
							<div class="absolute bottom-6 left-6 right-6 flex flex-col gap-[17px] lg:bottom-[82px] lg:left-[30px] lg:right-[30px]">
								<h3 class="font-geist text-xl font-bold leading-9 text-black lg:text-2xl" style="letter-spacing: -0.005em">
									Land Your Dream Job!
								</h3>
								<p class="font-geist text-sm font-normal leading-6 text-[rgba(42,44,44,0.80)] lg:text-base" style="letter-spacing: -0.005em">
									Get hired by companies that value your potential. Start your career journey today!
								</p>
							</div>

							<!-- CTA Link -->
							<div class="absolute bottom-6 left-6 flex flex-row items-center gap-2.5 lg:bottom-[14px] lg:left-[30px]">
								<div class="font-geist text-base font-bold leading-6 text-primary" style="letter-spacing: -0.005em">
									Apply Now
								</div>
								<img class="h-6 w-6" src="/icons/how-it-works/arrow-right-alt4.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- How It Works for Employers Section -->
	<section class="w-full bg-white py-16 lg:py-20">
		<div class="page-container">
			<div class="mb-12 text-center">
				<h2 class="font-geist mb-4 text-3xl font-semibold leading-tight text-black lg:text-4xl" style="letter-spacing: -0.005em">
					How It Works for Employers
				</h2>
				<p class="font-geist text-lg font-normal leading-relaxed text-[#62717a]" style="letter-spacing: -0.005em">
					Hiring for employers is simple and effective. Here's how it works:
				</p>
			</div>

			<!-- Employer Process Cards Grid -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
				<!-- Card 1: Sign Up & Create Profile -->
				<div class="overflow-hidden rounded-2xl bg-neutral-light p-6 lg:p-8">
					<img class="mb-6 w-full rounded-lg object-cover" src="/images/how-it-works/frame-20856642241.png" alt="Sign Up" />
					<h3 class="font-geist mb-4 text-2xl font-semibold leading-tight text-black" style="letter-spacing: -0.005em">
						Sign Up & Create Your Employer Profile
					</h3>
					<p class="font-geist mb-6 text-base font-normal leading-6 text-[#505d65]" style="letter-spacing: -0.005em">
						Create a free employer account and build a compelling company profile to attract top talent.
					</p>
					<button class="flex items-center gap-2 text-primary transition-colors hover:opacity-80">
						<span class="font-geist text-base font-medium" style="letter-spacing: -0.005em">Build Your Profile</span>
						<img src="/icons/how-it-works/arrow-right-alt5.svg" alt="" class="h-5 w-5" />
					</button>
				</div>

				<!-- Card 2: Post a Job Listing -->
				<div class="overflow-hidden rounded-2xl bg-neutral-light p-6 lg:p-8">
					<img class="mb-6 w-full rounded-lg object-cover" src="/images/how-it-works/frame-20856642242.png" alt="Post Job" />
					<h3 class="font-geist mb-4 text-2xl font-semibold leading-tight text-black" style="letter-spacing: -0.005em">
						Post a Job Listing
					</h3>
					<p class="font-geist mb-6 text-base font-normal leading-6 text-[#505d65]" style="letter-spacing: -0.005em">
						Quickly post job openings with detailed descriptions, requirements, and benefits to reach qualified candidates.
					</p>
					<button class="flex items-center gap-2 text-primary transition-colors hover:opacity-80">
						<span class="font-geist text-base font-medium" style="letter-spacing: -0.005em">Build Your Profile</span>
						<img src="/icons/how-it-works/arrow-right-alt6.svg" alt="" class="h-5 w-5" />
					</button>
				</div>

				<!-- Card 3: Review Curated Candidates -->
				<div class="overflow-hidden rounded-2xl bg-neutral-light p-6 lg:p-8">
					<img class="mb-6 w-full rounded-lg object-cover" src="/images/how-it-works/frame-20856642243.png" alt="Review Candidates" />
					<h3 class="font-geist mb-4 text-2xl font-semibold leading-tight text-black" style="letter-spacing: -0.005em">
						Review Curated Candidates & Shortlist
					</h3>
					<p class="font-geist mb-6 text-base font-normal leading-6 text-[#505d65]" style="letter-spacing: -0.005em">
						Access a pool of pre-screened candidates and shortlist the best matches for your job openings.
					</p>
					<button class="flex items-center gap-2 text-primary transition-colors hover:opacity-80">
						<span class="font-geist text-base font-medium" style="letter-spacing: -0.005em">See Interactive Job Map</span>
						<img src="/icons/how-it-works/arrow-right-alt7.svg" alt="" class="h-5 w-5" />
					</button>
				</div>

				<!-- Card 4: Hire with Confidence -->
				<div class="overflow-hidden rounded-2xl bg-neutral-light p-6 lg:p-8">
					<img class="mb-6 w-full rounded-lg object-cover" src="/images/how-it-works/frame-20856642244.png" alt="Hire Confidence" />
					<h3 class="font-geist mb-4 text-2xl font-semibold leading-tight text-black" style="letter-spacing: -0.005em">
						Hire with Confidence
					</h3>
					<p class="font-geist mb-6 text-base font-normal leading-6 text-[#505d65]" style="letter-spacing: -0.005em">
						Conduct interviews and hire the best talent with confidence. Build your dream team efficiently and effectively.
					</p>
					<button class="flex items-center gap-2 text-primary transition-colors hover:opacity-80">
						<span class="font-geist text-base font-medium" style="letter-spacing: -0.005em">See Interactive Job Map</span>
						<img src="/icons/how-it-works/arrow-right-alt8.svg" alt="" class="h-5 w-5" />
					</button>
				</div>
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
						<button class="w-full rounded-[20px] bg-black px-6 py-4 transition-colors hover:bg-gray-800 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
								Become a Partner
							</div>
						</button>
						<button class="w-full rounded-[20px] border border-solid border-white px-6 py-4 transition-colors hover:bg-white hover:text-gray-800 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
								Schedule A Demo
							</div>
						</button>
					</div>
				</div>

				<!-- Right Column -->
				<div class="flex flex-col items-start justify-start gap-12">
					<div class="flex flex-col items-start justify-start gap-1">
						<div class="font-lato text-base font-normal leading-6 text-white" style="letter-spacing: -0.005em">
							We love to hear from you
						</div>
						<h2 class="font-geist text-3xl font-semibold leading-tight text-white lg:text-4xl lg:leading-[54px]" style="letter-spacing: -0.005em">
							Do you need more Details<br />or support?
						</h2>
					</div>
					<div class="flex w-full flex-col items-start justify-start gap-3 sm:flex-row">
						<button class="w-full rounded-[20px] bg-white px-6 py-4 transition-colors hover:bg-gray-100 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-secondary" style="letter-spacing: -0.005em">
								Hire With JobBeta
							</div>
						</button>
						<button class="w-full rounded-[20px] border border-white px-6 py-4 transition-colors hover:bg-white hover:text-gray-800 sm:w-60">
							<div class="font-lato text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
								Partner with JobBeta
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Background Decorative Elements -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div class="absolute left-0 top-0 h-full w-1/2 bg-primary"></div>
			<!-- Decorative circles -->
			<div class="absolute -right-20 -top-20 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -right-10 top-0 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -right-32 -top-32 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-20 -left-20 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-10 -left-10 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
			<div class="absolute -bottom-32 left-10 h-[185px] w-[185px] rounded-full border border-solid border-white opacity-20"></div>
		</div>
	</section>
</div>
