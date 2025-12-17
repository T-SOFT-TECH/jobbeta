<script>
	const plans = [
		{ name: 'Get Started', buttonText: 'Sign Up Now' },
		{ name: 'Grow Reach', buttonText: 'Sign Up Now' },
		{ name: 'Full Talent Suite', buttonText: 'Book Demo' }
	];
	const features = [
		{ name: 'School Engagement', availability: [true, true, true] },
		{ name: 'Sponsored content to target specific candidate', availability: [false, true, true] },
		{ name: 'Advanced Analytics', availability: [false, true, true] },
		{ name: 'Dedicated Support', availability: [false, false, true] }
	];
</script>

<section class="mx-auto w-full bg-neutral-light px-4 py-20">
	<div class="mb-12 text-center">
		<h2 class="mb-4 text-3xl font-bold text-[#2a2c2c] md:text-4xl">Compare plan</h2>
		<p class="text-lg text-gray-600 md:text-xl">
			Choose a plan that fits your needs. Contact us for a customized package.
		</p>
	</div>

	<!-- Mobile View: Card Layout -->
	<div class="mx-auto max-w-md space-y-6 lg:hidden">
		{#each plans as plan, planIndex}
			<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				<!-- Plan Header -->
				<div class="bg-gray-50 p-6">
					<h3 class="mb-2 text-xl font-bold text-[#2a2c2c]">{plan.name}</h3>
					<p class="mb-4 text-sm text-gray-500">Per Employer, Per Month Billed Annually</p>
					<button
						class="w-full rounded-xl bg-primary py-3 font-bold text-white transition-colors hover:bg-[#6002d1]"
					>
						{plan.buttonText}
					</button>
				</div>
				<!-- Plan Features -->
				<div class="divide-y divide-gray-100">
					{#each features as feature}
						<div class="flex items-center justify-between px-6 py-4">
							<span class="pr-4 text-sm font-medium text-[#2a2c2c]">{feature.name}</span>
							{#if feature.availability[planIndex]}
								<img src="/images/products/check-circle17.svg" alt="Yes" class="h-6 w-6 shrink-0" />
							{:else}
								<img
									src="/images/products/close0.svg"
									alt="No"
									class="h-6 w-6 shrink-0 opacity-50"
								/>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- Desktop View: Table Layout -->
	<div class="mx-auto hidden max-w-7xl lg:block">
		<table class="w-full border-collapse">
			<thead>
				<tr>
					<th class="w-1/4 p-4 text-left"></th>
					{#each plans as plan}
						<th class="w-1/4 p-4 text-left align-top">
							<div class="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white/50 p-6">
								<h3 class="text-2xl font-bold text-[#2a2c2c]">{plan.name}</h3>
								<p class="text-sm text-gray-500">Per Employer, Per Month Billed Annually</p>
								<button
									class="w-full rounded-xl bg-primary py-3 font-bold text-white transition-colors hover:bg-[#6002d1]"
								>
									{plan.buttonText}
								</button>
							</div>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each features as feature}
					<tr class="border-b border-gray-200 last:border-0">
						<td class="p-6 text-lg font-bold text-[#2a2c2c]">{feature.name}</td>
						{#each feature.availability as available}
							<td class="p-6 text-center">
								<div class="flex justify-center">
									{#if available}
										<img src="/images/products/check-circle17.svg" alt="Yes" class="h-8 w-8" />
									{:else}
										<img src="/images/products/close0.svg" alt="No" class="h-8 w-8 opacity-50" />
									{/if}
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
