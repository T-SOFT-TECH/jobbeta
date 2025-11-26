<script>
	const plans = ['Get Started', 'Grow Reach', 'Full Talent Suite'];
	const features = [
		{ name: 'School Engagement', availability: [true, true, true] },
		{ name: 'Sponsored content to target specific candidate', availability: [false, true, true] },
		{ name: 'Advanced Analytics', availability: [false, true, true] },
		{ name: 'Dedicated Support', availability: [false, false, true] }
	];
</script>

<section class="bg-neutral-light mx-auto w-full px-4 py-20">
	<div class="mb-12 text-center">
		<h2 class="mb-4 text-4xl font-bold text-[#2a2c2c]">Compare plan</h2>
		<p class="text-xl text-gray-600">
			Choose a plan that fits your needs. Contact us for a customized package.
		</p>
	</div>

	<div class="mx-auto max-w-7xl overflow-x-auto">
		<table class="w-full min-w-[800px] border-collapse">
			<thead>
				<tr>
					<th class="w-1/4 p-4 text-left"></th>
					{#each plans as plan, i}
						<th class="w-1/4 p-4 text-left align-top">
							<div class="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white/50 p-6">
								<h3 class="text-2xl font-bold text-[#2a2c2c]">{plan}</h3>
								<p class="text-sm text-gray-500">Per Employer, Per Month Billed Annually</p>
								<button
									class="bg-primary w-full rounded-xl py-3 font-bold text-white transition-colors hover:bg-[#6002d1]"
								>
									{i === 2 ? 'Book Demo' : 'Sign Up Now'}
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
