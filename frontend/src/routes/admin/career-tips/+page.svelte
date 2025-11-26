<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let tips = $state([]);
	let loading = $state(true);
	let showForm = $state(false);
	let isEditing = $state(false);

	let formData = $state({
		id: '',
		title: '',
		slug: '',
		content: '',
		excerpt: '',
		category: 'career-growth',
		status: 'draft',
		published_at: '',
		featured_image: null as File | null
	});

	onMount(async () => {
		await loadTips();
	});

	async function loadTips() {
		loading = true;
		try {
			const records = await pb.collection('career_tips').getFullList({
				sort: '-created'
			});
			tips = records;
		} catch (e) {
			console.error('Error loading career tips:', e);
			alert('Failed to load career tips');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = {
			id: '',
			title: '',
			slug: '',
			content: '',
			excerpt: '',
			category: 'career-growth',
			status: 'draft',
			published_at: '',
			featured_image: null
		};
		isEditing = false;
		showForm = true;
	}

	function openEdit(item: any) {
		formData = {
			id: item.id,
			title: item.title,
			slug: item.slug,
			content: item.content || '',
			excerpt: item.excerpt || '',
			category: item.category || 'career-growth',
			status: item.status || 'draft',
			published_at: item.published_at || '',
			featured_image: null
		};
		isEditing = true;
		showForm = true;
	}

	function generateSlug() {
		formData.slug = formData.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	async function handleSubmit() {
		try {
			const data = new FormData();
			data.append('title', formData.title);
			data.append('slug', formData.slug);
			data.append('content', formData.content);
			data.append('excerpt', formData.excerpt);
			data.append('category', formData.category);
			data.append('status', formData.status);

			if (formData.status === 'published' && !formData.published_at) {
				data.append('published_at', new Date().toISOString());
			} else if (formData.published_at) {
				data.append('published_at', formData.published_at);
			}

			if (formData.featured_image) {
				data.append('featured_image', formData.featured_image);
			}

			if (isEditing) {
				await pb.collection('career_tips').update(formData.id, data);
			} else {
				await pb.collection('career_tips').create(data);
			}
			showForm = false;
			await loadTips();
		} catch (e: any) {
			console.error('Error saving career tip:', e);
			alert('Failed to save career tip: ' + (e.message || 'Unknown error'));
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this career tip?')) return;
		try {
			await pb.collection('career_tips').delete(id);
			await loadTips();
		} catch (e) {
			console.error('Error deleting career tip:', e);
			alert('Failed to delete career tip');
		}
	}

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			formData.featured_image = target.files[0];
		}
	}

	const columns = [
		{ key: 'title', label: 'Title' },
		{
			key: 'category',
			label: 'Category',
			render: (value: string) =>
				`<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-purple-100 text-purple-800">${value}</span>`
		},
		{
			key: 'status',
			label: 'Status',
			render: (value: string) => {
				const colors: Record<string, string> = {
					draft: 'gray',
					published: 'green',
					archived: 'red'
				};
				const color = colors[value] || 'gray';
				return `<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${color}-100 text-${color}-800">${value}</span>`;
			}
		},
		{
			key: 'published_at',
			label: 'Published',
			render: (value: string) => (value ? new Date(value).toLocaleDateString() : '-')
		}
	];
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Career Tips</h1>
			<p class="mt-1 text-sm text-gray-600">Manage career advice and tips content</p>
		</div>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Create New Tip
		</button>
	</div>

	<DataTable {columns} data={tips} {loading} onEdit={openEdit} onDelete={handleDelete} />

	<Modal
		title={isEditing ? 'Edit Career Tip' : 'Create New Career Tip'}
		show={showForm}
		onClose={() => (showForm = false)}
		size="xl"
	>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			class="space-y-4"
		>
			<div>
				<label class="block text-sm font-medium text-gray-700">Title *</label>
				<input
					type="text"
					bind:value={formData.title}
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
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Category *</label>
				<select
					bind:value={formData.category}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				>
					<option value="resume">Resume</option>
					<option value="interview">Interview</option>
					<option value="networking">Networking</option>
					<option value="career-growth">Career Growth</option>
					<option value="job-search">Job Search</option>
					<option value="workplace">Workplace</option>
				</select>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Excerpt</label>
				<textarea
					bind:value={formData.excerpt}
					rows="2"
					maxlength="500"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Content *</label>
				<textarea
					bind:value={formData.content}
					required
					rows="12"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Featured Image</label>
				<input
					type="file"
					accept="image/*"
					onchange={handleFileChange}
					class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-purple-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-purple-700 hover:file:bg-purple-100"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Status *</label>
				<select
					bind:value={formData.status}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				>
					<option value="draft">Draft</option>
					<option value="published">Published</option>
					<option value="archived">Archived</option>
				</select>
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
					{isEditing ? 'Update' : 'Create'} Tip
				</button>
			</div>
		</form>
	</Modal>
</div>
