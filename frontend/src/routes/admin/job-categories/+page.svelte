<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let categories = $state([]);
	let loading = $state(true);
	let showForm = $state(false);
	let isEditing = $state(false);

	let formData = $state({
		id: '',
		name: '',
		slug: '',
		description: '',
		active: true
	});

	onMount(async () => {
		await loadCategories();
	});

	async function loadCategories() {
		loading = true;
		try {
			const records = await pb.collection('job_categories').getFullList({
				sort: 'name'
			});
			categories = records;
		} catch (e) {
			console.error('Error loading categories:', e);
			alert('Failed to load categories');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = {
			id: '',
			name: '',
			slug: '',
			description: '',
			active: true
		};
		isEditing = false;
		showForm = true;
	}

	function openEdit(item: any) {
		formData = {
			id: item.id,
			name: item.name,
			slug: item.slug,
			description: item.description || '',
			active: item.active ?? true
		};
		isEditing = true;
		showForm = true;
	}

	function generateSlug() {
		formData.slug = formData.name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	async function handleSubmit() {
		try {
			if (isEditing) {
				await pb.collection('job_categories').update(formData.id, formData);
			} else {
				await pb.collection('job_categories').create(formData);
			}
			showForm = false;
			await loadCategories();
		} catch (e: any) {
			console.error('Error saving category:', e);
			alert('Failed to save category: ' + (e.message || 'Unknown error'));
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this category?')) return;
		try {
			await pb.collection('job_categories').delete(id);
			await loadCategories();
		} catch (e) {
			console.error('Error deleting category:', e);
			alert('Failed to delete category');
		}
	}

	const columns = [
		{ key: 'name', label: 'Category Name' },
		{ key: 'slug', label: 'Slug' },
		{ key: 'description', label: 'Description' },
		{
			key: 'active',
			label: 'Status',
			render: (value: boolean) =>
				value
					? '<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800">Active</span>'
					: '<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-gray-100 text-gray-800">Inactive</span>'
		}
	];
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Job Categories</h1>
			<p class="mt-1 text-sm text-gray-600">Manage job categories for job listings</p>
		</div>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Add New Category
		</button>
	</div>

	<DataTable {columns} data={categories} {loading} onEdit={openEdit} onDelete={handleDelete} />

	<Modal
		title={isEditing ? 'Edit Category' : 'Add New Category'}
		show={showForm}
		onClose={() => (showForm = false)}
	>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			class="space-y-4"
		>
			<div>
				<label class="block text-sm font-medium text-gray-700">Category Name *</label>
				<input
					type="text"
					bind:value={formData.name}
					oninput={!isEditing ? generateSlug : undefined}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Slug *</label>
				<input
					type="text"
					bind:value={formData.slug}
					required
					pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
					title="Lowercase letters, numbers, and hyphens only"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
				<p class="mt-1 text-xs text-gray-500">
					URL-friendly version (e.g., software-engineering)
				</p>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Description</label>
				<textarea
					bind:value={formData.description}
					rows="3"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
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
					{isEditing ? 'Update' : 'Create'} Category
				</button>
			</div>
		</form>
	</Modal>
</div>
