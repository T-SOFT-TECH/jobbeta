<script>
	import { fade } from 'svelte/transition';

	let {
		title = 'Our Product Suite',
		subtitle = 'Choose a plan that fits your needs. Contact us for a customized package.'
	} = $props();

	let activeTab = $state('For School');
	const tabs = ['For School', 'Large scale organizations', 'Additional services'];

	let billingCycle = $state('annual'); // 'annual' or 'monthly'

	// Data structure to hold plans for different tabs
	const allPlans = {
		'For School': [
			{
				name: 'Get Started',
				monthlyPrice: 'N0.00',
				annualPrice: 'N0.00',
				period: 'free',
				description: 'Post up to one job listing per month at no cost.',
				features: [
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers'
				],
				cta: 'Choose this plan',
				highlight: false,
				iconGroup: 'group1.svg'
			},
			{
				name: 'Grow Reach',
				monthlyPrice: 'N40.00',
				annualPrice: 'N20.00',
				oldPrice: 'N40.00',
				period: 'Per Employer, Per Month',
				description:
					'Get unlimited job postings, featured listings, and priority access to top candidates.',
				features: [
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers'
				],
				cta: 'Choose this Plan',
				highlight: true,
				iconGroup: 'group3.svg'
			},
			{
				name: 'Full Talent Suite',
				monthlyPrice: 'N40.00',
				annualPrice: 'N20.00',
				oldPrice: 'N40.00',
				period: 'Per Employer, Per Month',
				description: 'Custom hiring solutions, dedicated support, and advanced recruitment tools.',
				features: [
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers',
					'Access to Basic Offers'
				],
				cta: 'Book Demo',
				highlight: false,
				iconGroup: 'group5.svg'
			}
		],
		'Large scale organizations': [
			{
				name: 'Enterprise Basic',
				monthlyPrice: 'N100.00',
				annualPrice: 'N80.00',
				period: 'Per Organization, Per Month',
				description: 'Essential tools for large scale recruitment.',
				features: [
					'Unlimited Job Postings',
					'Dedicated Account Manager',
					'API Access',
					'Custom Branding'
				],
				cta: 'Contact Sales',
				highlight: false,
				iconGroup: 'group1.svg'
			},
			{
				name: 'Enterprise Pro',
				monthlyPrice: 'N200.00',
				annualPrice: 'N160.00',
				period: 'Per Organization, Per Month',
				description: 'Advanced analytics and AI-powered matching for high volume hiring.',
				features: [
					'Everything in Basic',
					'AI Candidate Matching',
					'Advanced Analytics Dashboard',
					'SLA Support'
				],
				cta: 'Contact Sales',
				highlight: true,
				iconGroup: 'group3.svg'
			},
			{
				name: 'Enterprise Custom',
				monthlyPrice: 'Custom',
				annualPrice: 'Custom',
				period: 'Per Organization, Per Month',
				description: 'Tailored solutions for global enterprises with complex needs.',
				features: [
					'Everything in Pro',
					'Custom Integration',
					'Dedicated Engineering Support',
					'Global Compliance Tools'
				],
				cta: 'Contact Sales',
				highlight: false,
				iconGroup: 'group5.svg'
			}
		],
		'Additional services': [
			{
				name: 'Resume Review',
				monthlyPrice: 'N5.00',
				annualPrice: 'N5.00',
				period: 'Per Review',
				description: 'Expert review of your resume to increase your chances.',
				features: ['Detailed Feedback', 'Formatting Tips', 'Keyword Optimization'],
				cta: 'Get Started',
				highlight: false,
				iconGroup: 'group1.svg'
			},
			{
				name: 'Career Coaching',
				monthlyPrice: 'N50.00',
				annualPrice: 'N50.00',
				period: 'Per Session',
				description: 'One-on-one coaching session with a career expert.',
				features: ['Mock Interviews', 'Career Path Planning', 'Negotiation Strategies'],
				cta: 'Book Session',
				highlight: true,
				iconGroup: 'group5.svg'
			},
			{
				name: 'Profile Optimization',
				monthlyPrice: 'N15.00',
				annualPrice: 'N15.00',
				period: 'Per Profile',
				description: 'Optimize your JobBeta profile to attract top employers.',
				features: ['Headline Optimization', 'Skills Tagging', 'Bio Writing'],
				cta: 'Optimize Now',
				highlight: false,
				iconGroup: 'group3.svg'
			}
		]
	};

	// Reactive statement to update displayed plans based on activeTab
	let currentPlans = $derived(allPlans[activeTab] || []);
</script>

<section class="flex flex-col items-center justify-center px-4 py-16 text-center">
	<h1 class="text-text-muted mb-5 text-4xl font-bold leading-tight md:text-[40px]">
		{title}
	</h1>
	<p class="text-text-muted mx-auto max-w-2xl text-lg font-normal md:text-xl">
		{subtitle}
	</p>
</section>

<div class="mb-12 flex flex-wrap justify-center gap-4 px-4 md:gap-6">
	{#each tabs as tab}
		<button
			class="rounded-full px-6 py-2.5 text-base font-medium transition-colors duration-200
      {activeTab === tab
				? 'bg-primary font-bold text-white'
				: 'text-text-muted bg-[#f2f4f7] hover:bg-gray-200'}"
			on:click={() => (activeTab = tab)}
		>
			{tab}
		</button>
	{/each}
</div>

<section class="mx-auto mb-20 flex w-full max-w-7xl flex-col items-center px-4">
	<!-- Toggle -->
	<div class="mb-10 flex items-center gap-4">
		<button
			class="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
			on:click={() => (billingCycle = 'annual')}
		>
			{#if billingCycle === 'annual'}
				<img src="/images/products/album0.svg" alt="icon" class="h-6 w-6" />
			{:else}
				<div class="h-6 w-6 rounded-full border border-gray-300"></div>
			{/if}
			<span
				class="text-xl md:text-2xl {billingCycle === 'annual'
					? 'text-text-muted font-bold'
					: 'font-medium text-gray-500'}"
			>
				Annual <span class="text-primary">(Save 50%)</span>
			</span>
		</button>
		<button
			class="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
			on:click={() => (billingCycle = 'monthly')}
		>
			{#if billingCycle === 'monthly'}
				<img src="/images/products/album0.svg" alt="icon" class="h-6 w-6" />
			{:else}
				<div class="h-6 w-6 rounded-full border border-gray-300"></div>
			{/if}
			<span
				class="text-xl md:text-2xl {billingCycle === 'monthly'
					? 'text-text-muted font-bold'
					: 'font-medium text-gray-500'}"
			>
				Monthly
			</span>
		</button>
	</div>

	<!-- Cards Grid -->
	<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
		{#each currentPlans as plan (plan.name)}
			<div
				in:fade={{ duration: 300 }}
				class="relative flex flex-col overflow-hidden rounded-2xl
        {plan.highlight ? 'bg-primary text-white' : 'text-text-muted bg-[#f2f4f7]'}
        transition-all duration-300 hover:shadow-xl"
			>
				<!-- Header -->
				<div class="relative z-10 flex flex-col items-center p-6 pb-0 text-center">
					<div class="relative mb-2 h-12 w-12">
						<!-- Placeholder for icon group -->
						<img
							src="/images/products/{plan.iconGroup}"
							alt="icon"
							class="h-full w-full object-contain"
						/>
					</div>
					<h3 class="mb-4 text-2xl font-bold {plan.highlight ? 'text-white' : 'text-text-muted'}">
						{plan.name}
					</h3>
				</div>

				<!-- Content -->
				<div class="relative z-10 flex flex-grow flex-col gap-6 p-6">
					<!-- Price & Desc -->
					<div class="flex flex-col gap-2">
						<p class="text-sm {plan.highlight ? 'text-white' : 'text-gray-600'}">
							{plan.description}
						</p>
						<div class="mt-2">
							<div class="flex items-center justify-center gap-3 md:justify-start">
								<span class="text-3xl font-bold">
									{billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
								</span>
								{#if billingCycle === 'annual' && plan.oldPrice}
									<span class="text-sm line-through opacity-70">{plan.oldPrice}</span>
								{/if}
							</div>
							<p class="mt-1 text-sm opacity-70">
								{plan.period}
								{billingCycle === 'annual' && plan.annualPrice !== 'N0.00' ? 'Billed Annually' : ''}
							</p>
						</div>
					</div>

					<!-- Button -->
					<button
						class="w-full rounded-xl py-3 text-center font-bold transition-transform active:scale-95
            {plan.highlight ? 'text-primary bg-white' : 'bg-primary text-white'}"
					>
						{plan.cta}
					</button>

					<!-- Features -->
					<div class="mt-2">
						<h4 class="mb-4 text-lg font-medium">This Includes:</h4>
						<ul class="flex flex-col gap-3">
							{#each plan.features as feature}
								<li class="flex items-center gap-2 text-sm opacity-90">
									<img
										src="/images/products/check-circle{plan.highlight ? '6' : '0'}.svg"
										alt="check"
										class="h-5 w-5"
									/>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
