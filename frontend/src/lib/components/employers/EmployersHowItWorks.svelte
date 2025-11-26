<script>
	let activeTab = $state('active');
	let activeCandidateTab = $state('all');
</script>

<section class="relative overflow-hidden bg-white py-24">
	<div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<div
				class="mb-4 inline-block rounded-full bg-[#E6D2FF]/20 px-4 py-1.5 text-sm font-bold text-[#7502FF]"
			>
				How It Works
			</div>
			<h2 class="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
				Start Hiring in 5 Simple Steps
			</h2>
			<p class="text-lg text-neutral-600">
				Streamline your recruitment process with our easy-to-use platform.
			</p>
		</div>

		<div class="mb-11 grid grid-cols-1 gap-11 lg:grid-cols-2">
			<!-- Step 1: Sign Up & Create Your Employer Profile -->
			<div class="group relative h-[663px] overflow-hidden rounded-[20px] bg-[#f3f3f3]">
				<div class="absolute left-[30px] top-[453px] flex w-[510px] flex-col gap-[17px]">
					<h3 class="text-2xl font-bold leading-9 text-black">
						Sign Up & Create Your Employer Profile
					</h3>
					<p class="text-base leading-6 text-[#2a2c2c]/80">
						Create your account, set up your company profile, and showcase your brand to top talent.
					</p>
				</div>
				<div class="absolute left-[30px] top-[581px] flex items-center gap-2.5">
					<span class="text-base font-bold text-[#7502ff]">Get Started For free Today</span>
					<img src="/images/icons/arrow-right-alt.svg" alt="arrow" class="h-6 w-6" />
				</div>

				<!-- Mockup -->
				<div
					class="absolute left-[53px] top-[19px] h-[506px] w-[464px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg"
				>
					<div class="relative h-[168px] w-full overflow-hidden bg-neutral-100">
						<img
							src="/images/employers/office-meeting.jpg"
							alt="Office"
							class="h-full w-full object-cover opacity-80"
						/>
						<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
					</div>
					<div class="relative p-8 pt-12">
						<div
							class="absolute -top-10 left-8 flex h-20 w-20 items-center justify-center rounded-xl bg-white p-2 shadow-md"
						>
							<img src="/images/logos/jobbeta-icon.svg" alt="Logo" class="h-12 w-12" />
						</div>
						<div class="space-y-6">
							<div>
								<label class="mb-2 block text-sm font-bold text-neutral-700" for="email"
									>Company Email</label
								>
								<div class="relative">
									<input
										type="email"
										id="email"
										value="jobbeta@gmail.com"
										class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 focus:border-[#7502FF] focus:outline-none"
										readonly
									/>
									<div
										class="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-green-500"
									>
										<svg
											class="h-3 w-3 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div>
								<label class="mb-2 block text-sm font-bold text-neutral-700" for="password"
									>Password</label
								>
								<div class="relative">
									<input
										type="password"
										id="password"
										value="jobbeta123"
										class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 focus:border-[#7502FF] focus:outline-none"
										readonly
									/>
									<div class="absolute right-3 top-1/2 -translate-y-1/2">
										<svg
											class="h-5 w-5 text-neutral-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										</svg>
									</div>
								</div>
							</div>
							<button
								class="w-full rounded-xl bg-[#7502FF] py-3 font-bold text-white transition-colors hover:bg-[#6002d1]"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 2: Post a Job Listing -->
			<div class="group relative h-[663px] overflow-hidden rounded-[20px] bg-[#f3f3f3]">
				<div class="absolute left-[30px] top-[453px] flex w-[510px] flex-col gap-[17px]">
					<h3 class="text-2xl font-bold leading-9 text-black">Post a Job Listing</h3>
					<p class="text-base leading-6 text-[#2a2c2c]/80">
						Create detailed job posts with requirements, benefits, and screening questions to
						attract the right candidates.
					</p>
				</div>
				<div class="absolute left-[30px] top-[581px] flex items-center gap-2.5">
					<span class="text-base font-bold text-[#7502ff]">Post A Job</span>
					<img src="/images/icons/arrow-right-alt.svg" alt="arrow" class="h-6 w-6" />
				</div>

				<!-- Mockup -->
				<div
					class="absolute left-[57px] top-[19px] h-[428px] w-[967px] overflow-hidden rounded-[20px] border border-neutral-200 bg-[#fafafa]"
				>
					<div class="p-8">
						<div class="mb-8 flex w-[480px] items-center justify-between">
							<h4 class="text-xl font-bold text-neutral-900">Job Listing</h4>
							<div class="flex rounded-lg border border-neutral-200 bg-white p-1">
								<button
									class="rounded-md px-4 py-1.5 text-sm font-semibold {activeTab === 'active'
										? 'bg-[#7502FF] text-white'
										: 'text-neutral-500'}"
									onclick={() => (activeTab = 'active')}
								>
									Active
								</button>
								<button
									class="rounded-md px-4 py-1.5 text-sm font-semibold {activeTab === 'closed'
										? 'bg-[#7502FF] text-white'
										: 'text-neutral-500'}"
									onclick={() => (activeTab = 'closed')}
								>
									Closed
								</button>
							</div>
						</div>

						<div class="grid w-[480px] grid-cols-2 gap-6">
							<!-- Job Card 1 -->
							<div class="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
								<div class="mb-4 flex items-start justify-between">
									<div class="flex gap-3">
										<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
											<img src="/images/logos/google.svg" alt="Google" class="h-6 w-6" />
										</div>
										<div>
											<h5 class="font-bold text-neutral-900">Product Designer</h5>
											<p class="text-xs text-neutral-500">Google inc • Full time</p>
										</div>
									</div>
									<span
										class="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700"
										>Active</span
									>
								</div>
								<div class="flex items-center justify-between text-xs text-neutral-500">
									<span>Posted 2 days ago</span>
									<div class="flex -space-x-2">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-[8px]"
										>
											+12
										</div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-300"></div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-400"></div>
									</div>
								</div>
							</div>

							<!-- Job Card 2 -->
							<div class="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
								<div class="mb-4 flex items-start justify-between">
									<div class="flex gap-3">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100"
										>
											<img src="/images/logos/spotify.svg" alt="Spotify" class="h-6 w-6" />
										</div>
										<div>
											<h5 class="font-bold text-neutral-900">UX Researcher</h5>
											<p class="text-xs text-neutral-500">Spotify • Contract</p>
										</div>
									</div>
									<span
										class="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700"
										>Active</span
									>
								</div>
								<div class="flex items-center justify-between text-xs text-neutral-500">
									<span>Posted 5 days ago</span>
									<div class="flex -space-x-2">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-[8px]"
										>
											+8
										</div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-300"></div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-400"></div>
									</div>
								</div>
							</div>

							<!-- Job Card 3 -->
							<div class="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
								<div class="mb-4 flex items-start justify-between">
									<div class="flex gap-3">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100"
										>
											<img src="/images/logos/amazon.svg" alt="Amazon" class="h-6 w-6" />
										</div>
										<div>
											<h5 class="font-bold text-neutral-900">Senior Dev</h5>
											<p class="text-xs text-neutral-500">Amazon • Remote</p>
										</div>
									</div>
									<span
										class="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700"
										>Active</span
									>
								</div>
								<div class="flex items-center justify-between text-xs text-neutral-500">
									<span>Posted 1 week ago</span>
									<div class="flex -space-x-2">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-[8px]"
										>
											+24
										</div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-300"></div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-400"></div>
									</div>
								</div>
							</div>

							<!-- Job Card 4 -->
							<div class="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
								<div class="mb-4 flex items-start justify-between">
									<div class="flex gap-3">
										<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
											<img src="/images/logos/uber.svg" alt="Uber" class="h-6 w-6" />
										</div>
										<div>
											<h5 class="font-bold text-neutral-900">Product Mgr</h5>
											<p class="text-xs text-neutral-500">Uber • Full time</p>
										</div>
									</div>
									<span
										class="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700"
										>Active</span
									>
								</div>
								<div class="flex items-center justify-between text-xs text-neutral-500">
									<span>Posted 2 weeks ago</span>
									<div class="flex -space-x-2">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-[8px]"
										>
											+15
										</div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-300"></div>
										<div class="h-6 w-6 rounded-full border-2 border-white bg-gray-400"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 3: Review Curated Candidate Pool -->
			<div class="group relative h-[663px] overflow-hidden rounded-[20px] bg-[#f3f3f3]">
				<div class="absolute left-[30px] top-[423px] flex w-[510px] flex-col gap-[17px]">
					<h3 class="text-2xl font-bold leading-9 text-black">
						Review Curated Candidate Pool & Shortlist Candidates
					</h3>
					<p class="text-base leading-6 text-[#2a2c2c]/80">
						Browse applications, review candidate profiles, and shortlist the best fits.
					</p>
				</div>
				<div class="absolute left-[30px] top-[581px] flex items-center gap-2.5">
					<span class="text-base font-bold text-[#7502ff]">Build your Profile</span>
					<img src="/images/icons/arrow-right-alt.svg" alt="arrow" class="h-6 w-6" />
				</div>

				<!-- Mockup -->
				<div
					class="bg-[#E6D2FF]/12 absolute left-[57px] top-8 h-[376px] w-[967px] overflow-hidden rounded-[20px] border-t-[6px] border-[#7502ff]"
				>
					<div class="p-8 pl-10">
						<h4 class="mb-6 text-base font-extrabold text-[#2a2c2c]">Job Pool</h4>
						<div class="mb-2 flex w-[480px] gap-7 border-b border-[#2a2c2c]/30 pb-4">
							<button
								class="text-sm font-bold {activeCandidateTab === 'all'
									? "relative text-[#7502ff] after:absolute after:-bottom-[17px] after:left-0 after:h-[6px] after:w-full after:rounded-t-lg after:bg-[#7502ff] after:content-['']"
									: 'text-[#2a2c2c]/80'}"
								onclick={() => (activeCandidateTab = 'all')}
							>
								All Candidates
							</button>
							<button
								class="text-sm font-bold {activeCandidateTab === 'match'
									? "relative text-[#7502ff] after:absolute after:-bottom-[17px] after:left-0 after:h-[6px] after:w-full after:rounded-t-lg after:bg-[#7502ff] after:content-['']"
									: 'text-[#2a2c2c]/80'}"
								onclick={() => (activeCandidateTab = 'match')}
							>
								Job Match
							</button>
							<button
								class="text-sm font-bold {activeCandidateTab === 'applied'
									? "relative text-[#7502ff] after:absolute after:-bottom-[17px] after:left-0 after:h-[6px] after:w-full after:rounded-t-lg after:bg-[#7502ff] after:content-['']"
									: 'text-[#2a2c2c]/80'}"
								onclick={() => (activeCandidateTab = 'applied')}
							>
								Applied
							</button>
						</div>

						<div class="mt-6 flex w-[431px] flex-col gap-4">
							<!-- Candidate 1 -->
							<div class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
								<div class="flex items-center gap-6">
									<img
										src="/images/employers/candidate1.jpg"
										alt="Candidate"
										class="h-[54px] w-[78px] rounded-2xl object-cover"
									/>
									<div>
										<h5 class="text-base text-[#2a2c2c]">
											<span class="font-bold">James Bello</span> | Finance Expert
										</h5>
										<p class="mt-1 text-center text-xs text-[#2a2c2c]">3years Experience</p>
									</div>
								</div>
								<button
									class="rounded-xl bg-[#7502ff] px-6 py-1.5 text-[10px] text-white transition-colors hover:bg-[#6002d1]"
								>
									Hire
								</button>
							</div>

							<!-- Candidate 2 -->
							<div class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
								<div class="flex items-center gap-6">
									<img
										src="/images/employers/candidate2.jpg"
										alt="Candidate"
										class="h-[54px] w-[78px] rounded-2xl object-cover"
									/>
									<div>
										<h5 class="text-base text-[#2a2c2c]">
											<span class="font-bold">Sam Joseph</span> | Marketer
										</h5>
										<p class="mt-1 text-center text-xs text-[#2a2c2c]">5years Experience</p>
									</div>
								</div>
								<button
									class="rounded-xl bg-[#7502ff] px-6 py-1.5 text-[10px] text-white transition-colors hover:bg-[#6002d1]"
								>
									Hire
								</button>
							</div>

							<!-- Candidate 3 -->
							<div class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
								<div class="flex items-center gap-6">
									<img
										src="/images/employers/candidate3.jpg"
										alt="Candidate"
										class="h-[54px] w-[78px] rounded-2xl object-cover"
									/>
									<div>
										<h5 class="text-base text-[#2a2c2c]">
											<span class="font-bold">Sarah Smith</span> | Designer
										</h5>
										<p class="mt-1 text-center text-xs text-[#2a2c2c]">4years Experience</p>
									</div>
								</div>
								<button
									class="rounded-xl bg-[#7502ff] px-6 py-1.5 text-[10px] text-white transition-colors hover:bg-[#6002d1]"
								>
									Hire
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 4: Connect & Interview -->
			<div class="group relative h-[663px] overflow-hidden rounded-[20px] bg-[#f3f3f3]">
				<div class="absolute left-[30px] top-[453px] flex w-[510px] flex-col gap-[17px]">
					<h3 class="text-2xl font-bold leading-9 text-black">Connect & Interview</h3>
					<p class="text-base leading-6 text-[#2a2c2c]/80">
						Reach out to selected candidates, schedule interviews, and assess their potential.
					</p>
				</div>
				<div class="absolute left-[30px] top-[581px] flex items-center gap-2.5">
					<span class="text-base font-bold text-[#7502ff]">Get Started For free Today</span>
					<img src="/images/icons/arrow-right-alt.svg" alt="arrow" class="h-6 w-6" />
				</div>

				<!-- Mockup -->
				<div
					class="absolute left-12 top-[19px] h-[416px] w-[1149px] overflow-hidden rounded-[20px] border-l-[6px] border-[#7502ff] bg-neutral-100"
				>
					<!-- Sidebar -->
					<div
						class="absolute left-0 top-0 h-full w-[209px] border-r border-[#2a2c2c]/20 bg-white p-8"
					>
						<div class="mb-10">
							<img src="/images/logos/jobbeta-logo.svg" alt="Logo" class="h-8" />
						</div>
						<div class="space-y-6">
							<div class="flex items-center gap-5 text-sm text-[#2a2c2c]">
								<img src="/images/icons/dashboard.svg" alt="icon" class="h-5 w-5" />
								<span>Overview</span>
							</div>
							<div class="flex items-center gap-5 text-sm text-[#2a2c2c]">
								<img src="/images/icons/mail.svg" alt="icon" class="h-5 w-5" />
								<span>Inbox</span>
							</div>
							<div class="flex items-center gap-5 text-sm font-extrabold text-[#7502ff]">
								<img src="/images/icons/briefcase-purple.svg" alt="icon" class="h-5 w-5" />
								<span>Jobs</span>
							</div>
							<div class="flex items-center gap-5 text-sm text-[#2a2c2c]">
								<img src="/images/icons/calendar.svg" alt="icon" class="h-5 w-5" />
								<span>Events</span>
							</div>
							<div class="flex items-center gap-5 text-sm text-[#2a2c2c]">
								<img src="/images/icons/users.svg" alt="icon" class="h-5 w-5" />
								<span>People</span>
							</div>
						</div>
					</div>

					<!-- Main Content -->
					<div class="absolute left-[232px] top-[25px] w-[887px]">
						<div class="mb-8 flex items-center justify-between">
							<div>
								<h4 class="text-xl font-bold text-black">Role - Senior Project Manager</h4>
								<p class="text-xs text-[#2a2c2c]/70">Abuja, Nigeria- Full time</p>
							</div>
							<div class="flex items-center gap-4">
								<div
									class="flex w-[304px] items-center gap-2.5 rounded-2xl border border-neutral-300 px-3 py-3"
								>
									<img src="/images/icons/search.svg" alt="search" class="h-6 w-6" />
									<span class="text-xs text-[#2a2c2c]/70">search</span>
								</div>
								<div class="flex items-center gap-4">
									<img
										src="/images/employers/profile.jpg"
										alt="Profile"
										class="h-10 w-10 rounded-full border-[3px] border-white object-cover"
									/>
									<div
										class="flex h-10 w-10 items-center justify-center rounded-[20px] bg-neutral-200"
									>
										<img src="/images/icons/bell.svg" alt="notification" class="h-6 w-6" />
									</div>
								</div>
							</div>
						</div>

						<div class="mb-8 flex items-center gap-[60px]">
							<div class="flex items-center gap-[39px]">
								<span
									class="border-b-2 border-[#7502ff] pb-1 text-base font-semibold text-[#7502ff]"
									>Applied</span
								>
								<span class="text-base font-semibold text-black">Rejected</span>
								<span class="text-base font-semibold text-black">Replied</span>
								<span class="text-base font-bold text-black">Favourite</span>
							</div>
						</div>

						<!-- Candidate List Header -->
						<div class="mb-4 flex items-center gap-[108px] text-sm font-semibold text-[#2a2c2c]">
							<span>Candidates</span>
							<div class="flex items-center gap-2">
								<span>Status</span>
								<img src="/images/icons/chevron-down.svg" alt="down" class="h-5 w-5" />
							</div>
							<span>Socials</span>
							<span>Favourite</span>
						</div>

						<div class="space-y-4">
							<!-- List Item 1 -->
							<div class="flex items-center gap-[60px] border-t border-neutral-200 py-3">
								<div class="flex w-[150px] items-center gap-3">
									<img
										src="/images/employers/candidate1.jpg"
										alt="Jane"
										class="h-8 w-8 rounded-full border-[3px] border-black/25 object-cover"
									/>
									<span class="text-xs text-[#2a2c2c]/80">Jane Williams</span>
								</div>
								<div class="flex w-[120px] items-center gap-2 rounded-lg bg-green-50 px-1.5 py-1">
									<div class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
									<span class="text-[10px] font-bold text-[#2a2c2c]/80">Passed Interview</span>
								</div>
								<span class="w-[80px] text-xs font-extrabold text-[#2a2c2c]/80">Junior</span>
								<span class="text-xs font-extrabold text-[#2a2c2c]/80">80% Job Match</span>
							</div>

							<!-- List Item 2 -->
							<div class="flex items-center gap-[60px] border-t border-neutral-200 py-3">
								<div class="flex w-[150px] items-center gap-3">
									<img
										src="/images/employers/candidate2.jpg"
										alt="Jane"
										class="h-8 w-8 rounded-full border-[3px] border-black/25 object-cover"
									/>
									<span class="text-xs text-[#2a2c2c]/80">John Doe</span>
								</div>
								<div class="flex w-[120px] items-center gap-2 rounded-lg bg-red-50 px-1.5 py-1">
									<span class="text-[10px] font-bold text-red-500/80">Failed Interview</span>
								</div>
								<span class="w-[80px] text-xs font-extrabold text-[#2a2c2c]/80">Senior</span>
								<span class="text-xs font-extrabold text-[#2a2c2c]/80">40% Job Match</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 5: Hire with Confidence (Full Width) -->
			<div
				class="group relative col-span-1 h-[537px] overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:col-span-2"
			>
				<div class="absolute left-6 top-[290px] flex w-[510px] flex-col gap-[27px]">
					<div class="flex flex-col gap-[17px]">
						<h3 class="text-2xl font-bold leading-9 text-black">Hire with Confidence</h3>
						<p class="text-base leading-6 text-[#2a2c2c]/80">
							Choose the perfect candidate and make an offer!<br />
							Start hiring today – Sign up now!
						</p>
					</div>
					<div class="flex items-center gap-2.5">
						<span class="text-base font-bold text-[#7502ff]">Sign Up For Free</span>
						<img src="/images/icons/arrow-right-alt.svg" alt="arrow" class="h-6 w-6" />
					</div>
				</div>

				<!-- Mockup -->
				<div
					class="absolute left-[656px] top-[-59px] h-[437px] w-[474px] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg"
				>
					<div class="absolute left-[27px] top-9 flex items-center gap-3">
						<div class="h-4 w-4 rounded-full bg-green-600"></div>
						<span class="text-sm font-bold text-[#2a2c2c]">Todo List For Scheduled Interview</span>
					</div>

					<div class="absolute left-[35px] top-[79px] flex items-center gap-3">
						<div class="h-5 w-5 rounded-full border-[3px] border-black/80"></div>
						<div class="h-5 w-[358px] rounded-lg bg-neutral-200"></div>
					</div>

					<div class="absolute left-[35px] top-[157px] flex items-center gap-3">
						<div class="h-5 w-5 rounded-full border-[3px] border-black/80"></div>
						<span class="text-sm font-extrabold text-[#2a2c2c]/80"
							>Send Email to Candidates who Passed!</span
						>
					</div>

					<div
						class="absolute left-1/2 top-[194px] flex w-[401px] -translate-x-1/2 flex-col gap-[13px]"
					>
						<!-- Item 1 -->
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<img
									src="/images/employers/candidate1.jpg"
									alt="Jane"
									class="h-5 w-5 rounded-full border-[3px] border-black/25 object-cover"
								/>
								<div>
									<div class="text-xs text-[#2a2c2c]/80">Jane Williams</div>
									<div class="text-xs text-[#2a2c2c]">June 10, 2024 - 10 : 30 Am</div>
								</div>
							</div>
							<div class="rounded-[20px] bg-green-600 px-3 py-1">
								<span class="text-xs font-bold text-white">Offer Sent</span>
							</div>
						</div>

						<!-- Item 2 -->
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<img
									src="/images/employers/candidate2.jpg"
									alt="Adewale"
									class="h-5 w-5 rounded-full border-[3px] border-black/25 object-cover"
								/>
								<div>
									<div class="text-xs text-[#2a2c2c]/80">Adewale Anthony</div>
									<div class="text-xs text-[#2a2c2c]">June 10, 2024 - 10 : 30 Am</div>
								</div>
							</div>
							<div class="rounded-[20px] bg-green-600 px-3 py-1">
								<span class="text-xs font-bold text-white">Offer Sent</span>
							</div>
						</div>
					</div>

					<!-- Notification Popup -->
					<div
						class="absolute left-[135px] top-[200px] h-[355px] w-[425px] overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-2xl"
					>
						<div class="relative h-[99px] overflow-hidden bg-[#dde3e8]">
							<div
								class="absolute left-[386px] top-[98px] h-[79px] w-[79px] rounded-full bg-[#3296f8]"
							></div>
							<div
								class="absolute -left-6 -top-10 h-[79px] w-[79px] rounded-full bg-[#ffba16]"
							></div>
							<img
								src="/images/employers/confetti.png"
								alt="Celebration"
								class="absolute left-[114px] top-0 h-[239px] w-[196px] object-cover"
							/>
						</div>
						<div class="p-8 pt-6">
							<h4 class="mb-4 text-base font-extrabold text-[#2a2c2c]/80">
								6 New Job Offers sent!
							</h4>
							<p class="mb-6 text-sm leading-[21px] text-[#2a2c2c]">
								Congratulations!! You scored 94% in your Assessment with global communication
								Nigeria.<br /><br />
								Your Cv matches with the available position. Please check through the job description
								and payment to be sure it suits your needs totally. we look forward to having you on
								board!
							</p>
							<div class="flex gap-3">
								<button class="rounded-[20px] bg-green-600 px-3 py-1 text-xs font-bold text-white">
									Accept Offer
								</button>
								<button
									class="rounded-[20px] border border-neutral-300 px-3 py-1 text-xs font-bold text-[#110d21]"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
