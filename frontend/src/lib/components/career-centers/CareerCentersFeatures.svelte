<script lang="ts">
	// Career Centers Features Section - Redesigned with card grid layout
</script>

<section class="relative w-full overflow-hidden bg-[#eeecfc] py-20 lg:py-32">
	<div class="page-container">
		<!-- Section Header - Centered -->
		<div class="mx-auto mb-12 flex max-w-[959px] flex-col items-center gap-6 text-center lg:mb-16">
			<div class="flex flex-col items-center gap-5">
				<div class="flex items-center justify-center rounded-[20px] bg-primary px-3 py-1.5">
					<span
						class="font-geist text-base leading-6 font-medium text-white"
						style="letter-spacing: -0.005em"
					>
						Features
					</span>
				</div>
				<h2
					class="max-w-[642px] font-geist text-3xl leading-tight font-bold text-[#2a2c2c] sm:text-4xl lg:text-[40px] lg:leading-[60px]"
					style="letter-spacing: -0.005em"
				>
					Join Career Events that connect you to opportunities.
				</h2>
			</div>
			<p
				class="font-geist text-lg leading-relaxed font-normal text-[rgba(42,44,44,0.70)] lg:text-xl lg:leading-[30px]"
				style="letter-spacing: -0.005em"
			>
				Discover meaningful opportunities tailored to your goals, build valuable professional
				connections with industry leaders and peers, and gain the tools and insights you need to
				accelerate your career journey with confidence and purpose.
			</p>
		</div>

		<!-- Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
			<!-- Feature Card 1: Verified Job Board -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group1.svg"
						alt="Verified Job Board"
					/>
				</div>
				<div class="flex max-w-[325px] flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Verified Job Board
					</h3>
					<p
						class="max-w-[300px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Curated opportunities tailored to student profiles and program backgrounds.
					</p>
				</div>
			</div>

			<!-- Feature Card 2: Career Insights Dashboard -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group3.svg"
						alt="Career Insights Dashboard"
					/>
				</div>
				<div class="flex flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Career Insights Dashboard
					</h3>
					<p
						class="max-w-[282px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Track engagement, top employers, and skill gaps across your student base.
					</p>
				</div>
			</div>

			<!-- Feature Card 3: Employer Engagement Tools -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group5.svg"
						alt="Employer Engagement Tools"
					/>
				</div>
				<div class="flex flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Employer Engagement Tools
					</h3>
					<p
						class="max-w-[282px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Promote your career fairs, networking events, and workshops directly through the
						platform.
					</p>
				</div>
			</div>

			<!-- Feature Card 4: Student Portfolios -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group7.svg"
						alt="Student Portfolios"
					/>
				</div>
				<div class="flex flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Student Portfolios
					</h3>
					<p
						class="max-w-[282px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Help students present a holistic view of their achievements beyond the resume.
					</p>
				</div>
			</div>

			<!-- Feature Card 5: Skill & Career Programs -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group9.svg"
						alt="Skill & Career Programs"
					/>
				</div>
				<div class="flex flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Skill & Career Programs
					</h3>
					<p
						class="max-w-[282px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						On-demand modules that prepare students for interviews, networking, and the job hunt.
					</p>
				</div>
			</div>

			<!-- Feature Card 6: CV Optimization -->
			<div
				class="flex h-auto min-h-[300px] flex-col gap-9 rounded-[20px] bg-white px-[30px] py-10 lg:h-[357px]"
			>
				<div class="flex h-[74px] w-[86px] items-center justify-center rounded-[14px] bg-primary">
					<img
						class="h-10 w-10"
						src="/icons/career-centers/features/group11.svg"
						alt="CV Optimization"
					/>
				</div>
				<div class="flex flex-col items-start gap-3">
					<h3
						class="font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						CV Optimization
					</h3>
					<p
						class="max-w-[282px] font-geist text-base leading-6 font-normal text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Prepare students for interviews, networking, and the job hunt.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Background Decorative Element - positioned to show only ~20% -->
	<div class="pointer-events-none absolute -bottom-[600px] -left-[600px] hidden lg:block">
		<img src="/icons/career-centers/group-13213144610.svg" alt="" class="h-auto w-auto" />
	</div>
</section>
