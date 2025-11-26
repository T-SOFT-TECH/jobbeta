<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let partners = $state([]);
	let loading = $state(true);
	let isEditing = $state(false);
	let showForm = $state(false);
	let fileInput;

	// Form Data
	let formData = $state({
		id: '',
		name: '',
		url: '',
		page: 'career-centers',
		active: true
	});
	let selectedFile = $state(null);

	onMount(async () => {
		await loadPartners();
	});

	async function loadPartners() {
		loading = true;
		try {
			const records = await pb.collection('partners').getFullList({
				sort: '-created'
			});
			partners = records;
		} catch (e) {
			console.error('Error loading partners:', e);
			alert('Failed to load partners');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = { id: '', name: '', url: '', page: 'career-centers', active: true };
		selectedFile = null;
		isEditing = false;
		showForm = true;
	}

	function openEdit(item) {
		formData = { ...item };
		selectedFile = null;
		isEditing = true;
		showForm = true;
	}

	function handleFileSelect(event) {
		const file = event.target.files[0];
		if (file) {
			selectedFile = file;
		}
	}

	async function handleSubmit() {
		try {
			const data = new FormData();
			data.append('name', formData.name);
			data.append('url', formData.url);
			data.append('page', formData.page);
			data.append('active', formData.active);

			if (selectedFile) {
				data.append('logo', selectedFile);
			}

			if (isEditing) {
				await pb.collection('partners').update(formData.id, data);
			} else {
				if (!selectedFile) {
					alert('Please select a logo file');
					return;
				}
				await pb.collection('partners').create(data);
			}
			showForm = false;
			await loadPartners();
		} catch (e) {
			console.error('Error saving partner:', e);
			alert('Failed to save partner');
		}
	}

	async function handleDelete(id) {
		if (!confirm('Are you sure you want to delete this partner?')) return;
		try {
			await pb.collection('partners').delete(id);
			await loadPartners();
		} catch (e) {
			console.error('Error deleting partner:', e);
			alert('Failed to delete partner');
		}
	}

	function getImageUrl(record, filename) {
		if (!filename) return '';
		return pb.files.getUrl(record, filename);
	}
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-gray-900">Partners & Logos</h1>
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
							>Logo</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Name</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>Page</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
							>URL</th
						>
						<th
							class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
							>Actions</th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each partners as item}
						<tr>
							<td class="whitespace-nowrap px-6 py-4">
								{#if item.logo}
									<img
										src={getImageUrl(item, item.logo)}
										alt={item.name}
										class="h-10 w-auto rounded bg-gray-100 object-contain p-1"
									/>
								{:else}
									<span class="text-gray-400">No logo</span>
								{/if}
							</td>
							<td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
								>{item.name}</td
							>
							<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
								<span
									class="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-purple-800"
								>
									{item.page}
								</span>
							</td>
							<td class="max-w-xs truncate whitespace-nowrap px-6 py-4 text-sm text-gray-500"
								>{item.url}</td
							>
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
					{#if partners.length === 0}
						<tr>
							<td colspan="5" class="px-6 py-10 text-center text-gray-500">No partners found.</td>
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
				<h2 class="mb-6 text-xl font-bold">{isEditing ? 'Edit' : 'Add'} Partner</h2>
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
						<label class="block text-sm font-medium text-gray-700">Name</label>
						<input
							type="text"
							bind:value={formData.name}
							required
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Logo</label>
						{#if isEditing && formData.logo}
							<div class="mb-2">
								<img
									src={getImageUrl(formData, formData.logo)}
									alt="Current logo"
									class="h-12 w-auto rounded bg-gray-50 object-contain p-1"
								/>
								<p class="mt-1 text-xs text-gray-500">Upload new file to replace</p>
							</div>
						{/if}
						<input
							type="file"
							accept="image/*"
							onchange={handleFileSelect}
							required={!isEditing}
							class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-purple-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-purple-700 hover:file:bg-purple-100"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">URL (Optional)</label>
						<input
							type="url"
							bind:value={formData.url}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
						/>
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
