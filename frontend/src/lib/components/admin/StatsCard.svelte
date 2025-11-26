<script lang="ts">
	let { title, value, icon, trend, trendValue } = $props<{
		title: string;
		value: string | number;
		icon?: string;
		trend?: 'up' | 'down' | 'neutral';
		trendValue?: string;
	}>();
</script>

<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
	<div class="flex items-center justify-between">
		<div class="flex-1">
			<p class="text-sm font-medium text-gray-600">{title}</p>
			<p class="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
			{#if trend && trendValue}
				<p class="mt-2 flex items-center text-sm">
					{#if trend === 'up'}
						<span class="text-green-600">
							<svg class="mr-1 h-4 w-4 inline" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							{trendValue}
						</span>
					{:else if trend === 'down'}
						<span class="text-red-600">
							<svg class="mr-1 h-4 w-4 inline" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							{trendValue}
						</span>
					{:else}
						<span class="text-gray-600">{trendValue}</span>
					{/if}
				</p>
			{/if}
		</div>
		{#if icon}
			<div class="rounded-full bg-purple-100 p-3">
				<svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{@html icon}
				</svg>
			</div>
		{/if}
	</div>
</div>
