<script lang="ts">
	let {
		columns,
		data,
		onEdit,
		onDelete,
		loading = false
	} = $props<{
		columns: Array<{ key: string; label: string; render?: (value: any, row: any) => string }>;
		data: Array<any>;
		onEdit?: (item: any) => void;
		onDelete?: (id: string) => void;
		loading?: boolean;
	}>();
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					{#each columns as column}
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
						>
							{column.label}
						</th>
					{/each}
					{#if onEdit || onDelete}
						<th
							class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
						>
							Actions
						</th>
					{/if}
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#if loading}
					<tr>
						<td colspan={columns.length + (onEdit || onDelete ? 1 : 0)} class="px-6 py-10 text-center">
							<div class="flex items-center justify-center">
								<div
									class="h-8 w-8 animate-spin rounded-full border-b-2 border-purple-600"
								></div>
							</div>
						</td>
					</tr>
				{:else if data.length === 0}
					<tr>
						<td
							colspan={columns.length + (onEdit || onDelete ? 1 : 0)}
							class="px-6 py-10 text-center text-gray-500"
						>
							No data found.
						</td>
					</tr>
				{:else}
					{#each data as row}
						<tr class="hover:bg-gray-50">
							{#each columns as column}
								<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
									{#if column.render}
										{@html column.render(row[column.key], row)}
									{:else}
										{row[column.key] ?? '-'}
									{/if}
								</td>
							{/each}
							{#if onEdit || onDelete}
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									{#if onEdit}
										<button
											onclick={() => onEdit(row)}
											class="mr-4 text-indigo-600 hover:text-indigo-900"
										>
											Edit
										</button>
									{/if}
									{#if onDelete}
										<button
											onclick={() => onDelete(row.id)}
											class="text-red-600 hover:text-red-900"
										>
											Delete
										</button>
									{/if}
								</td>
							{/if}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>
