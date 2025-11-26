<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let testimonials = $state([]);
	let loading = $state(true);
	let isEditing = $state(false);
	let showForm = $state(false);

	// Form Data
	let formData = $state({
		id: '',
		quote: '',
		author: '',
		company: '',
		page: 'career-centers',
		active: true
	});

	onMount(async () => {
		await loadTestimonials();
	});

	async function loadTestimonials() {
		loading = true;
		try {
			const records = await pb.collection('testimonials').getFullList({
				sort: '-created'
			});
			testimonials = records;
		} catch (e) {
			console.error('Error loading testimonials:', e);
			alert('Failed to load testimonials');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = { id: '', quote: '', author: '', company: '', page: 'career-centers', active: true };
		isEditing = false;
		showForm = true;
	}

	function openEdit(item) {
		formData = { ...item };
		isEditing = true;
		showForm = true;
	}

	async function handleSubmit() {
		try {
			if (isEditing) {
				await pb.collection('testimonials').update(formData.id, formData);
			} else {
				await pb.collection('testimonials').create(formData);
			}
			showForm = false;
			await loadTestimonials();
		} catch (e) {
			console.error('Error saving testimonial:', e);
			alert('Failed to save testimonial');
		}
	}

	async function handleDelete(id) {
		if (!confirm('Are you sure you want to delete this testimonial?')) return;
		try {
			await pb.collection('testimonials').delete(id);
			await loadTestimonials();
		} catch (e) {
			console.error('Error deleting testimonial:', e);
			alert('Failed to delete testimonial');
		}
	}
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-gray-900">Testimonials</h1>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Add New
		</button>
	</div>

	{#if loading}
		<div class="py-10 text-center">Loading...</div>
	{:else}
		<div class="overflow-hidden rounded-lg bg-white shadow">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Author</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Company</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Page</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Quote</th
						>
						<th
							class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
							>Actions</th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each testimonials as item}
						<tr>
							<td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
								>{item.author}</td
							>
							<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.company}</td>
							<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
								<span
									class="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-purple-800"
								>
									{item.page}
								</span>
							</td>
							<td class="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{item.quote}</td>
							<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
								<button
									onclick={() => openEdit(item)}
									class="mr-4 text-indigo-600 hover:text-indigo-900">Edit</button
								>
								<button
									onclick={() => handleDelete(item.id)}
									class="text-red-600 hover:text-red-900">Delete</button
								>
							</td>
						</tr>
					{/each}
					{#if testimonials.length === 0}
						<tr>
							<td colspan="5" class="px-6 py-10 text-center text-gray-500"
								>No testimonials found.</td
							>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	{/if}

	<!-- Modal Form -->
	{#if showForm}
		<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div class="w-full max-w-lg rounded-lg bg-white p-8">
				<h2 class="mb-6 text-xl font-bold">{isEditing ? 'Edit' : 'Add'} Testimonial</h2>
				<form
					onsubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					class="space-y-4"
				>
					<div>
						<label class="block text-sm font-medium text-gray-700">Page</label>
						<select
							bind:value={formData.page}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						>
							<option value="career-centers">Career Centers</option>
							<option value="employers">Employers</option>
							<option value="home">Home</option>
						</select>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Author</label>
						<input
							type="text"
							bind:value={formData.author}
							required
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Company</label>
						<input
							type="text"
							bind:value={formData.company}
							required
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Quote</label>
						<textarea
							bind:value={formData.quote}
							required
							rows="4"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						></textarea>
					</div>
					<div class="flex items-center">
						<input
							type="checkbox"
							bind:checked={formData.active}
							class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
						/>
						<label class="ml-2 block text-sm text-gray-900">Active</label>
					</div>

					<div class="mt-6 flex justify-end gap-3">
						<button
							type="button"
							onclick={() => (showForm = false)}
							class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
							>Cancel</button
						>
						<button
							type="submit"
							class="rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
							>Save</button
						>
					</div>
				</form>
			</div>
		</div>
	{/if}
</div>
