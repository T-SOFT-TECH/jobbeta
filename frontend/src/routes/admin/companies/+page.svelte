<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let companies = $state([]);
	let loading = $state(true);
	let showForm = $state(false);
	let isEditing = $state(false);

	let formData = $state({
		id: '',
		name: '',
		description: '',
		website: '',
		industry: '',
		size: '',
		location: '',
		verified: false,
		logo: null as File | null
	});

	onMount(async () => {
		await loadCompanies();
	});

	async function loadCompanies() {
		loading = true;
		try {
			const records = await pb.collection('companies').getFullList({
				sort: '-created'
			});
			companies = records;
		} catch (e) {
			console.error('Error loading companies:', e);
			alert('Failed to load companies');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = {
			id: '',
			name: '',
			description: '',
			website: '',
			industry: '',
			size: '',
			location: '',
			verified: false,
			logo: null
		};
		isEditing = false;
		showForm = true;
	}

	function openEdit(item: any) {
		formData = {
			id: item.id,
			name: item.name,
			description: item.description || '',
			website: item.website || '',
			industry: item.industry || '',
			size: item.size || '',
			location: item.location || '',
			verified: item.verified || false,
			logo: null
		};
		isEditing = true;
		showForm = true;
	}

	async function handleSubmit() {
		try {
			const data = new FormData();
			data.append('name', formData.name);
			data.append('description', formData.description);
			data.append('website', formData.website);
			data.append('industry', formData.industry);
			data.append('size', formData.size);
			data.append('location', formData.location);
			data.append('verified', formData.verified.toString());

			if (formData.logo) {
				data.append('logo', formData.logo);
			}

			if (isEditing) {
				await pb.collection('companies').update(formData.id, data);
			} else {
				await pb.collection('companies').create(data);
			}
			showForm = false;
			await loadCompanies();
		} catch (e: any) {
			console.error('Error saving company:', e);
			alert('Failed to save company: ' + (e.message || 'Unknown error'));
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this company?')) return;
		try {
			await pb.collection('companies').delete(id);
			await loadCompanies();
		} catch (e) {
			console.error('Error deleting company:', e);
			alert('Failed to delete company');
		}
	}

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			formData.logo = target.files[0];
		}
	}

	const columns = [
		{ key: 'name', label: 'Company Name' },
		{ key: 'industry', label: 'Industry' },
		{ key: 'size', label: 'Size' },
		{ key: 'location', label: 'Location' },
		{
			key: 'verified',
			label: 'Verified',
			render: (value: boolean) =>
				value
					? '<span class="text-green-600">✓ Verified</span>'
					: '<span class="text-gray-400">Not Verified</span>'
		}
	];
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Companies</h1>
			<p class="mt-1 text-sm text-gray-600">Manage company profiles and information</p>
		</div>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Add New Company
		</button>
	</div>

	<DataTable {columns} data={companies} {loading} onEdit={openEdit} onDelete={handleDelete} />

	<Modal
		title={isEditing ? 'Edit Company' : 'Add New Company'}
		show={showForm}
		onClose={() => (showForm = false)}
		size="lg"
	>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			class="space-y-4"
		>
			<div>
				<label class="block text-sm font-medium text-gray-700">Company Name *</label>
				<input
					type="text"
					bind:value={formData.name}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Description</label>
				<textarea
					bind:value={formData.description}
					rows="4"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Industry</label>
					<input
						type="text"
						bind:value={formData.industry}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Company Size</label>
					<select
						bind:value={formData.size}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="">Select size</option>
						<option value="1-10">1-10 employees</option>
						<option value="11-50">11-50 employees</option>
						<option value="51-200">51-200 employees</option>
						<option value="201-500">201-500 employees</option>
						<option value="501-1000">501-1000 employees</option>
						<option value="1000+">1000+ employees</option>
					</select>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Website</label>
					<input
						type="url"
						bind:value={formData.website}
						placeholder="https://example.com"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Location</label>
					<input
						type="text"
						bind:value={formData.location}
						placeholder="City, Country"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Company Logo</label>
				<input
					type="file"
					accept="image/*"
					onchange={handleFileChange}
					class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-purple-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-purple-700 hover:file:bg-purple-100"
				/>
			</div>

			<div class="flex items-center">
				<input
					type="checkbox"
					bind:checked={formData.verified}
					class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
				/>
				<label class="ml-2 block text-sm text-gray-900">Verified Company</label>
			</div>

			<div class="mt-6 flex justify-end gap-3 border-t pt-4">
				<button
					type="button"
					onclick={() => (showForm = false)}
					class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Cancel
				</button>
				<button
					type="submit"
					class="rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
				>
					{isEditing ? 'Update' : 'Create'} Company
				</button>
			</div>
		</form>
	</Modal>
</div>
