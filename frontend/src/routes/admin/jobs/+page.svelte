<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let jobs = $state([]);
	let companies = $state([]);
	let categories = $state([]);
	let loading = $state(true);
	let showForm = $state(false);
	let isEditing = $state(false);

	let formData = $state({
		id: '',
		title: '',
		slug: '',
		description: '',
		company: '',
		category: '',
		location: '',
		job_type: 'full-time',
		experience_level: '',
		salary_min: '',
		salary_max: '',
		salary_currency: 'USD',
		requirements: '',
		benefits: '',
		status: 'draft',
		featured: false,
		deadline: ''
	});

	onMount(async () => {
		await Promise.all([loadJobs(), loadCompanies(), loadCategories()]);
	});

	async function loadJobs() {
		loading = true;
		try {
			const records = await pb.collection('jobs').getFullList({
				sort: '-created',
				expand: 'company,category'
			});
			jobs = records;
		} catch (e) {
			console.error('Error loading jobs:', e);
		} finally {
			loading = false;
		}
	}

	async function loadCompanies() {
		try {
			const records = await pb.collection('companies').getFullList({
				sort: 'name'
			});
			companies = records;
		} catch (e) {
			console.error('Error loading companies:', e);
		}
	}

	async function loadCategories() {
		try {
			const records = await pb.collection('job_categories').getFullList({
				sort: 'name',
				filter: 'active = true'
			});
			categories = records;
		} catch (e) {
			console.error('Error loading categories:', e);
		}
	}

	function openCreate() {
		formData = {
			id: '',
			title: '',
			slug: '',
			description: '',
			company: '',
			category: '',
			location: '',
			job_type: 'full-time',
			experience_level: '',
			salary_min: '',
			salary_max: '',
			salary_currency: 'USD',
			requirements: '',
			benefits: '',
			status: 'draft',
			featured: false,
			deadline: ''
		};
		isEditing = false;
		showForm = true;
	}

	function openEdit(item: any) {
		formData = {
			id: item.id,
			title: item.title,
			slug: item.slug,
			description: item.description || '',
			company: item.company || '',
			category: item.category || '',
			location: item.location || '',
			job_type: item.job_type || 'full-time',
			experience_level: item.experience_level || '',
			salary_min: item.salary_min?.toString() || '',
			salary_max: item.salary_max?.toString() || '',
			salary_currency: item.salary_currency || 'USD',
			requirements: item.requirements || '',
			benefits: item.benefits || '',
			status: item.status || 'draft',
			featured: item.featured || false,
			deadline: item.deadline || ''
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
			const data: any = {
				...formData,
				posted_by: pb.authStore.model?.id
			};

			if (data.salary_min) data.salary_min = parseInt(data.salary_min);
			if (data.salary_max) data.salary_max = parseInt(data.salary_max);

			if (isEditing) {
				await pb.collection('jobs').update(formData.id, data);
			} else {
				await pb.collection('jobs').create(data);
			}
			showForm = false;
			await loadJobs();
		} catch (e: any) {
			console.error('Error saving job:', e);
			alert('Failed to save job: ' + (e.message || 'Unknown error'));
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this job?')) return;
		try {
			await pb.collection('jobs').delete(id);
			await loadJobs();
		} catch (e) {
			console.error('Error deleting job:', e);
			alert('Failed to delete job');
		}
	}

	const columns = [
		{ key: 'title', label: 'Job Title' },
		{
			key: 'company',
			label: 'Company',
			render: (_: any, row: any) => row.expand?.company?.name || '-'
		},
		{
			key: 'job_type',
			label: 'Type',
			render: (value: string) =>
				`<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-blue-100 text-blue-800">${value}</span>`
		},
		{
			key: 'status',
			label: 'Status',
			render: (value: string) => {
				const colors: Record<string, string> = {
					draft: 'gray',
					open: 'green',
					closed: 'red',
					filled: 'purple'
				};
				const color = colors[value] || 'gray';
				return `<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${color}-100 text-${color}-800">${value}</span>`;
			}
		},
		{
			key: 'featured',
			label: 'Featured',
			render: (value: boolean) =>
				value ? '<span class="text-yellow-500">★</span>' : '<span class="text-gray-300">☆</span>'
		},
		{
			key: 'created',
			label: 'Posted',
			render: (value: string) => new Date(value).toLocaleDateString()
		}
	];
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Jobs</h1>
			<p class="mt-1 text-sm text-gray-600">Manage job postings and listings</p>
		</div>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Post New Job
		</button>
	</div>

	<DataTable {columns} data={jobs} {loading} onEdit={openEdit} onDelete={handleDelete} />

	<Modal
		title={isEditing ? 'Edit Job' : 'Post New Job'}
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
				<label class="block text-sm font-medium text-gray-700">Job Title *</label>
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

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Company *</label>
					<select
						bind:value={formData.company}
						required
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="">Select company</option>
						{#each companies as company}
							<option value={company.id}>{company.name}</option>
						{/each}
					</select>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Category</label>
					<select
						bind:value={formData.category}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="">Select category</option>
						{#each categories as category}
							<option value={category.id}>{category.name}</option>
						{/each}
					</select>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Description *</label>
				<textarea
					bind:value={formData.description}
					required
					rows="6"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div class="grid grid-cols-3 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Job Type *</label>
					<select
						bind:value={formData.job_type}
						required
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="full-time">Full Time</option>
						<option value="part-time">Part Time</option>
						<option value="contract">Contract</option>
						<option value="internship">Internship</option>
						<option value="remote">Remote</option>
					</select>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Experience Level</label>
					<select
						bind:value={formData.experience_level}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="">Select level</option>
						<option value="entry">Entry Level</option>
						<option value="mid">Mid Level</option>
						<option value="senior">Senior</option>
						<option value="lead">Lead</option>
						<option value="executive">Executive</option>
					</select>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Location</label>
					<input
						type="text"
						bind:value={formData.location}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Min Salary</label>
					<input
						type="number"
						bind:value={formData.salary_min}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700">Max Salary</label>
					<input
						type="number"
						bind:value={formData.salary_max}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700">Currency</label>
					<input
						type="text"
						bind:value={formData.salary_currency}
						maxlength="10"
						placeholder="USD"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Requirements</label>
				<textarea
					bind:value={formData.requirements}
					rows="4"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Benefits</label>
				<textarea
					bind:value={formData.benefits}
					rows="3"
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				></textarea>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Status *</label>
					<select
						bind:value={formData.status}
						required
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					>
						<option value="draft">Draft</option>
						<option value="open">Open</option>
						<option value="closed">Closed</option>
						<option value="filled">Filled</option>
					</select>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Application Deadline</label>
					<input
						type="date"
						bind:value={formData.deadline}
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
			</div>

			<div class="flex items-center">
				<input
					type="checkbox"
					bind:checked={formData.featured}
					class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
				/>
				<label class="ml-2 block text-sm text-gray-900">Featured Job</label>
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
					{isEditing ? 'Update' : 'Post'} Job
				</button>
			</div>
		</form>
	</Modal>
</div>
