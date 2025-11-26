<script lang="ts">
	// Hero Section Component
</script>

<svelte:head>
	<title>About Us - JobBeta</title>
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section -->
	<section class="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
		<div class="page-container">
			<!-- Text Content - Centered -->
			<div class="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
				<h1 class="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.1] text-secondary max-w-[90%] sm:max-w-3xl md:max-w-4xl px-2 sm:px-0">
					We simplify the path to a better, more attainable career.
				</h1>
				<p class="font-geist text-sm sm:text-base md:text-lg font-normal leading-relaxed text-text-secondary max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-2 sm:px-0">
					At JobBeta, we're committed to bridging the gap between employers and talented individuals by creating meaningful connections that lead to real opportunities.
				</p>
			</div>

			<!-- Hero Image -->
			<div class="w-full  mx-auto">
				<div class="w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[16/7] lg:aspect-[1238/536] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-md md:shadow-lg">
					<img
						src="/images/Frame%202085663570.jpg"
						alt="Business professionals collaborating"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- About JobBeta Section -->
	<section class="relative w-full bg-[#EAECF0] py-12 sm:py-16 md:py-20 lg:py-[82px]">
		<div class="page-container">
			<!-- Section Header -->
			<div class="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12 lg:mb-[66px]">
				<h2 class="font-geist text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold leading-tight sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[-0.16px] text-[#110D21]">
					About JobBeta
				</h2>
				<p class="font-geist text-base sm:text-lg md:text-xl lg:text-[24px] font-normal leading-relaxed sm:leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-[-0.12px] text-[#596770] max-w-full lg:max-w-[1229px]">
					At JobBeta, we're committed to bridging the gap between employers and talented individuals by creating meaningful connections that lead to real opportunities. Our platform streamlines the hiring process, making it easier for companies to discover skilled candidates, and for individuals to find internships, jobs, and career resources that match their goals.
				</p>
			</div>

			<!-- Cards Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-[33px]">
				<!-- Card 1: We are people centric (White) -->
				<div class="bg-white rounded-2xl lg:rounded-[16px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:h-[338px] relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-0">
					<!-- Icon -->
					<div class="absolute top-6 sm:top-8 md:top-10 lg:top-[42px] right-6 sm:right-8 md:right-10 lg:right-[45px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]">
						<img src="/icons/workspace-premium-dark.svg" alt="" class="w-full h-full" />
					</div>

					<!-- Content -->
					<div class="lg:absolute lg:top-[92px] lg:left-[46px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 pr-16 sm:pr-20 md:pr-24 lg:pr-0 lg:w-[506px]">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[-0.16px] text-[#2A2C2C]">
							We are people centric
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed sm:leading-[26px] md:leading-[28px] lg:leading-[30px] tracking-[-0.1px] text-[rgba(42,44,44,0.7)]">
							We Prioritizes individual goals and strengths to match candidates with roles that align with their career aspirations—whether entry-level or professional.
						</p>
					</div>
				</div>

				<!-- Card 2: Talent-Centric Approach (Purple) -->
				<div class="bg-[#7502FF] rounded-2xl lg:rounded-[16px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:h-[338px] relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-0">
					<!-- Icon -->
					<div class="absolute top-6 sm:top-7 md:top-8 lg:top-[28px] right-6 sm:right-8 md:right-10 lg:right-[45px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]">
						<img src="/icons/workspace-premium-light.svg" alt="" class="w-full h-full" />
					</div>

					<!-- Content -->
					<div class="lg:absolute lg:top-[92px] lg:left-[46px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 text-white pr-16 sm:pr-20 md:pr-24 lg:pr-0 lg:w-[506px]">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[-0.16px]">
							Talent-Centric Approach
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed sm:leading-[26px] md:leading-[28px] lg:leading-[30px] tracking-[-0.1px]">
							Goes beyond job matching by offering resume guidance, interview prep, and career advice to help individuals grow and succeed long term.
						</p>
					</div>
				</div>

				<!-- Card 3: Strong Employer Network (Purple) -->
				<div class="bg-[#7502FF] rounded-2xl lg:rounded-[16px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:h-[338px] relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-0">
					<!-- Icon -->
					<div class="absolute top-6 sm:top-7 md:top-8 lg:top-[32px] right-6 sm:right-8 md:right-10 lg:right-[45px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]">
						<img src="/icons/workspace-premium-light.svg" alt="" class="w-full h-full" />
					</div>

					<!-- Content -->
					<div class="lg:absolute lg:top-[92px] lg:left-[46px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 pr-16 sm:pr-20 md:pr-24 lg:pr-0 lg:w-[506px]">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[-0.16px] text-white">
							Strong Employer Network
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed sm:leading-[26px] md:leading-[28px] lg:leading-[30px] tracking-[-0.1px] text-[rgba(255,255,255,0.8)]">
							JobBeta helps Maintains active relationships with reputable companies across various industries, offering access to diverse and verified opportunities
						</p>
					</div>
				</div>

				<!-- Card 4: Versatile Placement Services (White) -->
				<div class="bg-white rounded-2xl lg:rounded-[16px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:h-[338px] relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-0">
					<!-- Icon -->
					<div class="absolute top-6 sm:top-7 md:top-8 lg:top-[28px] right-6 sm:right-8 md:right-10 lg:right-[35px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]">
						<img src="/icons/workspace-premium-dark.svg" alt="" class="w-full h-full" />
					</div>

					<!-- Content -->
					<div class="lg:absolute lg:top-[76px] lg:left-[46px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 pr-16 sm:pr-20 md:pr-24 lg:pr-0 lg:w-[506px]">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[-0.16px] text-[#2A2C2C]">
							Versatile Placement Services
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed sm:leading-[26px] md:leading-[28px] lg:leading-[30px] tracking-[-0.1px] text-[rgba(42,44,44,0.7)]">
							We Efficiently connects both students and professionals to full-time positions, internships, and remote opportunities—ensuring flexibility and fit for every stage.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Vision Section -->
	<section class="relative w-full bg-[#7502FF] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
		<div class="page-container">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
				<!-- Left Content -->
				<div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-white">
					<h2 class="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1]">
						Our Vision
					</h2>

					<p class="font-geist text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[32px] max-w-[90%] sm:max-w-full">
						We have successfully partnered with over 120 global companies and these companies have been proved to be reliable since then.
					</p>

					<!-- Values List -->
					<div class="flex flex-col gap-4 sm:gap-5 md:gap-6">
						<!-- Trust -->
						<div class="flex items-center gap-3 sm:gap-4">
							<div class="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
								<svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<span class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium leading-tight">Trust</span>
						</div>

						<!-- Innovation -->
						<div class="flex items-center gap-3 sm:gap-4">
							<div class="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
								<svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<span class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium leading-tight">Innovation</span>
						</div>

						<!-- Growth -->
						<div class="flex items-center gap-3 sm:gap-4">
							<div class="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
								<svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<span class="font-geist text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium leading-tight">Growth</span>
						</div>
					</div>
				</div>

				<!-- Right Content - World Map with Profile Images -->
				<div class="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
					<!-- Dotted Circle Background with Lines -->
					<div class="absolute inset-0 flex items-center justify-center">
						<!-- Main dashed circle -->
						<div class="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border-2 border-dashed border-white/30 relative">
							<!-- Connection lines -->
							<img src="/images/Line 33.svg" alt="" class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 110%; height: 110%; opacity: 0.4;" />
							<img src="/images/Line 37.svg" alt="" class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 110%; height: 110%; opacity: 0.4;" />
						</div>
					</div>

					<!-- World Map SVG - Dotted Style -->
					<div class="absolute inset-0 flex items-center justify-center">
						<img src="/images/mapbase.svg" alt="World Map" class="w-full h-auto max-w-[400px] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[600px] opacity-90" />
					</div>

					<!-- Profile Images Group SVG -->
					<div class="absolute inset-0 flex items-center justify-center">
						<img src="/images/Group 1321314384.svg" alt="Global Team" class="w-full h-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] object-contain" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Partners Section -->
	<section class="relative w-full bg-[#EAECF0] py-12 sm:py-16 md:py-20 lg:py-24">
		<div class="page-container">
			<!-- Section Header -->
			<div class="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
				<h2 class="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1] text-[#110D21]">
					Our Partners
				</h2>
				<p class="font-geist text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-[#596770] max-w-full lg:max-w-[900px]">
					These are institutions we have partnered with to advance education systems and empower students with the tools, guidance, and opportunities needed for successful career development and long-term growth across Africa.
				</p>
			</div>

			<!-- Infinite Scrolling Partner Logos -->
			<div class="relative overflow-hidden">
				<div class="flex animate-scroll">
					<!-- First set of logos -->
					<div class="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 shrink-0">
						<!-- MosaiT -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/MosafT.svg" alt="MosaiT" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- jetBlue -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/jetblue.svg" alt="jetBlue" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Prodigy -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/prodigy_education_logo.svg.svg" alt="Prodigy" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Educa Studio -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/educa.svg" alt="Educa Studio" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Educación 3.0 -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/educacion.svg" alt="Educación 3.0" class="max-h-full max-w-full object-contain" />
						</div>
					</div>

					<!-- Duplicate set for seamless loop -->
					<div class="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 shrink-0">
						<!-- MosaiT -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/MosafT.svg" alt="MosaiT" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- jetBlue -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/jetblue.svg" alt="jetBlue" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Prodigy -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/prodigy_education_logo.svg.svg" alt="Prodigy" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Educa Studio -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/educa.svg" alt="Educa Studio" class="max-h-full max-w-full object-contain" />
						</div>

						<!-- Educación 3.0 -->
						<div class="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56">
							<img src="/icons/educacion.svg" alt="Educación 3.0" class="max-h-full max-w-full object-contain" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- The Team Section -->
	<section class="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
		<div class="page-container">
			<!-- Section Header -->
			<div class="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
				<h2 class="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1] text-[#110D21]">
					The Team
				</h2>
				<p class="font-geist text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-[#596770] max-w-full sm:max-w-2xl md:max-w-3xl">
					Our goal is to create meaningful connections, support career growth, and deliver real value to both talent and employers—every step of the way.
				</p>
			</div>

			<!-- Team Members Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
				<!-- Team Member 1 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Anthony-Akinniyi.png" alt="Anthony Akinniyi" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Anthony Akinniyi
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							Founder/CEO, JobBeta
						</p>
					</div>
				</div>

				<!-- Team Member 2 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Olajire-Aiyedun.png" alt="Olajire Aiyedun" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Olajire Aiyedun
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							CTOII
						</p>
					</div>
				</div>

				<!-- Team Member 3 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Ebunoluwa-Shadeko.png" alt="Ebunoluwa Shadeko" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Ebunoluwa Shadeko
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							CTOII
						</p>
					</div>
				</div>

				<!-- Team Member 4 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Janet-Anthony.png" alt="Janet Anthony" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Janet Anthony
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							CTOII
						</p>
					</div>
				</div>

				<!-- Team Member 5 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Janet-Anthony.png" alt="Janet Anthony" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Janet Anthony
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							CTOII
						</p>
					</div>
				</div>

				<!-- Team Member 6 -->
				<div class="flex flex-col items-center text-center gap-4 sm:gap-5">
					<div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
						<img src="/images/Janet-Anthony.png" alt="Janet Anthony" class="w-full h-full object-cover" />
					</div>
					<div class="flex flex-col gap-1 sm:gap-2">
						<h3 class="font-geist text-xl sm:text-2xl md:text-[28px] font-bold text-[#110D21]">
							Janet Anthony
						</h3>
						<p class="font-geist text-sm sm:text-base md:text-lg text-[#596770]">
							CTOII
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Story Section -->
	<section class="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-[91px]">
		<div class="page-container">
			<div class="relative bg-[#7502FF] overflow-hidden rounded-[60px] sm:rounded-[100px] md:rounded-[150px] lg:rounded-[200px] h-[400px] sm:h-[450px] md:h-[520px] lg:h-[598px]">
				<!-- Background Pattern (5% opacity) -->
				<div class="absolute inset-0 opacity-5 pointer-events-none rounded-[60px] sm:rounded-[100px] md:rounded-[150px] lg:rounded-[200px]">
					<img src="/images/Frame 2085663608.png" alt="" class="w-full h-full object-cover rounded-[60px] sm:rounded-[100px] md:rounded-[150px] lg:rounded-[200px]" />
				</div>

				<!-- Large White Circle Border -->
				<div class="absolute hidden lg:block border border-white rounded-full w-[302px] h-[302px] left-[853px] top-[116px]"></div>

				<!-- Small Decorative Circles -->
				<div class="absolute hidden lg:block bg-[#c5c5c5] rounded-full w-[20px] h-[20px] left-[945px] top-[116px]"></div>
				<div class="absolute hidden lg:block bg-[#c5c5c5] rounded-full w-[20px] h-[20px] left-[1203px] top-[371px]"></div>

				<!-- Rotated Connecting Lines -->
				<div class="absolute hidden lg:flex items-center justify-center left-[991px] top-[30px]" style="transform: rotate(329.995deg);">
					<div class="bg-[#c5c5c5] h-[20px] rounded-[16px] w-[42.427px]"></div>
				</div>
				<div class="absolute hidden lg:flex items-center justify-center left-[883px] top-[440px]" style="transform: rotate(329.995deg);">
					<div class="bg-[#c5c5c5] h-[20px] rounded-[16px] w-[42.427px]"></div>
				</div>

				<!-- Wired Cube - Rotated 299.146deg -->
				<div class="absolute top-[16px] right-[36px] sm:right-[50px] md:right-[60px] lg:left-[963px] lg:top-[16px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[217.959px] lg:h-[217.959px]" style="transform: rotate(299.146deg);">
					<img src="/images/wired cube 2.svg" alt="" class="w-full h-full object-contain" />
				</div>

				<!-- Cone - Rotated 48.805deg -->
				<div class="absolute top-[180px] right-[150px] sm:right-[180px] md:right-[200px] lg:left-[876.73px] lg:top-[222.73px] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-[239px] lg:h-[239px]" style="transform: rotate(48.805deg);">
					<img src="/images/cone3.svg" alt="" class="w-full h-full object-contain" />
				</div>

				<!-- Ellipse/Sphere -->
				<div class="absolute top-[140px] right-[120px] sm:right-[140px] md:right-[160px] lg:left-[783px] lg:top-[161px] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[221px] lg:h-[221px]">
					<img src="/images/ellipse4.svg" alt="" class="w-full h-full object-contain" />
				</div>

				<!-- Content Container -->
				<div class="absolute inset-0 px-6 sm:px-10 md:px-16 lg:px-[134px] py-8 sm:py-12 md:py-16 lg:py-[151px] z-10">
					<!-- Section Header -->
					<div class="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] mb-8 sm:mb-10 md:mb-12 lg:mb-[44px] max-w-full lg:max-w-[602px]">
						<h2 class="font-geist text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-bold leading-tight sm:leading-[1.2] md:leading-[1.15] lg:leading-[54px] tracking-[-0.24px] text-white">
							Our Story
						</h2>
						<p class="font-geist text-base sm:text-lg md:text-xl lg:text-[24px] font-normal leading-relaxed sm:leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-[-0.12px] text-white">
							This reflects how far we've come—and the great strides we're prepared to make moving forward.
						</p>
					</div>

					<!-- Timeline -->
					<div class="flex gap-4 sm:gap-6 md:gap-7 lg:gap-[28px] items-center">
						<!-- Timeline Line/Icon -->
						<div class="flex-shrink-0 w-4 sm:w-5 lg:w-[20px] h-auto lg:h-[152px]">
							<img src="/images/Group 1321314407.svg" alt="" class="w-full h-full block" />
						</div>

						<!-- Timeline Content -->
						<div class="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] w-full lg:w-[394px] flex-shrink-0">
							<p class="font-geist text-base sm:text-lg md:text-[18px] lg:text-[20px] font-medium leading-relaxed sm:leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-[-0.1px] text-white w-full">
								April 2024
							</p>
							<div class="font-geist text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold leading-tight sm:leading-[1.4] md:leading-[1.35] lg:leading-[33px] tracking-[-0.12px] text-white w-full">
								<p class="mb-0">JobBeta started operation and</p>
								<p>registered as an edu-organization</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- You Bring the Potential Section -->
	<section class="relative w-full bg-[#110D21] overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[937px]">
		<!-- Background Pattern (4% opacity) - Full viewport width -->
		<div class="absolute inset-0 opacity-[0.04] overflow-hidden pointer-events-none">
			<img src="/images/Frame 2085663656.png" alt="" class="absolute top-0 left-1/2 -translate-x-1/2 w-screen min-w-[1440px] h-[220.08%] object-cover" />
		</div>

		<!-- Decorative Lines - Top Right -->
		<div class="absolute hidden lg:block w-[321px] h-[316px] -top-[133px] right-0 lg:right-[calc((100vw-1440px)/2+48px)]">
			<img src="/images/decorative-lines-2.svg" alt="" class="w-full h-full" />
		</div>

		<!-- Decorative Lines - Bottom Left -->
		<div class="absolute hidden lg:block w-[239px] h-[257px] bottom-[129px] left-0 lg:left-[calc((100vw-1440px)/2-149px)]">
			<img src="/images/decorative-lines-3.svg" alt="" class="w-full h-full" />
		</div>

		<!-- Mobile/Tablet Responsive Layout -->
		<div class="lg:hidden px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20">
			<div class="flex flex-col gap-8">
				<!-- Heading -->
				<h2 class="font-geist text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight sm:leading-[1.2] tracking-[-0.24px] text-white max-w-[486px]">
					You Bring the Potential. We Bring the Platform.
				</h2>

				<!-- Body Text -->
				<p class="font-geist text-base sm:text-lg md:text-[18px] font-normal leading-relaxed sm:leading-[26px] md:leading-[28px] tracking-[-0.1px] text-white max-w-[562px]">
					At JobBeta, we believe everyone deserves a fair shot at a great career. That's why we've built a platform that levels the playing field — helping students from all backgrounds connect with employers who care about potential, not just pedigree
				</p>

				<!-- Photo Cards -->
				<div class="relative h-[280px] sm:h-[320px] md:h-[360px] mt-8">
					<div class="absolute left-0 bottom-[4px] sm:bottom-[6px] md:bottom-[8px] w-[140px] sm:w-[160px] md:w-[180px]" style="transform: rotate(-2.406deg);">
						<div class="border-[6px] sm:border-[8px] border-white rounded-[16px] overflow-hidden h-[240px] sm:h-[270px] md:h-[300px]">
							<img src="/images/photo-card-1.png" alt="Professional woman" class="w-full h-full object-cover" />
						</div>
					</div>
					<div class="absolute left-[120px] sm:left-[140px] md:left-[160px] bottom-[8px] sm:bottom-[10px] md:bottom-[12px] w-[145px] sm:w-[165px] md:w-[185px]">
						<div class="border-[6px] sm:border-[8px] border-white rounded-[16px] overflow-hidden h-[240px] sm:h-[270px] md:h-[300px]">
							<img src="/images/photo-card-3.png" alt="Professional man" class="w-full h-full object-cover" />
						</div>
					</div>
					<div class="absolute left-[240px] sm:left-[280px] md:left-[320px] bottom-[4px] sm:bottom-[6px] md:bottom-[8px] w-[145px] sm:w-[165px] md:w-[185px]" style="transform: rotate(6.025deg);">
						<div class="border-[6px] sm:border-[8px] border-white rounded-[16px] overflow-hidden h-[240px] sm:h-[270px] md:h-[300px]">
							<img src="/images/photo-card-2.png" alt="Professional man smiling" class="w-full h-full object-cover" />
						</div>
					</div>
				</div>

				<!-- Value Badges -->
				<div class="flex flex-col gap-4 sm:gap-5 items-center mt-8">
					<div class="bg-white rounded-[50px] px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5">
						<div class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
							<img src="/icons/ads-click-orange.svg" alt="" class="w-full h-full" />
						</div>
						<p class="font-geist text-xl sm:text-[22px] font-bold tracking-[-0.12px] text-[#F7931E]">Access</p>
					</div>
					<div class="bg-white rounded-[50px] px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5">
						<div class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
							<img src="/icons/ads-click-blue.svg" alt="" class="w-full h-full" />
						</div>
						<p class="font-geist text-xl sm:text-[22px] font-bold tracking-[-0.12px] text-[#3296F8]">Equity</p>
					</div>
					<div class="bg-white rounded-[50px] px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5">
						<div class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
							<img src="/icons/ads-click-dark.svg" alt="" class="w-full h-full" />
						</div>
						<p class="font-geist text-xl sm:text-[22px] font-bold tracking-[-0.12px] text-[#110D21]">Opportunity</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop Layout with Absolute Positioning -->
		<div class="hidden lg:block relative w-full h-[937px] max-w-[1440px] mx-auto">
			<!-- Heading - Absolute positioned -->
			<p class="absolute left-[160px] top-[91px] w-[486px] font-geist text-[48px] font-bold leading-[72px] tracking-[-0.24px] text-white">
				You Bring the Potential. We Bring the Platform.
			</p>

			<!-- Body Text - Absolute positioned -->
			<p class="absolute left-[732px] top-[104px] w-[562px] font-geist text-[20px] font-normal leading-[30px] tracking-[-0.1px] text-white">
				At JobBeta, we believe everyone deserves a fair shot at a great career. That's why we've built a platform that levels the playing field — helping students from all backgrounds connect with employers who care about potential, not just pedigree
			</p>

			<!-- Photo Cards Group - Absolute positioned -->
			<div class="absolute left-[215px] top-[502px]">
				<!-- White base card -->
				<div class="absolute bg-white h-[136px] w-[266px] rounded-[20px] left-[173px] top-[208px]"></div>

				<!-- Photo Card 1 - Rotated left (-2.406deg = 357.594deg) -->
				<div class="absolute left-0 top-0" style="transform: rotate(357.594deg);">
					<div class="border-[10px] border-solid border-white h-[318px] w-[199px] rounded-[20px] overflow-hidden">
						<img src="/images/photo-card-1.png" alt="Professional woman" class="w-full h-full object-cover" />
					</div>
				</div>

				<!-- Photo Card 2 - Center -->
				<div class="absolute left-[191.59px] top-[4.03px]">
					<div class="border-[10px] border-solid border-white h-[318px] w-[207px] rounded-[20px] overflow-hidden">
						<img src="/images/photo-card-3.png" alt="Professional man" class="w-full h-full object-cover" />
					</div>
				</div>

				<!-- Photo Card 3 - Rotated right -->
				<div class="absolute left-[372.59px] top-[3.03px]" style="transform: rotate(6.025deg);">
					<div class="border-[10px] border-solid border-white h-[318px] w-[207px] rounded-[20px] overflow-hidden">
						<img src="/images/photo-card-2.png" alt="Professional man smiling" class="w-full h-full object-cover" />
					</div>
				</div>
			</div>

			<!-- Value Badges Group - Absolute positioned -->
			<div class="absolute left-[896px] top-[548px]">
				<!-- Decorative connecting lines -->
				<div class="absolute left-[23px] top-[11px] w-[283px] h-[195px]">
					<img src="/images/decorative-lines-1.svg" alt="" class="w-full h-full" />
				</div>

				<!-- Access Badge (top) -->
				<div class="absolute left-0 top-0 bg-white rounded-[50px] px-[24px] py-[10px] flex items-center gap-[10px] w-[328px]">
					<div class="w-[24px] h-[24px] flex-shrink-0">
						<img src="/icons/ads-click-orange.svg" alt="" class="w-full h-full" />
					</div>
					<p class="font-geist text-[24px] font-bold leading-[36px] tracking-[-0.12px] text-[#F7931E]">Access</p>
				</div>

				<!-- Equity Badge (middle) -->
				<div class="absolute left-[24px] top-[86px] bg-white rounded-[50px] px-[24px] py-[10px] flex items-center gap-[10px] w-[328px]">
					<div class="w-[24px] h-[24px] flex-shrink-0">
						<img src="/icons/ads-click-blue.svg" alt="" class="w-full h-full" />
					</div>
					<p class="font-geist text-[24px] font-bold leading-[36px] tracking-[-0.12px] text-[#3296F8]">Equity</p>
				</div>

				<!-- Opportunity Badge (bottom) -->
				<div class="absolute left-[24px] top-[178px] bg-white rounded-[50px] px-[24px] py-[10px] flex items-center gap-[10px] w-[328px]">
					<div class="w-[24px] h-[24px] flex-shrink-0">
						<img src="/icons/ads-click-dark.svg" alt="" class="w-full h-full" />
					</div>
					<p class="font-geist text-[24px] font-bold leading-[36px] tracking-[-0.12px] text-[#110D21]">Opportunity</p>
				</div>
			</div>
		</div>
	</section>
</div>
