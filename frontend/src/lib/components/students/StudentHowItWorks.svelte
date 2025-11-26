<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();
</script>

<section class="relative w-full bg-white py-20">
	<div class="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-4">
		<!-- Header -->
		<div class="flex flex-col items-center justify-center gap-0 text-center">
			<div
				class="relative font-['Geist-Medium',_sans-serif] text-xl font-medium leading-[30px] text-[rgba(42,44,44,0.80)]"
				style="letter-spacing: -0.005em"
			>
				How it works
			</div>
			<div
				class="relative self-stretch font-['Geist-Bold',_sans-serif] text-3xl font-bold leading-tight text-[#7502ff] md:text-[40px] md:leading-[60px]"
				style="letter-spacing: -0.005em"
			>
				Finding a Job has never been easier
			</div>
		</div>

		<!-- Grid Content -->
		<div class="grid w-full grid-cols-1 gap-[39px] lg:grid-cols-2">
			<!-- Card 1: Create Your Free Account -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] pb-10 pt-10 md:h-[663px]"
			>
				<!-- Visual Image Container -->
				<div class="relative mx-auto h-[300px] w-full max-w-[464px] md:h-[506px]">
					<div
						class="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg md:top-[-83px]"
					>
						<img
							class="absolute left-0 top-0 h-40 w-full object-cover md:h-60"
							src="/images/students/Frame 2085663821.png"
							alt="Create Account Visual"
						/>
						<!-- Form Mockup -->
						<div
							class="absolute left-1/2 top-[180px] flex w-[90%] -translate-x-1/2 flex-col items-start justify-start gap-5 md:top-[283px] md:w-[386px]"
						>
							<div class="flex flex-col items-start justify-start gap-2.5 self-stretch">
								<div class="text-base font-normal leading-6 text-[#2a2c2c]">Email</div>
								<div
									class="flex flex-row items-center justify-start gap-2.5 self-stretch rounded-2xl border border-solid border-[#E5E7EB] bg-[#f4f7fd] p-2.5 pl-3.5 pr-2.5 pt-3.5"
								>
									<div class="text-base font-normal leading-6 text-[#2a2c2c]">Enter Email</div>
								</div>
							</div>
							<div class="flex flex-col items-start justify-start gap-2.5 self-stretch">
								<div class="text-base font-normal leading-6 text-[#2a2c2c]">Password</div>
								<div
									class="flex flex-row items-center justify-start gap-2.5 self-stretch rounded-2xl border border-solid border-[#E5E7EB] bg-[#f4f7fd] p-2.5 pl-3.5 pr-2.5 pt-3.5"
								>
									<div class="flex-1 text-base font-normal leading-6 text-[#2a2c2c]">
										Enter Password
									</div>
									<img
										class="h-6 w-6 shrink-0"
										src="/icons/how-it-works/visibility0.svg"
										alt="Show"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Text Content -->
				<div
					class="mt-8 flex w-full flex-col items-start justify-start gap-[17px] px-6 md:absolute md:bottom-[120px] md:left-[30px] md:mt-0 md:w-[510px] md:px-0"
				>
					<div
						class="relative self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl font-bold leading-9 text-[#000000]"
						style="letter-spacing: -0.005em"
					>
						Create Your Free Account
					</div>
					<div
						class="relative w-full text-left font-['Geist-Regular',_sans-serif] text-base font-normal leading-6 text-[rgba(42,44,44,0.80)] md:w-[510px]"
						style="letter-spacing: -0.005em"
					>
						Sign up in minutes and build your profile to showcase your skills and career interests
						for personalized openings.
					</div>
				</div>
				<!-- Link -->
				<div
					class="mt-4 flex flex-row items-center justify-start gap-2.5 px-6 md:absolute md:bottom-[58px] md:left-[30px] md:mt-0 md:px-0"
				>
					<div
						class="relative text-left font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]"
						style="letter-spacing: -0.005em"
					>
						Build your Profile
					</div>
					<img
						class="h-6 w-6 shrink-0"
						src="/icons/how-it-works/arrow-right-alt0.svg"
						alt="Arrow"
					/>
				</div>
			</div>

			<!-- Card 2: Complete Your Profile -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] pb-10 pt-10 md:h-[663px]"
			>
				<!-- Visual Image Container -->
				<div class="relative mx-auto h-[300px] w-full max-w-[425px] md:h-[452px]">
					<div
						class="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg md:top-[-4px]"
					>
						<img
							class="absolute left-0 top-0 h-[110px] w-full object-cover"
							src="/images/students/Frame 2085664030.png"
							alt="Profile Visual"
						/>
						<!-- Profile Picture Overlay -->
						<img
							class="absolute left-1/2 top-[69px] h-[125px] w-[125px] -translate-x-1/2 rounded-[50px] border-[3px] border-white object-cover"
							src="/images/students/Frame 2085663327-1.png"
							alt="User"
						/>

						<!-- Profile Details Mockup -->
						<div
							class="absolute left-1/2 top-[175px] flex w-[90%] -translate-x-1/2 flex-col items-start justify-start gap-[21px] md:w-[360px]"
						>
							<div class="flex flex-row items-center justify-between self-stretch">
								<div class="flex flex-col items-start justify-center gap-8">
									<div
										class="flex items-center justify-center gap-2.5 rounded-md bg-[#E6D2FF] p-2.5"
									>
										<div class="text-sm font-normal leading-[21px] text-black">
											Complete Profile
										</div>
									</div>
								</div>
								<div
									class="flex items-center justify-center gap-2.5 rounded-[20px] bg-white p-2.5 shadow-sm"
								>
									<div class="text-sm font-normal leading-[21px] text-black">4/6</div>
								</div>
							</div>
							<!-- Progress Bar -->
							<div class="relative h-2 w-full rounded-lg bg-[#e6d2ff]">
								<div class="relative h-2 w-[75%] rounded-lg bg-[#7502ff]"></div>
							</div>
						</div>

						<!-- Summary & Preferences Placeholders -->
						<div class="absolute left-8 top-[261px] text-sm font-normal leading-[21px] text-black">
							Summary
						</div>
						<div class="absolute left-8 top-[298px] flex w-[80%] flex-col gap-[13px]">
							<div class="h-2 w-full rounded-lg bg-[rgba(217,217,217,0.25)]"></div>
							<div class="h-2 w-[75%] rounded-lg bg-[rgba(217,217,217,0.25)]"></div>
							<div class="h-2 w-full rounded-lg bg-[rgba(217,217,217,0.25)]"></div>
						</div>
						<div class="absolute left-8 top-[364px] text-sm font-normal leading-[21px] text-black">
							Account Preference
						</div>
						<div class="absolute left-8 top-[401px] flex w-[80%] flex-col gap-[13px]">
							<div class="h-2 w-full rounded-lg bg-[rgba(217,217,217,0.25)]"></div>
							<div class="h-2 w-[75%] rounded-lg bg-[rgba(217,217,217,0.25)]"></div>
						</div>
					</div>
				</div>

				<!-- Text Content -->
				<div
					class="mt-8 flex w-full flex-col items-start justify-start gap-8 px-6 md:absolute md:bottom-[100px] md:left-[30px] md:mt-0 md:w-[510px] md:px-0"
				>
					<div class="flex flex-col items-start justify-start gap-[17px] self-stretch">
						<div
							class="relative self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl font-bold leading-9 text-[#000000]"
							style="letter-spacing: -0.005em"
						>
							Complete Your Profile
						</div>
						<div
							class="relative w-full text-left font-['Geist-Regular',_sans-serif] text-base font-normal leading-6 text-[rgba(42,44,44,0.80)] md:w-[510px]"
							style="letter-spacing: -0.005em"
						>
							Highlight your skills, education, and experience to attract employers
						</div>
					</div>
					<!-- Link -->
					<div class="flex flex-row items-center justify-start gap-2.5">
						<div
							class="relative text-left font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]"
							style="letter-spacing: -0.005em"
						>
							Build your Profile
						</div>
						<img
							class="h-6 w-6 shrink-0"
							src="/icons/how-it-works/arrow-right-alt1.svg"
							alt="Arrow"
						/>
					</div>
				</div>
			</div>

			<!-- Card 3: Find Jobs That Fit You -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] pb-10 pt-10 md:h-[663px]"
			>
				<!-- Visuals (Floating Cards) -->
				<div class="relative h-[300px] w-full overflow-hidden md:h-[450px]">
					<!-- Card A: Top Employers (Rotated -10deg) -->
					<div
						class="absolute left-[10%] top-[50px] flex w-[280px] origin-top-left -rotate-[10.89deg] flex-row items-center justify-start gap-[18px] rounded-[20px] bg-[#7502ff] p-2.5 shadow-lg md:left-[36px] md:top-[75px] md:w-[341px]"
					>
						<div class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] bg-white">
							<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
								<img
									class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
									src="/icons/how-it-works/group5.svg"
									alt=""
								/>
								<img
									class="absolute left-0.5 top-0.5 h-auto"
									src="/icons/how-it-works/group6.svg"
									alt=""
								/>
							</div>
						</div>
						<div class="text-base font-bold leading-6 text-white">Top Employers</div>
					</div>

					<!-- Card B: AI Smart Job Matching (Rotated -0.7deg) -->
					<div
						class="absolute left-[10%] top-[110px] flex w-[280px] origin-top-left -rotate-[0.74deg] flex-row items-center justify-start gap-[18px] rounded-[20px] bg-white p-2.5 shadow-lg md:left-[34px] md:top-[139px] md:w-[341px]"
					>
						<div
							class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
						>
							<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
								<img
									class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
									src="/icons/how-it-works/group7.svg"
									alt=""
								/>
								<img
									class="absolute left-0.5 top-0.5 h-auto"
									src="/icons/how-it-works/group8.svg"
									alt=""
								/>
							</div>
						</div>
						<div class="text-base font-bold leading-6 text-[#7502ff]">Ai Smart Job Matching</div>
					</div>

					<!-- Card C: No spam (Rotated 9deg) -->
					<div
						class="absolute left-[10%] top-[170px] flex w-[280px] origin-top-left rotate-[9.26deg] flex-row items-center justify-start gap-[18px] rounded-[20px] bg-[#7502ff] p-2.5 shadow-lg md:left-[33px] md:top-[207px] md:w-[341px]"
					>
						<div class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] bg-white">
							<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
								<img
									class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
									src="/icons/how-it-works/group11.svg"
									alt=""
								/>
								<img
									class="absolute left-0.5 top-0.5 h-auto"
									src="/icons/how-it-works/group12.svg"
									alt=""
								/>
							</div>
						</div>
						<div class="text-base font-bold leading-6 text-white">No spam, real Jobs</div>
					</div>

					<!-- Card D: Internships (Rotated 25deg) -->
					<div
						class="absolute left-[10%] top-[230px] flex w-[280px] origin-top-left rotate-[25.56deg] flex-row items-center justify-start gap-[18px] rounded-[20px] bg-white p-2.5 shadow-lg md:left-[29px] md:top-[259px] md:w-[341px]"
					>
						<div
							class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
						>
							<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
								<img
									class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
									src="/icons/how-it-works/group9.svg"
									alt=""
								/>
								<img
									class="absolute left-0.5 top-0.5 h-auto"
									src="/icons/how-it-works/group10.svg"
									alt=""
								/>
							</div>
						</div>
						<div class="text-base font-bold leading-6 text-[#7502ff]">Internships</div>
					</div>

					<!-- Job Card 1 (Rotated 12deg) - Hidden on mobile to reduce clutter -->
					<div
						class="absolute left-[455px] top-[-132px] hidden h-[271px] w-[448px] origin-top-left rotate-[12.37deg] overflow-hidden rounded-2xl border border-[rgba(42,44,44,0.26)] bg-white shadow-md lg:block"
					>
						<!-- Content similar to Job Card 2 below -->
						<div
							class="absolute left-1/2 top-9 flex w-[376px] -translate-x-1/2 flex-row items-start justify-between"
						>
							<div class="flex flex-row items-start justify-start gap-3">
								<div
									class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
								>
									<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
										<img
											class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
											src="/icons/how-it-works/group15.svg"
											alt=""
										/>
										<img
											class="absolute left-0.5 top-0.5 h-auto"
											src="/icons/how-it-works/group16.svg"
											alt=""
										/>
									</div>
								</div>
								<div class="flex flex-col items-start justify-center gap-1">
									<div class="text-base font-bold leading-6 text-[#2a2c2c]">Software Engineer</div>
									<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.70)]">
										Siemen corporation
									</div>
									<div class="text-xs font-bold leading-[18px] text-[#2a2c2c]">Javascript, Php</div>
								</div>
							</div>
							<img
								class="h-6 w-6 shrink-0"
								src="/icons/how-it-works/bookmark-border1.svg"
								alt="Bookmark"
							/>
						</div>
						<div
							class="absolute left-[87px] top-[150px] flex w-[238px] flex-col items-start justify-start gap-5"
						>
							<div class="text-base font-normal leading-6 text-[#2a2c2c]">N40,000 / Month</div>
							<div class="flex flex-row items-center justify-start gap-[23px] self-stretch">
								<div class="flex items-center justify-center gap-2.5 border border-[#E5E7EB] p-2.5">
									<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.70)]">
										Internships
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Job Card 2 (Straight) - Hidden on mobile -->
					<div
						class="absolute left-[385px] top-[207px] hidden h-[271px] w-[448px] overflow-hidden rounded-2xl border border-[rgba(42,44,44,0.26)] bg-white shadow-md lg:block"
					>
						<div
							class="absolute left-1/2 top-9 flex w-[376px] -translate-x-1/2 flex-row items-start justify-between"
						>
							<div class="flex flex-row items-start justify-start gap-3">
								<div
									class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
								>
									<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
										<img
											class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
											src="/icons/how-it-works/group13.svg"
											alt=""
										/>
										<img
											class="absolute left-0.5 top-0.5 h-auto"
											src="/icons/how-it-works/group14.svg"
											alt=""
										/>
									</div>
								</div>
								<div class="flex flex-col items-start justify-center gap-1">
									<div class="text-base font-bold leading-6 text-[#2a2c2c]">Software Engineer</div>
									<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.70)]">
										Siemen corporation
									</div>
									<div class="text-xs font-bold leading-[18px] text-[#2a2c2c]">Javascript, Php</div>
								</div>
							</div>
							<img
								class="h-6 w-6 shrink-0"
								src="/icons/how-it-works/bookmark-border0.svg"
								alt="Bookmark"
							/>
						</div>
						<div
							class="absolute left-[87px] top-[150px] flex w-[238px] flex-col items-start justify-start gap-5"
						>
							<div class="text-base font-normal leading-6 text-[#2a2c2c]">N40,000 / Month</div>
							<div class="flex flex-row items-center justify-start gap-[23px] self-stretch">
								<div class="flex items-center justify-center gap-2.5 border border-[#E5E7EB] p-2.5">
									<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.70)]">
										Part Time
									</div>
								</div>
								<div class="flex items-center justify-center gap-2.5 border border-[#E5E7EB] p-2.5">
									<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.70)]">
										100,00 - 200,000
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Text Content -->
				<div
					class="mt-8 flex w-full flex-col items-start justify-start gap-[17px] px-6 md:absolute md:bottom-[120px] md:left-[30px] md:mt-0 md:w-[510px] md:px-0"
				>
					<div
						class="relative self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl font-bold leading-9 text-[#000000]"
						style="letter-spacing: -0.005em"
					>
						Find Jobs That Fit You
					</div>
					<div
						class="relative w-full text-left font-['Geist-Regular',_sans-serif] text-base font-normal leading-6 text-[rgba(42,44,44,0.80)] md:w-[510px]"
						style="letter-spacing: -0.005em"
					>
						Search for internships, part-time jobs, and full-time gigs that match your goals.
					</div>
				</div>
				<!-- Link -->
				<div
					class="mt-4 flex flex-row items-center justify-start gap-2.5 px-6 md:absolute md:bottom-[58px] md:left-[30px] md:mt-0 md:px-0"
				>
					<div
						class="relative text-left font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]"
						style="letter-spacing: -0.005em"
					>
						Build your Profile
					</div>
					<img
						class="h-6 w-6 shrink-0"
						src="/icons/how-it-works/arrow-right-alt2.svg"
						alt="Arrow"
					/>
				</div>
			</div>

			<!-- Card 4: Apply & Connect with Employers -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] pb-10 pt-10 md:h-[663px]"
			>
				<!-- Visuals (Notifications) -->
				<div class="relative mx-auto h-[300px] w-full max-w-[448px] md:h-[450px]">
					<div
						class="absolute left-1/2 top-0 h-[387px] w-full max-w-[448px] -translate-x-1/2 overflow-hidden rounded-2xl border-t-4 border-[#7502ff] bg-white shadow-md md:left-[50px] md:top-[55px] md:translate-x-0"
					>
						<div
							class="absolute left-[30px] top-8 flex w-[238px] flex-col items-start justify-start gap-5"
						>
							<div class="text-base font-normal leading-6 text-[#2a2c2c]">
								Today<br />1 New Notification
							</div>
						</div>
						<div class="absolute left-[30px] top-[113px] flex w-[80%] flex-col gap-4 md:w-[332px]">
							<!-- Notification 1 -->
							<div class="flex flex-row items-end justify-start gap-3">
								<div
									class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#E5E7EB] bg-white"
								>
									<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
										<img
											class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
											src="/icons/how-it-works/group20.svg"
											alt=""
										/>
										<img
											class="absolute left-0.5 top-0.5 h-auto"
											src="/icons/how-it-works/group21.svg"
											alt=""
										/>
									</div>
								</div>
								<div class="flex flex-col items-start justify-start gap-1">
									<div class="text-sm font-normal leading-[21px] text-black">
										Siemen Corporation Uploads New job
									</div>
									<div class="text-xs font-normal leading-[18px] text-[rgba(42,44,44,0.70)]">
										June 20. 2021 . 10:20 PM
									</div>
								</div>
							</div>
							<!-- Notification 2 -->
							<div class="flex flex-row items-end justify-start gap-3">
								<div
									class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#E5E7EB] bg-white"
								>
									<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
										<img
											class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
											src="/icons/how-it-works/group22.svg"
											alt=""
										/>
										<img
											class="absolute left-0.5 top-0.5 h-auto"
											src="/icons/how-it-works/group23.svg"
											alt=""
										/>
									</div>
								</div>
								<div class="flex flex-col items-start justify-start gap-1">
									<div class="text-sm font-normal leading-[21px] text-black">
										You have been invited for Interview
									</div>
									<div class="text-xs font-normal leading-[18px] text-[rgba(42,44,44,0.70)]">
										June 23. 2021 . 3:00:20 PM
									</div>
								</div>
							</div>
							<!-- Notification 3 -->
							<div class="flex flex-row items-end justify-start gap-3">
								<div
									class="relative h-12 w-12 shrink-0 overflow-hidden rounded-[50px] border border-[#E5E7EB] bg-white"
								>
									<div class="absolute left-[11px] top-[10px] h-6 w-6 overflow-hidden">
										<img
											class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
											src="/icons/how-it-works/group24.svg"
											alt=""
										/>
										<img
											class="absolute left-0.5 top-0.5 h-auto"
											src="/icons/how-it-works/group25.svg"
											alt=""
										/>
									</div>
								</div>
								<div class="flex flex-col items-start justify-start gap-1">
									<div class="text-sm font-normal leading-[21px] text-black">
										You have been invited for Second Interview
									</div>
									<div class="text-xs font-normal leading-[18px] text-[rgba(42,44,44,0.70)]">
										June 26. 2021 . 3:00:20 PM
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Text Content -->
				<div
					class="mt-8 flex w-full flex-col items-start justify-start gap-[17px] px-6 md:absolute md:bottom-[120px] md:left-[30px] md:mt-0 md:w-[510px] md:px-0"
				>
					<div
						class="relative self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl font-bold leading-9 text-[#000000]"
						style="letter-spacing: -0.005em"
					>
						Apply & Connect with Employers
					</div>
					<div
						class="relative w-full text-left font-['Geist-Regular',_sans-serif] text-base font-normal leading-6 text-[rgba(42,44,44,0.80)] md:w-[510px]"
						style="letter-spacing: -0.005em"
					>
						Send your applications and chat directly with recruiters on the platform.
					</div>
				</div>
				<!-- Link -->
				<div
					class="mt-4 flex flex-row items-center justify-start gap-2.5 px-6 md:absolute md:bottom-[58px] md:left-[30px] md:mt-0 md:px-0"
				>
					<div
						class="relative text-left font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]"
						style="letter-spacing: -0.005em"
					>
						Get Started For free Today
					</div>
					<img
						class="h-6 w-6 shrink-0"
						src="/icons/how-it-works/arrow-right-alt3.svg"
						alt="Arrow"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
