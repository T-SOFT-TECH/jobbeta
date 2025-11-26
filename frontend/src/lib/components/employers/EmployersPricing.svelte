<script>
	import { base } from '$app/paths';

	let billingCycle = $state('annual'); // 'annual' or 'monthly'
</script>

<section class="relative w-full overflow-hidden bg-white py-24">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-12 flex max-w-[688px] flex-col items-center gap-5 text-center">
			<h2 class="font-geist text-[40px] font-bold leading-[52px] text-[#2a2c2c]">
				Perfect Pricing & Subscription Plans Just for you
			</h2>
			<p class="text-xl font-normal leading-[30px] text-[#2a2c2c]">
				Choose a recruitment plan that fits your hiring needs. Looking for bulk hiring? Contact us
				for a customized recruitment package.<br />
				₦o Hidden Charges, Cancel Anytime.
			</p>
		</div>

		<!-- Toggle -->
		<div
			class="mx-auto mb-16 flex w-[366px] items-center justify-between rounded-[50px] border border-[#7502ff] p-2.5"
		>
			<button
				class="flex h-[44px] flex-1 items-center justify-center rounded-[50px] text-base font-medium transition-all {billingCycle ===
				'monthly'
					? 'bg-[#7502ff] font-bold text-white'
					: 'text-[#2a2c2c]/60'}"
				onclick={() => (billingCycle = 'monthly')}
			>
				Monthly
			</button>
			<button
				class="flex h-[44px] w-[221px] items-center justify-center gap-1 rounded-[50px] text-base transition-all {billingCycle ===
				'annual'
					? 'bg-[#7502ff] font-bold text-white'
					: 'text-[#2a2c2c]/60'}"
				onclick={() => (billingCycle = 'annual')}
			>
				<span>Annual</span>
				<span class="font-bold">(Save 50%)</span>
			</button>
		</div>

		<!-- Pricing Cards -->
		<div class="flex flex-wrap justify-center gap-8">
			<!-- Free Plan -->
			<div
				class="flex w-[343px] flex-col gap-[37px] rounded-2xl bg-[#eaecf0]/30 p-6 transition-transform duration-300 hover:scale-105"
			>
				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-2">
						<div class="flex flex-col gap-3">
							<h3 class="font-geist text-2xl font-bold text-[#2a2c2c]">Free</h3>
							<p class="font-geist text-sm text-[#2a2c2c]/75">
								Post up to one job listing per month at no cost.
							</p>
						</div>
						<div class="flex flex-col gap-2">
							<div class="font-geist text-[32px] font-bold leading-[48px] text-[#2a2c2c]">
								₦0.00
							</div>
							<div class="font-geist text-sm text-[#2a2c2c]/75">free</div>
						</div>
					</div>
					<button
						class="font-lato w-full rounded-[20px] bg-[#7502ff] py-4 text-center text-base font-bold text-white transition-colors hover:bg-[#6002d1]"
					>
						Choose this plan
					</button>
				</div>

				<div class="flex flex-col gap-5">
					<h4 class="font-geist text-xl font-medium text-[#2a2c2c]/90">This Includes:</h4>
					<div class="flex flex-col gap-2">
						{#each Array(6) as _}
							<div class="flex items-center gap-2">
								<img src="{base}/images/products/check-circle0.svg" alt="check" class="h-6 w-6" />
								<span class="font-geist text-base text-[#2a2c2c]/70">Access to Basic Offers</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Pro Plan (Recommended) -->
			<div
				class="bg-primary relative flex w-[343px] flex-col gap-[37px] rounded-2xl border border-[#7502ff] p-6 transition-transform duration-300 hover:scale-105"
			>
				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-2">
						<div class="flex flex-col gap-3">
							<div class="flex items-center justify-between">
								<h3 class="font-geist text-2xl font-bold text-white">Pro</h3>
								<div class="flex items-center gap-2 rounded-[20px] bg-white px-2.5 py-1.5">
									<img
										src="{base}/images/products/star-purple-5000.svg"
										alt="star"
										class="h-6 w-6"
									/>
									<span class="font-geist text-xs font-medium text-[#f7931e]">Recommended</span>
								</div>
							</div>
							<p class="font-geist text-sm text-white">
								Get unlimited job postings, featured listings, and priority access to top
								candidates.
							</p>
						</div>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-3">
								<div class="font-geist text-[32px] font-bold leading-[48px] text-white">
									{billingCycle === 'annual' ? '₦20.00' : '₦40.00'}
								</div>
								{#if billingCycle === 'annual'}
									<div class="font-geist text-sm text-white line-through">₦40.00</div>
								{/if}
							</div>
							<div class="font-geist text-sm text-white">
								Per Employer, Per Month Billed {billingCycle === 'annual' ? 'Annually' : 'Monthly'}
							</div>
						</div>
					</div>
					<button
						class="font-lato w-full rounded-[20px] bg-white py-4 text-center text-base font-bold text-[#7502ff] transition-colors hover:bg-neutral-100"
					>
						Choose this Plan
					</button>
				</div>

				<div class="flex flex-col gap-5">
					<h4 class="font-geist text-xl font-medium text-white">This Includes:</h4>
					<div class="flex flex-col gap-2">
						{#each Array(6) as _}
							<div class="flex items-center gap-2">
								<img src="{base}/images/products/check-circle6.svg" alt="check" class="h-6 w-6" />
								<span class="font-geist text-base text-white">Access to Basic Offers</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Premium Plan -->
			<div
				class="flex w-[343px] flex-col gap-[37px] rounded-2xl bg-[#eaecf0]/30 p-6 transition-transform duration-300 hover:scale-105"
			>
				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-2">
						<div class="flex flex-col gap-3">
							<h3 class="font-geist text-2xl font-bold text-[#2a2c2c]">Premium</h3>
							<p class="font-geist text-sm text-[#2a2c2c]/75">
								Custom hiring solutions, dedicated support, and advanced recruitment tools.
							</p>
						</div>
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-3">
								<div class="font-geist text-[32px] font-bold leading-[48px] text-[#2a2c2c]">
									{billingCycle === 'annual' ? '₦20.00' : '₦40.00'}
								</div>
								{#if billingCycle === 'annual'}
									<div class="font-geist text-sm text-[#2a2c2c] line-through">₦40.00</div>
								{/if}
							</div>
							<div class="font-geist text-sm text-[#2a2c2c]/75">
								Per Employer, Per Month Billed {billingCycle === 'annual' ? 'Annually' : 'Monthly'}
							</div>
						</div>
					</div>
					<button
						class="font-lato w-full rounded-[20px] bg-[#7502ff] py-4 text-center text-base font-bold text-white transition-colors hover:bg-[#6002d1]"
					>
						Choose this plan
					</button>
				</div>

				<div class="flex flex-col gap-5">
					<h4 class="font-geist text-xl font-medium text-[#2a2c2c]/90">This Includes:</h4>
					<div class="flex flex-col gap-2">
						{#each Array(6) as _}
							<div class="flex items-center gap-2">
								<img src="{base}/images/products/check-circle0.svg" alt="check" class="h-6 w-6" />
								<span class="font-geist text-base text-[#2a2c2c]/70">Access to Basic Offers</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
