<script lang="ts">
	// Process Steps Component - Reusable tab switcher with steps
	let activeTab = $state('employer');

	// Process steps data for Employer and Jobseeker tabs
	const processSteps = {
		employer: [
			{
				number: '01',
				title: 'Registration',
				description: 'Create a free account and get access to our resources and opportunities..'
			},
			{
				number: '02',
				title: 'Profile Completion',
				description: 'Complete your profile to showcase your organization and what culture you represent.'
			},
			{
				number: '03',
				title: 'Job Vacancy',
				description: "Post all Your Job  Openings on your dashboard and let's get you the best talent."
			},
			{
				number: '04',
				title: 'Hire Qualified  Persons & Match Candidates',
				description: 'Connect with qualified candidates and hire the perfect person for the job.'
			}
		],
		jobseeker: [
			{
				number: '01',
				title: 'Create Account',
				description: 'Sign up for free and unlock access to thousands of job opportunities tailored to your skills.'
			},
			{
				number: '02',
				title: 'Build Your Profile',
				description: 'Upload your resume, showcase your skills, experience, and qualifications to stand out to employers.'
			},
			{
				number: '03',
				title: 'Browse & Apply',
				description: 'Search through curated job listings, filter by your preferences, and apply to positions that match your career goals.'
			},
			{
				number: '04',
				title: 'Get Hired',
				description: 'Connect with top employers, ace your interviews, and land your dream job with JobBeta.'
			}
		]
	};
</script>

<div class="relative bg-white py-16 md:py-20 lg:py-32">
	<div class="page-container">
		<!-- Heading and Tab Switcher Row -->
		<div class="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between mb-5">
			<!-- Heading -->
			<h2 class="font-geist font-semibold text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[61px] text-black tracking-[-0.24px] flex-1 max-w-3xl">
				Empower your Career with cutting-edge Process.
			</h2>

			<!-- Tab Switcher -->
			<div class="flex bg-[rgba(241,233,252,0.75)] rounded-sm overflow-hidden flex-shrink-0">
				<button
					onclick={() => activeTab = 'employer'}
					class="{activeTab === 'employer' ? 'bg-[#7502ff] text-white font-lato font-bold' : 'text-[#110d21] font-geist'} text-sm md:text-base px-6 md:px-10 py-3 md:py-4 w-[140px] md:w-[180px] transition-colors cursor-pointer"
				>
					Employer
				</button>
				<button
					onclick={() => activeTab = 'jobseeker'}
					class="{activeTab === 'jobseeker' ? 'bg-[#7502ff] text-white font-lato font-bold' : 'text-[#110d21] font-geist'} text-sm md:text-base px-6 md:px-10 py-3 md:py-4 w-[140px] md:w-[180px] transition-colors cursor-pointer">
					Jobseeker
				</button>
			</div>
		</div>

		<!-- Description -->
		<div class="max-w-3xl mb-16 md:mb-20 lg:mb-24">
			<p class="font-geist text-base md:text-lg lg:text-xl leading-relaxed text-[#62717a] tracking-[-0.1px]">
				Take your career to the next level with JobBeta. Whether you're just starting out or looking to grow professionally, JobBeta connects you with the tools, employers, and insights you need to succeed.
			</p>
		</div>

		<!-- Process Steps -->
		<div class="relative min-h-[400px] md:min-h-[350px]">
			{#key activeTab}
				<div class="relative flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 items-start tab-content">
					<!-- Connecting Lines - Absolutely positioned, hidden on mobile -->
					<div class="hidden md:block absolute top-[35px] left-0 right-0 pointer-events-none z-0">
						<!-- Line 1-2 -->
						<img src="/icons/line-connector.svg" alt="" class="absolute left-[18%] w-[14%] h-auto" />
						<!-- Line 2-3 -->
						<img src="/icons/line-connector.svg" alt="" class="absolute left-[43%] w-[14%] h-auto" />
						<!-- Line 3-4 -->
						<img src="/icons/line-connector.svg" alt="" class="absolute left-[68%] w-[14%] h-auto" />
					</div>

					<!-- Process Step Cards -->
					{#each processSteps[activeTab] as step, index}
						<div class="relative flex flex-col gap-5 w-full md:flex-1 z-10 step-card" style="animation-delay: {index * 0.1}s">
							<div class="bg-[#7502ff] rounded-[20px] w-[70px] h-[70px] flex items-center justify-center flex-shrink-0">
								<span class="font-geist font-semibold text-2xl text-white">{step.number}</span>
							</div>
							<div class="flex flex-col gap-4">
								<h3 class="font-geist font-semibold text-xl leading-[30px] text-black tracking-[-0.1px]">
									{step.title}
								</h3>
								<p class="font-geist text-base leading-6 text-[#505d65] tracking-[-0.08px]">
									{step.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			{/key}
		</div>
	</div>
</div>

<style>
	.tab-content {
		animation: fadeIn 0.4s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.step-card {
		animation: slideUp 0.5s ease-out forwards;
		opacity: 0;
	}

	@keyframes slideUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
