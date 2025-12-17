<script>
	// State for interactive elements
	let activeTab = $state('active');
	let activeCandidateTab = $state('all');
</script>

<section class="relative overflow-hidden bg-white py-16 lg:py-24">
	<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mx-auto mb-12 max-w-[688px] text-center lg:mb-20">
			<h2
				class="mb-5 text-3xl leading-tight font-bold text-[#110D21] md:text-[40px] md:leading-[52px]"
				style="letter-spacing: -0.005em"
			>
				How It Works for Employers
			</h2>
			<p
				class="text-lg leading-[30px] text-[#2a2c2c]/80 md:text-xl"
				style="letter-spacing: -0.005em"
			>
				Hiring on JobBeta is simple and effective. Here's how:
			</p>
		</div>

		<!-- Cards Grid -->
		<div class="mx-auto max-w-[1186px]">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-11">
				<!-- Card 1: Sign Up & Create Your Employer Profile -->
				<div
					class="group relative h-[500px] overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[597px]"
				>
					<div
						class="absolute top-[42px] left-6 z-10 flex w-[90%] flex-col gap-4 lg:left-[30px] lg:w-[510px]"
					>
						<div class="flex flex-col gap-[17px]">
							<h3
								class="text-xl leading-8 font-bold text-black lg:text-2xl lg:leading-9"
								style="letter-spacing: -0.005em"
							>
								Sign Up & Create Your Employer Profile
							</h3>
							<p
								class="text-sm leading-6 text-[#2a2c2c]/80 lg:text-base"
								style="letter-spacing: -0.005em"
							>
								Set up your company profile and add key details about your organization.
							</p>
						</div>
						<a
							href="/employers/register"
							class="flex items-center gap-2.5 transition-opacity hover:opacity-80"
						>
							<span
								class="text-sm font-bold text-[#7502ff] lg:text-base"
								style="letter-spacing: -0.005em">Build your Profile</span
							>
							<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
							</svg>
						</a>
					</div>
					<!-- Mockup Image -->
					<img
						src="/images/employers/group-1321314403-2-10.png"
						alt="Employer profile mockup"
						class="absolute top-[202px] left-1/2 h-auto w-[250px] -translate-x-1/2 object-cover lg:h-[476px] lg:w-[316px]"
					/>
				</div>

				<!-- Card 2: Build brand & Find candidates -->
				<div
					class="group relative h-[500px] overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[597px]"
				>
					<div
						class="absolute top-12 left-6 z-10 flex w-[90%] flex-col gap-[27px] lg:left-[30px] lg:w-[510px]"
					>
						<div class="flex flex-col gap-[17px]">
							<h3
								class="text-xl leading-8 font-bold text-black lg:text-2xl lg:leading-9"
								style="letter-spacing: -0.005em"
							>
								Build brand & Find candidates
							</h3>
							<p
								class="text-sm leading-6 text-[#2a2c2c]/80 lg:text-base"
								style="letter-spacing: -0.005em"
							>
								Share your job or internship openings, specifying the skills and qualifications
								needed.
							</p>
						</div>
						<a
							href="/employers/register"
							class="flex items-center gap-2.5 transition-opacity hover:opacity-80"
						>
							<span
								class="text-sm font-bold text-[#7502ff] lg:text-base"
								style="letter-spacing: -0.005em">Build your Profile</span
							>
							<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
							</svg>
						</a>
					</div>
					<!-- Mockup Image -->
					<img
						src="/images/employers/group-1321314405-2-10.png"
						alt="Job posting mockup"
						class="absolute top-[216px] left-[127px] h-auto w-[250px] object-cover lg:h-[638px] lg:w-[316px]"
					/>
				</div>

				<!-- Card 3: Review Curated Candidate Pool & Shortlist Candidates -->
				<div
					class="group relative h-[540px] overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[663px]"
				>
					<div
						class="absolute top-[46px] left-6 z-10 flex w-[90%] flex-col gap-4 lg:left-1/2 lg:w-[510px] lg:-translate-x-1/2"
					>
						<div class="flex flex-col gap-[17px]">
							<h3
								class="text-xl leading-8 font-bold text-black lg:text-2xl lg:leading-9"
								style="letter-spacing: -0.005em"
							>
								Review Curated Candidate Pool & Shortlist Candidates
							</h3>
							<p
								class="text-sm leading-6 text-[#2a2c2c]/80 lg:text-base"
								style="letter-spacing: -0.005em"
							>
								Browse applications, review candidate profiles, and shortlist the best fits.
							</p>
						</div>
						<a
							href="/employers/register"
							class="flex items-center gap-2.5 transition-opacity hover:opacity-80"
						>
							<span
								class="text-sm font-bold text-[#7502ff] lg:text-base"
								style="letter-spacing: -0.005em">Build your Profile</span
							>
							<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
							</svg>
						</a>
					</div>
					<!-- Phone Mockup -->
					<img
						src="/images/employers/notification-1-10.png"
						alt="Candidate notifications mockup"
						class="absolute top-[271px] left-1/2 h-auto w-[280px] -translate-x-1/2 rounded-[50px] border-[11px] border-[#7502ff] object-cover lg:h-[716px] lg:w-[375px]"
					/>
				</div>

				<!-- Card 4: Hire with speed & confidence -->
				<div
					class="group relative h-[540px] overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[663px]"
				>
					<div
						class="absolute top-[41px] left-6 z-10 flex w-[90%] flex-col gap-4 lg:left-1/2 lg:w-[510px] lg:-translate-x-1/2"
					>
						<div class="flex flex-col gap-[17px]">
							<h3
								class="text-xl leading-8 font-bold text-black lg:text-2xl lg:leading-9"
								style="letter-spacing: -0.005em"
							>
								Hire with speed & confidence
							</h3>
							<p
								class="text-sm leading-6 text-[#2a2c2c]/80 lg:text-base"
								style="letter-spacing: -0.005em"
							>
								Reach out to selected candidates, schedule interviews, and assess their potential.
							</p>
						</div>
						<a
							href="/employers/register"
							class="flex items-center gap-2.5 transition-opacity hover:opacity-80"
						>
							<span
								class="text-sm font-bold text-[#7502ff] lg:text-base"
								style="letter-spacing: -0.005em">Get Started For free Today</span
							>
							<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
							</svg>
						</a>
					</div>

					<!-- Dashboard Mockup -->
					<div
						class="absolute top-[200px] left-4 h-[320px] w-[calc(100%-16px)] overflow-hidden rounded-[20px] border-[16px] border-[#f7931e]/16 bg-neutral-100 lg:top-[269px] lg:left-11 lg:h-[416px] lg:w-[1149px]"
					>
						<!-- Sidebar -->
						<div
							class="absolute top-0 left-0 hidden h-full w-[209px] overflow-hidden border-r border-[#2a2c2c]/20 lg:block"
						>
							<img
								src="/images/employers/layer-23.svg"
								alt="Logo"
								class="absolute top-[50px] left-12 h-auto"
							/>
							<div class="absolute top-[106px] left-[34px] flex w-[140px] flex-col gap-[61px]">
								<div class="flex w-[100px] flex-col gap-[21px]">
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
											/>
										</svg>
										<span class="text-sm text-[#2a2c2c]">Overview</span>
									</div>
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
											/>
										</svg>
										<span class="text-sm text-[#2a2c2c]">Inbox</span>
									</div>
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#7502ff]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
											/>
										</svg>
										<span class="text-sm font-extrabold text-[#7502ff]">Jobs</span>
									</div>
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
											/>
										</svg>
										<span class="text-sm text-[#2a2c2c]">Events</span>
									</div>
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-7 9c0-2.67 5.33-4 7-4s7 1.33 7 4v1H5v-1z"
											/>
										</svg>
										<span class="text-sm text-[#2a2c2c]">People</span>
									</div>
									<div class="flex items-center gap-5">
										<svg class="h-5 w-5 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
											/>
										</svg>
										<span class="text-sm text-[#2a2c2c]">Career Center</span>
									</div>
								</div>
							</div>
						</div>

						<!-- Main Content -->
						<div class="p-4 lg:absolute lg:top-9 lg:left-[232px] lg:w-[887px] lg:p-0">
							<div
								class="mb-4 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:justify-between"
							>
								<div>
									<h4 class="text-base font-bold text-black lg:text-xl">
										Role - Senior Project Manager
									</h4>
									<p class="text-xs text-[#2a2c2c]/70" style="letter-spacing: -0.005em">
										Abuja, Nigeria- Full time
									</p>
								</div>
								<div class="flex items-center gap-4">
									<div
										class="hidden items-center gap-2.5 rounded-2xl border border-neutral-300 px-3 py-3 lg:flex lg:w-[304px]"
									>
										<svg class="h-6 w-6 text-[#2a2c2c]/70" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
											/>
										</svg>
										<span class="text-xs text-[#2a2c2c]/70">search</span>
									</div>
									<div class="flex items-center gap-4">
										<img
											src="/images/employers/frame-20856633270.png"
											alt="Profile"
											class="h-10 w-10 rounded-full border-[3px] border-white object-cover"
										/>
										<div
											class="flex h-10 w-10 items-center justify-center rounded-[20px] bg-neutral-200"
										>
											<svg class="h-6 w-6 text-[#2a2c2c]" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>

							<!-- Tabs -->
							<div class="mb-4 flex flex-wrap items-center gap-4 lg:mb-8 lg:gap-[60px]">
								<div class="flex flex-wrap items-center gap-4 lg:gap-[39px]">
									<span class="text-sm font-semibold text-[#7502ff] lg:text-base">Applied</span>
									<span class="text-sm font-semibold text-black lg:text-base">Rejected</span>
									<span class="text-sm font-semibold text-black lg:text-base">Replied</span>
									<span class="text-sm font-bold text-black lg:text-base">Favourite</span>
								</div>
							</div>

							<!-- Table Header -->
							<div
								class="mb-4 hidden items-center gap-[108px] text-sm font-semibold text-[#2a2c2c] lg:flex"
							>
								<span>Candidates</span>
								<div class="flex items-center gap-2">
									<span>Status</span>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
									</svg>
								</div>
								<span>Socials</span>
								<span>Favourite</span>
							</div>

							<!-- Candidate Rows -->
							<div class="space-y-3 lg:space-y-4">
								<!-- Candidate 1 -->
								<div
									class="flex flex-wrap items-center gap-4 border-t border-neutral-200 py-3 lg:gap-[60px]"
								>
									<div class="flex w-[150px] items-center gap-3">
										<img
											src="/images/employers/ellipse-1780.png"
											alt="Jane"
											class="h-8 w-8 rounded-full border-[3px] border-black/25 object-cover"
										/>
										<span class="text-xs text-[#2a2c2c]/80">Jane Williams</span>
									</div>
									<div class="flex items-center gap-2 rounded-lg bg-green-500/10 px-1.5 py-1">
										<div class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
										<span class="text-[10px] font-bold text-[#2a2c2c]/80">Passed Interview</span>
									</div>
									<span class="hidden text-xs font-extrabold text-[#2a2c2c]/80 lg:block"
										>Junior</span
									>
									<span class="hidden text-xs font-extrabold text-[#2a2c2c]/80 lg:block"
										>80% Job Match</span
									>
								</div>

								<!-- Candidate 2 -->
								<div
									class="flex flex-wrap items-center gap-4 border-t border-neutral-200 py-3 lg:gap-[60px]"
								>
									<div class="flex w-[150px] items-center gap-3">
										<img
											src="/images/employers/ellipse-1770.png"
											alt="Jane"
											class="h-8 w-8 rounded-full border-[3px] border-black/25 object-cover"
										/>
										<span class="text-xs text-[#2a2c2c]/80">Jane Williams</span>
									</div>
									<div class="flex items-center gap-2 rounded-lg bg-red-500/10 px-1.5 py-1">
										<span class="text-[10px] font-bold text-red-500/80">Failed Interview</span>
									</div>
									<span class="hidden text-xs font-extrabold text-[#2a2c2c]/80 lg:block"
										>Junior</span
									>
									<span class="hidden text-xs font-extrabold text-[#2a2c2c]/80 lg:block"
										>80% Job Match</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
