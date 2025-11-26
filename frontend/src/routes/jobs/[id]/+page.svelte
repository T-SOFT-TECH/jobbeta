<svelte:head>
	<title>Project Security Manager - JobBeta</title>
	<meta name="description" content="View job details and apply - JobBeta" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Breadcrumb -->
	<div class="mx-auto w-full max-w-[1344px] px-6 py-8">
		<button class="font-geist flex items-center gap-2 text-base leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">
			<span>←</span>
			<span>Go back</span>
		</button>
	</div>

	<!-- Job Header -->
	<div class="mx-auto w-full max-w-[1344px] px-6 pb-12">
		<div class="flex flex-col gap-12 lg:flex-row lg:gap-[78px]">
			<!-- Main Content -->
			<div class="flex w-full flex-col gap-12 lg:w-[644px]">
				<!-- Job Title Section -->
				<div class="flex flex-row gap-[51px]">
					<img class="h-[100px] w-[100px] shrink-0 rounded-2xl object-cover" src="/icons/job-details/image3.png" alt="Shell" />
					<div class="flex flex-col gap-4">
						<div class="flex flex-col gap-3">
							<div class="flex flex-row items-center gap-3">
								<h1 class="font-geist text-[32px] font-bold leading-[48px] text-[#3f018a]" style="letter-spacing: -0.005em">
									Project Security Manger
								</h1>
								<img class="h-6 w-6" src="/icons/job-details/check-circle0.svg" alt="Verified" />
							</div>
							<div class="flex flex-row flex-wrap gap-5">
								<div class="flex flex-row items-center gap-2">
									<img class="h-6 w-6" src="/icons/job-details/work-outline4.svg" alt="" />
									<div class="font-raleway text-sm leading-[21px]" style="letter-spacing: -0.005em">Accounting</div>
								</div>
								<div class="flex flex-row items-center gap-2">
									<img class="h-6 w-6" src="/icons/job-details/location-on3.svg" alt="" />
									<div class="font-raleway text-sm leading-[21px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
								</div>
								<div class="flex flex-row items-center gap-2">
									<img class="h-6 w-6" src="/icons/job-details/home-work3.svg" alt="" />
									<div class="font-raleway text-sm leading-[21px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row flex-wrap gap-[5px]">
							<div class="flex items-center justify-center gap-2.5 rounded-lg bg-neutral px-2.5 py-1.5">
								<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
							</div>
							<div class="flex items-center justify-center gap-2.5 rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
								<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Remote</div>
							</div>
							<div class="flex items-center justify-center gap-2.5 rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
								<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Tabs -->
				<div class="flex flex-col gap-10">
					<div class="flex flex-col gap-2">
						<div class="flex flex-row flex-wrap gap-[79px]">
							<div class="font-geist text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">Job Details</div>
							<div class="font-geist text-2xl leading-9 text-[rgba(0,0,0,0.40)]" style="letter-spacing: -0.005em">About Company</div>
						</div>
						<div class="flex flex-col">
							<div class="h-1.5 w-[127px] rounded-lg bg-[#7502ff]"></div>
							<div class="-mt-px h-0 border-t border-[rgba(42,44,44,0.16)]"></div>
						</div>
					</div>

					<!-- Job Information -->
					<div class="flex flex-col gap-[30px]">
						<div class="flex flex-col gap-5">
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Job Type: </span>
								<span class="text-[rgba(42,44,44,0.70)]">Full-Time</span>
							</div>
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Reports To: </span>
								<span class="text-[rgba(42,44,44,0.70)]">Head of Security / Project Director</span>
							</div>
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Career Level: </span>
								<span class="text-[rgba(42,44,44,0.70)]">Entry-level</span>
							</div>
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Work Level : </span>
								<span class="text-[rgba(42,44,44,0.70)]">Fully Onsite</span>
							</div>
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Department: </span>
								<span class="text-[rgba(42,44,44,0.70)]">Security / Project Management</span>
							</div>
							<div class="font-geist text-xl leading-[30px]" style="letter-spacing: -0.005em">
								<span class="font-semibold text-black">Application Ends: </span>
								<span class="text-[rgba(42,44,44,0.70)]">20 June, 2027</span>
							</div>
						</div>

						<!-- Job Summary -->
						<div class="flex flex-col gap-5">
							<h2 class="font-geist text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">Job Summary</h2>
							<p class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
								We are seeking a highly experienced Project Security Manager to oversee and implement security measures across all phases of our project lifecycle. This role involves developing, coordinating, and enforcing security protocols to protect people, assets, and information. The ideal candidate will bring a proactive approach to risk management, site safety, and security strategy while working closely with project teams, contractors, and stakeholders.
							</p>
						</div>

						<!-- Collapsible Sections -->
						<div class="flex flex-row items-start justify-between gap-5">
							<div class="font-geist flex-1 text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">Key Responsibilities</div>
							<img class="h-8 w-8" src="/icons/job-details/keyboard-arrow-down1.svg" alt="" />
						</div>

						<div class="flex flex-row items-start justify-between gap-5">
							<div class="font-geist flex-1 text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">Requirements</div>
							<img class="h-8 w-8" src="/icons/job-details/keyboard-arrow-down2.svg" alt="" />
						</div>

						<div class="flex flex-row items-start justify-between gap-5">
							<div class="font-geist flex-1 text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">What We Offer</div>
							<img class="h-8 w-8" src="/icons/job-details/keyboard-arrow-down3.svg" alt="" />
						</div>

						<!-- Share on Socials -->
						<div class="flex flex-col gap-[30px]">
							<div class="flex flex-col gap-5">
								<h3 class="font-geist text-2xl font-semibold leading-9 text-black" style="letter-spacing: -0.005em">Share on Socials</h3>
							</div>
							<div class="flex flex-row flex-wrap gap-5">
								<div class="flex flex-row items-center gap-2">
									<img class="h-6 w-6" src="/icons/job-details/facebook1.svg" alt="Facebook" />
									<div class="font-raleway text-sm leading-[21px]" style="letter-spacing: -0.005em">Facebook</div>
								</div>
								<div class="flex flex-row items-center gap-2">
									<img class="h-6 w-6" src="/icons/job-details/gmail0.svg" alt="Gmail" />
									<div class="font-raleway text-sm leading-[21px]" style="letter-spacing: -0.005em">Gmail</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Sidebar -->
			<div class="flex w-full flex-col gap-10 lg:w-auto lg:flex-1">
				<!-- Related Jobs -->
				<div class="flex flex-col gap-4">
					<h2 class="font-geist text-xl font-bold leading-[30px] text-black" style="letter-spacing: -0.005em">Related Jobs</h2>
					<div class="flex flex-col gap-4">
						{#each Array(3) as _, i}
							<div class="flex flex-row gap-5 rounded-lg border border-solid border-neutral-primary-grey bg-white p-6">
								<img class="h-9 w-9 shrink-0 rounded-2xl object-cover" src="/icons/job-details/image{i}.png" alt="" />
								<div class="flex flex-col gap-8">
									<div class="flex flex-col gap-4">
										<div class="flex flex-row items-center justify-between gap-1.5">
											<div class="font-geist flex-1 text-sm leading-[21px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Shell</div>
											<img class="h-6 w-6" src="/icons/job-details/bookmark-border{i + 1}.svg" alt="Bookmark" />
										</div>
										<div class="flex flex-row items-center justify-between gap-1.5">
											<div class="font-geist text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">Project Security Manger</div>
											<div class="font-geist w-[222px] text-right text-sm leading-[21px] text-black" style="letter-spacing: -0.005em">Posted about an hour ago</div>
										</div>
										<div class="flex flex-row flex-wrap gap-5">
											<div class="flex flex-row items-center gap-2">
												<img class="h-5 w-5" src="/icons/job-details/work-outline{i}.svg" alt="" />
												<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">Accounting</div>
											</div>
											<div class="flex flex-row items-center gap-2">
												<img class="h-5 w-5" src="/icons/job-details/location-on{i}.svg" alt="" />
												<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">Lagos, Nigeria</div>
											</div>
											<div class="flex flex-row items-center gap-2">
												<img class="h-5 w-5" src="/icons/job-details/home-work{i}.svg" alt="" />
												<div class="font-raleway text-xs leading-[18px]" style="letter-spacing: -0.005em">N250,000 - N400,000</div>
											</div>
										</div>
										<div class="flex flex-row flex-wrap gap-[5px]">
											<div class="flex items-center justify-center rounded-lg bg-neutral px-2.5 py-1.5">
												<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">internship</div>
											</div>
											<div class="flex items-center justify-center rounded-lg bg-[rgba(234,236,240,0.35)] px-2.5 py-1.5">
												<div class="font-geist text-xs leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Onsite</div>
											</div>
											<div class="flex items-center justify-center rounded-lg bg-[rgba(255,165,0,0.10)] px-2.5 py-1.5">
												<div class="font-geist text-xs font-bold leading-[18px] text-[rgba(0,0,0,0.66)]" style="letter-spacing: -0.005em">Urgent</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Job Alert Card -->
				<div class="flex flex-col gap-8 rounded-2xl bg-[rgba(63,1,138,0.05)] p-6">
					<h2 class="font-geist text-xl font-bold leading-[30px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Job Alert</h2>

					<div class="flex flex-col gap-6">
						<!-- Job Title -->
						<div class="flex flex-col gap-[19px]">
							<div class="font-geist text-base font-bold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Job Title</div>
							<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
								<div class="font-lato flex-1 text-left text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Enter Job title</div>
								<img class="h-6 w-6" src="/icons/job-details/arrow-drop-down0.svg" alt="" />
							</div>
						</div>

						<!-- Notification Frequency -->
						<div class="flex flex-col gap-[19px]">
							<div class="font-geist text-base font-bold leading-6 text-[#2a2c2c]" style="letter-spacing: -0.005em">Notification Frequency</div>
							<div class="flex flex-row items-center gap-2.5 rounded-2xl border border-solid border-neutral-primary-grey bg-white px-6 py-4">
								<div class="font-lato flex-1 text-left text-base leading-6 text-[rgba(42,44,44,0.49)]" style="letter-spacing: -0.005em">Daily</div>
								<img class="h-6 w-6" src="/icons/job-details/arrow-drop-down1.svg" alt="" />
							</div>
						</div>
					</div>

					<!-- Save Alert Button -->
					<button class="font-geist w-full rounded-[20px] bg-primary p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
						Save Alert
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Feature Cards Section -->
	<div class="w-full bg-[rgba(234,236,240,0.43)] py-16">
		<div class="mx-auto w-full max-w-[1344px] px-6">
			<div class="flex flex-row flex-wrap justify-center gap-[39px]">
				{#each [
					{ image: 'frame-20856640660.png', title: "Stay Relevant with student's trend" },
					{ image: 'frame-20856640720.png', title: "Grow Your Employer's Network" },
					{ image: 'frame-20856640721.png', title: 'Create Meaningful<br />Career Experience' },
					{ image: 'frame-20856640722.png', title: 'Tell Your Story to Other' }
				] as card}
					<div class="relative h-[552px] w-[300px] overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
						<img class="absolute left-4 top-5 h-[226px] w-[268px] overflow-hidden rounded-2xl object-cover" src="/icons/job-details/{card.image}" alt="" />
						<div class="absolute left-[21px] top-[304px] flex flex-col gap-7">
							<div class="font-raleway w-[190px] text-xl font-bold leading-[21px] text-black" style="letter-spacing: -0.005em">
								{@html card.title}
							</div>
							<div class="font-geist w-[258px] text-sm font-medium leading-[21px] text-[rgba(42,44,44,0.75)]" style="letter-spacing: -0.005em">
								Hear from companies that have found exceptional talent through JobBeta. Join these successful employers – Post your job today!
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Purple CTA Section -->
	<div class="w-full overflow-hidden bg-brand-colours-dark-purple">
		<div class="relative mx-auto w-full max-w-[1440px]">
			<div class="flex flex-col lg:flex-row">
				<!-- Left Section - Purple Background -->
				<div class="relative w-full overflow-hidden bg-primary lg:w-[790px]">
					<div class="relative px-6 py-[227px] lg:px-[129px]">
						<div class="flex flex-col gap-12">
							<div class="flex flex-col gap-5">
								<h2 class="font-geist text-4xl font-semibold leading-[54px] text-white" style="letter-spacing: -0.005em">
									Ready to bring JobBeta to your students?
								</h2>
								<p class="font-geist text-xl leading-[30px] text-white" style="letter-spacing: -0.005em">
									Let's work together to shape the future of early-career hiring.
								</p>
							</div>
							<div class="flex flex-row flex-wrap gap-3">
								<button class="font-lato w-60 rounded-[20px] bg-black p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
									Become a Partner
								</button>
								<button class="font-lato w-60 rounded-[20px] border border-solid border-white p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
									Schedule A Demo
								</button>
							</div>
						</div>
					</div>

					<!-- Decorative circles -->
					<div class="absolute -bottom-[200px] left-[45px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
					<div class="absolute -bottom-[200px] left-[111px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
					<div class="absolute -bottom-[200px] left-[265px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
					<div class="absolute -bottom-[200px] left-[370px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
					<div class="absolute -bottom-[200px] left-[492px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
					<div class="absolute -bottom-[200px] left-[558px] h-[185px] w-[185px] rotate-[-40.313deg] rounded-full border border-white"></div>
				</div>

				<!-- Right Section - Dark Purple Background -->
				<div class="relative flex-1 px-6 py-[261px] lg:px-12">
					<div class="flex flex-col gap-[47px]">
						<div class="flex flex-col gap-1">
							<div class="font-lato text-base leading-6 text-white" style="letter-spacing: -0.005em">We love to hear from you</div>
							<h2 class="font-geist text-4xl font-semibold leading-[54px] text-white" style="letter-spacing: -0.005em">
								Do you need more Details<br />or support?
							</h2>
						</div>
						<div class="flex flex-row flex-wrap gap-3">
							<button class="font-lato w-60 rounded-[20px] bg-white p-4 text-center text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">
								Get in touch
							</button>
							<button class="font-lato w-60 rounded-[20px] border border-solid border-white p-4 text-center text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
								Explore self-service
							</button>
						</div>
					</div>

					<!-- Decorative circles -->
					<div class="absolute -top-[78px] right-[112px] hidden h-[185px] w-[185px] rounded-full border border-white lg:block"></div>
					<div class="absolute -top-[131px] right-[263px] hidden h-[185px] w-[185px] rounded-full border border-white lg:block"></div>
					<div class="absolute top-6 right-[74px] hidden h-[185px] w-[185px] rounded-full border border-white lg:block"></div>
				</div>
			</div>
		</div>
	</div>
</div>