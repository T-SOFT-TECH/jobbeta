<script>
	import { fade } from 'svelte/transition';

	let {
		title = 'Simple, Transparent Pricing',
		subtitle = 'Choose the plan that fits your needs.',
		plans = [
			{
				name: 'Get Started',
				price: 'N0.00',
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
				price: 'N20.00',
				oldPrice: 'N20.00',
				period: 'Per Employer, Per Month Billed Annually',
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
				iconGroup: 'group3.svg',
				bgImage: '/images/products/frame-20856639990.png'
			},
			{
				name: 'Full Talent Suite',
				price: 'N20.00',
				oldPrice: 'N20.00',
				period: 'Per Employer, Per Month Billed Annually',
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
		]
	} = $props();

	let billingCycle = $state('annual'); // 'annual' or 'monthly'
</script>

<section class="mx-auto mb-20 flex w-full max-w-7xl flex-col items-center px-4">
	<!-- Toggle -->
	<div class="mb-10 flex items-center gap-4">
		<button
			class="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
			onclick={() => (billingCycle = 'annual')}
		>
			<img src="/images/products/album0.svg" alt="icon" class="h-6 w-6" />
			<span class="text-text-muted text-xl font-bold md:text-2xl">
				Annual <span class="text-primary">(Save 50%)</span>
			</span>
		</button>
		<button
			class="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
			onclick={() => (billingCycle = 'monthly')}
		>
			<div class="h-6 w-6 rounded-full border border-gray-300"></div>
			<span class="text-xl font-medium text-gray-500 md:text-2xl">Monthly</span>
		</button>
	</div>

	<!-- Cards Grid -->
	<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
		{#each plans as plan}
			<div
				class="relative flex flex-col overflow-hidden rounded-2xl
        {plan.highlight ? 'bg-primary text-white' : 'text-text-muted bg-[#f2f4f7]'}
        transition-all duration-300 hover:shadow-xl"
				style={plan.highlight && plan.bgImage
					? `background-image: url('${plan.bgImage}'); background-size: cover; background-position: center;`
					: ''}
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
								<span class="text-3xl font-bold">{plan.price}</span>
								{#if plan.oldPrice}
									<span class="text-sm line-through opacity-70">{plan.oldPrice}</span>
								{/if}
							</div>
							<p class="mt-1 text-sm opacity-70">{plan.period}</p>
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
