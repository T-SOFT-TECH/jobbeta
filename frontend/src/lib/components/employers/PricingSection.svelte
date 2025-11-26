<script>
	import { base } from '$app/paths';

	let billingCycle = $state('monthly'); // 'monthly' or 'annual'

	const plans = [
		{
			name: 'Free',
			price: 'N0.00',
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
			recommended: false
		},
		{
			name: 'Pro',
			price: 'N20.00',
			originalPrice: 'N40.00', // Inferring higher price for strikethrough
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
			recommended: true
		},
		{
			name: 'Premium',
			price: 'N50.00', // Inferring higher price
			originalPrice: 'N100.00',
			description: 'Custom hiring solutions, dedicated support, and advanced recruitment tools.',
			features: [
				'Access to Basic Offers',
				'Access to Basic Offers',
				'Access to Basic Offers',
				'Access to Basic Offers',
				'Access to Basic Offers',
				'Access to Basic Offers'
			],
			cta: 'Choose this plan',
			recommended: false
		}
	];
</script>

<section class="overflow-hidden bg-white py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-12 max-w-3xl text-center">
			<h2 class="font-geist mb-6 text-3xl font-bold text-neutral-800 md:text-5xl">
				Perfect Pricing & Subscription Plans Just for you
			</h2>
			<p class="font-geist text-lg text-neutral-600 md:text-xl">
				Choose a recruitment plan that fits your hiring needs. Looking for bulk hiring? Contact us
				for a customized recruitment package.<br />
				No Hidden Charges, Cancel Anytime.
			</p>
		</div>

		<!-- Toggle -->
		<div class="mb-16 flex justify-center">
			<div class="border-primary relative flex items-center rounded-full border bg-white p-1">
				<button
					class="rounded-full px-6 py-2 text-base font-medium transition-all duration-300 {billingCycle ===
					'monthly'
						? 'bg-primary text-white shadow-md'
						: 'text-neutral-500 hover:text-neutral-800'}"
					onclick={() => (billingCycle = 'monthly')}
				>
					Monthly
				</button>
				<button
					class="flex items-center gap-2 rounded-full px-6 py-2 text-base font-medium transition-all duration-300 {billingCycle ===
					'annual'
						? 'bg-primary text-white shadow-md'
						: 'text-neutral-500 hover:text-neutral-800'}"
					onclick={() => (billingCycle = 'annual')}
				>
					Annual <span class="rounded-full bg-white/20 px-2 py-0.5 text-xs">(Save 50%)</span>
				</button>
			</div>
		</div>

		<!-- Plans Grid -->
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-3">
			{#each plans as plan}
				<div
					class="relative flex flex-col gap-6 rounded-2xl p-8 transition-all duration-300 {plan.recommended
						? 'bg-primary transform text-white shadow-2xl md:-translate-y-4'
						: 'border border-neutral-100 bg-neutral-50 text-neutral-800'}"
					style={plan.recommended
						? `background-image: url('${base}/images/employers/frame-20856639990.png'); background-size: cover; background-position: center;`
						: ''}
				>
					{#if plan.recommended}
						<div
							class="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-500 shadow-sm"
						>
							<img src="{base}/icons/employers/star-purple-5000.svg" alt="Star" class="h-4 w-4" />
							Recommended
						</div>
					{/if}

					<div>
						<h3 class="font-geist mb-2 text-2xl font-bold">{plan.name}</h3>
						<p class="font-geist text-sm opacity-80">{plan.description}</p>
					</div>

					<div class="flex items-baseline gap-2">
						<span class="font-geist text-4xl font-bold">{plan.price}</span>
						{#if plan.originalPrice}
							<span class="font-geist text-sm line-through opacity-60">{plan.originalPrice}</span>
						{/if}
					</div>
					<p class="font-geist -mt-4 text-sm opacity-80">Per Employer, Per Month Billed Annually</p>

					<button
						class="font-lato w-full rounded-xl py-3 font-bold transition-colors {plan.recommended
							? 'text-primary bg-white hover:bg-neutral-100'
							: 'bg-primary hover:bg-primary/90 text-white'}"
					>
						{plan.cta}
					</button>

					<div>
						<h4 class="font-geist mb-4 text-lg font-medium">This Includes:</h4>
						<ul class="flex flex-col gap-3">
							{#each plan.features as feature}
								<li class="font-geist flex items-center gap-3 text-sm opacity-80">
									<img
										src="{base}/icons/employers/{plan.recommended
											? 'check-circle6.svg'
											: 'check-circle0.svg'}"
										alt="Check"
										class="h-5 w-5"
									/>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
