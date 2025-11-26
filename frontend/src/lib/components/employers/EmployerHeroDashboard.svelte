<script>
	import { base } from '$app/paths';

	const sidebarItems = [
		{ icon: 'account-balance0.svg', label: 'Overview', active: true },
		{ icon: 'email0.svg', label: 'Inbox' },
		{ icon: 'group0.svg', label: 'Jobs' }, // Note: group0 might need checking, using generic for now
		{ icon: 'access-time0.svg', label: 'Events' },
		{ icon: 'patient-list0.svg', label: 'People' },
		{ icon: 'school0.svg', label: 'Career Center' },
		{ icon: 'library-books0.svg', label: 'Resources' }
	];

	const bottomSidebarItems = [
		{ icon: 'settings0.svg', label: 'Preference' },
		{ icon: 'security0.svg', label: 'Security' },
		{ icon: 'logout0.svg', label: 'Logout' }
	];
</script>

<div class="relative mx-auto aspect-[1149/538] h-auto w-full max-w-[1149px] text-left">
	<!-- Main Container -->
	<div
		class="absolute inset-0 flex overflow-hidden rounded-[20px] border-[5px] border-[#2a2c2c]/15 bg-neutral-50 shadow-lg"
	>
		<!-- Sidebar -->
		<div class="flex w-[209px] shrink-0 flex-col border-r border-[#2a2c2c]/20 bg-white">
			<div class="p-8 pl-12">
				<img src="{base}/images/employers/layer-21.svg" alt="JobBeta" class="h-8" />
			</div>

			<div class="mt-4 flex flex-1 flex-col gap-8 pl-8">
				<!-- Main Menu -->
				<div class="flex flex-col gap-5">
					{#each sidebarItems as item}
						<div class="group flex cursor-pointer items-center gap-5">
							<img
								src="{base}/icons/employers/{item.icon}"
								alt=""
								class="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100"
							/>
							<span
								class="font-raleway text-sm font-bold text-[#2a2c2c] {item.active
									? 'text-[#7502ff]'
									: ''}">{item.label}</span
							>
						</div>
					{/each}
				</div>

				<!-- Bottom Menu -->
				<div class="mb-8 mt-auto flex flex-col gap-4">
					{#each bottomSidebarItems as item}
						<div class="group flex cursor-pointer items-center gap-5">
							<img
								src="{base}/icons/employers/{item.icon}"
								alt=""
								class="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100"
							/>
							<span class="font-raleway text-sm font-normal text-[#2a2c2c]">{item.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Main Content -->
		<div class="relative flex-1 bg-white">
			<!-- Header -->
			<div class="flex items-start justify-between border-b border-neutral-200 p-6">
				<div>
					<h2 class="font-raleway text-xl font-bold text-black">Cherryhood Recruitment Firm</h2>
					<p class="font-raleway text-xs text-[#2a2c2c]/70">
						Here is your Company's current status
					</p>
				</div>
				<div class="flex items-center gap-4">
					<div
						class="flex w-[300px] items-center gap-2 rounded-2xl border border-neutral-300 px-3 py-2"
					>
						<img src="{base}/icons/employers/search0.svg" alt="" class="h-6 w-6 opacity-50" />
						<span class="font-raleway text-xs text-[#2a2c2c]/70">search</span>
					</div>
					<div class="flex items-center gap-4">
						<img
							src="{base}/images/employers/frame-20856633270.png"
							alt="Profile"
							class="h-10 w-10 rounded-full border-[3px] border-white shadow-sm"
						/>
						<div class="flex h-10 w-10 items-center justify-center rounded-[20px] bg-neutral-200">
							<img src="{base}/icons/employers/notifications0.svg" alt="" class="h-6 w-6" />
						</div>
					</div>
				</div>
			</div>

			<!-- Sub Header -->
			<div class="flex items-center justify-between px-6 py-4">
				<h3 class="font-raleway text-base font-bold text-black">Overview</h3>
				<div class="flex items-center gap-6">
					<div class="flex cursor-pointer items-center gap-2">
						<img src="{base}/icons/employers/share0.svg" alt="" class="h-5 w-5" />
						<span class="font-raleway text-xs text-[#2a2c2c]/90">Share</span>
					</div>
					<div class="flex cursor-pointer items-center gap-2">
						<img src="{base}/icons/employers/settings1.svg" alt="" class="h-5 w-5" />
						<span class="font-raleway text-xs text-[#2a2c2c]/90">Settings</span>
					</div>
					<div class="flex cursor-pointer items-center gap-2">
						<img src="{base}/icons/employers/import-export0.svg" alt="" class="h-5 w-5" />
						<span class="font-raleway text-xs text-[#2a2c2c]/90">Import/export</span>
						<img src="{base}/icons/employers/keyboard-arrow-down0.svg" alt="" class="h-5 w-5" />
					</div>
				</div>
			</div>

			<!-- Dashboard Grid -->
			<div class="grid grid-cols-12 gap-8 px-6">
				<!-- Left Column (Interview & Vacancies) -->
				<div class="col-span-8 flex flex-col gap-8">
					<!-- Interview Card -->
					<div class="rounded-2xl border border-neutral-200 p-4">
						<div class="mb-4 flex items-center gap-3">
							<img src="{base}/icons/employers/videocam0.svg" alt="" class="h-5 w-5" />
							<span class="font-raleway text-base font-bold text-black">Interview</span>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div
									class="bg-secondary/10 flex h-10 w-10 items-center justify-center rounded-full"
								>
									<img src="{base}/icons/employers/group2.svg" alt="" class="h-6 w-6" />
								</div>
								<div>
									<div class="font-raleway text-sm font-bold text-[#2a2c2c]">Francis Joseph</div>
									<div class="font-raleway text-xs text-[#2a2c2c]">Full stack developer</div>
								</div>
							</div>
							<div>
								<div class="font-raleway text-xs text-[#2a2c2c]">Time</div>
								<div class="font-raleway text-sm font-bold text-[#2a2c2c]">
									10 : 30 Am - 11:30 Am
								</div>
							</div>
							<div>
								<div class="font-raleway text-xs text-[#2a2c2c]">Company</div>
								<div class="flex items-center gap-2">
									<img src="{base}/icons/employers/share2.svg" alt="" class="h-5 w-5" />
									<span class="font-raleway text-sm font-bold text-[#2a2c2c]">Wildfire</span>
								</div>
							</div>
							<div>
								<div class="font-raleway text-xs text-[#2a2c2c]">Attendees</div>
								<div class="flex items-center gap-2">
									<div class="flex -space-x-2">
										<img
											src="{base}/images/employers/ellipse-1780.png"
											class="h-8 w-8 rounded-full border-2 border-white"
											alt=""
										/>
										<img
											src="{base}/images/employers/ellipse-1770.png"
											class="h-8 w-8 rounded-full border-2 border-white"
											alt=""
										/>
									</div>
									<span class="font-raleway text-sm font-bold text-[#2a2c2c]">+5 people</span>
								</div>
							</div>
						</div>
						<div class="mt-4 flex gap-3">
							<button class="bg-primary rounded-2xl px-4 py-2 text-sm font-bold text-white"
								>View interview Details</button
							>
							<button class="bg-primary rounded-2xl px-4 py-2 text-base font-bold text-white"
								>Join Live session</button
							>
						</div>
					</div>

					<!-- Current Vacancies -->
					<div class="flex items-start gap-8">
						<div class="flex-1">
							<div class="mb-4 flex items-center gap-3">
								<img src="{base}/icons/employers/work-outline0.svg" alt="" class="h-5 w-5" />
								<span class="font-raleway text-base font-bold text-black">Current Vacancies</span>
							</div>
							<div class="flex flex-col gap-4">
								{#each [1, 2] as i}
									<div class="flex items-center gap-3">
										<img
											src="{base}/images/employers/image-63{i - 1}.png"
											alt=""
											class="h-[60px] w-[60px] rounded-full object-cover"
										/>
										<div>
											<div class="font-raleway text-sm font-bold text-[#2a2c2c]/80">
												Web designer
											</div>
											<div class="flex gap-3">
												<div class="flex items-center gap-1">
													<img
														src="{base}/icons/employers/work-outline{i}.svg"
														alt=""
														class="h-4 w-4"
													/>
													<span class="text-xs text-neutral-500">Apple</span>
												</div>
												<div class="flex items-center gap-1">
													<img
														src="{base}/icons/employers/home-work{i - 1}.svg"
														alt=""
														class="h-4 w-4"
													/>
													<span class="text-xs text-neutral-500">$ positions</span>
												</div>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>
						<!-- Chart placeholder -->
						<div class="relative h-24 w-[200px] overflow-hidden rounded-lg bg-neutral-100">
							<div class="absolute left-4 top-4 flex flex-col gap-2">
								<div class="h-6 w-20 rounded-full bg-[#7502ff]"></div>
								<div class="h-6 w-16 rounded-full bg-[#110d21]"></div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column (Job Match & Pending) -->
				<div class="col-span-4 flex flex-col gap-6">
					<!-- Job Match -->
					<div>
						<div class="mb-4 flex items-center gap-3">
							<img src="{base}/icons/employers/home-work3.svg" alt="" class="h-5 w-5" />
							<span class="font-raleway text-base font-bold text-black">Job Match</span>
						</div>
						<div class="mb-2 flex items-center gap-4">
							<img
								src="{base}/images/employers/ellipse-1771.png"
								alt=""
								class="h-[50px] w-[50px] rounded-full border-2 border-white object-cover shadow-sm"
							/>
							<span class="font-raleway text-xs font-bold text-[#2a2c2c]/80">Jane Williams</span>
						</div>
						<div class="mb-2 flex items-center gap-2">
							<div class="h-3 w-3 rounded-full bg-[#dfb400]"></div>
							<span class="font-raleway text-xs font-bold text-[#2a2c2c]/80">Lagos, Nigeria</span>
						</div>
						<div class="font-raleway text-xs font-extrabold text-[#2a2c2c]/80">Junior</div>
						<div class="font-raleway text-xs font-extrabold text-[#2a2c2c]/80">80% Job Match</div>
					</div>

					<!-- Pending Task -->
					<div>
						<div class="mb-2 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
								<img src="{base}/icons/employers/group5.svg" alt="" class="h-6 w-6" />
							</div>
							<span class="font-raleway text-xs font-bold text-[#2a2c2c]/80"
								>Induction for 100level Student</span
							>
						</div>
						<div class="mb-2 flex items-center gap-2">
							<div class="h-3 w-3 rounded-full bg-[#3f8b4f]"></div>
							<span class="font-raleway text-xs font-bold text-[#2a2c2c]/80">Pending</span>
						</div>
						<div class="font-raleway text-xs font-extrabold text-[#2a2c2c]/80">60% done</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.font-raleway {
		font-family: 'Raleway', sans-serif;
	}
</style>
