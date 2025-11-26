<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let applications = $state([]);
	let loading = $state(true);
	let showDetails = $state(false);
	let selectedApp: any = $state(null);

	onMount(async () => {
		await loadApplications();
	});

	async function loadApplications() {
		loading = true;
		try {
			const records = await pb.collection('job_applications').getFullList({
				sort: '-created',
				expand: 'job,applicant'
			});
			applications = records;
		} catch (e) {
			console.error('Error loading applications:', e);
			alert('Failed to load applications');
		} finally {
			loading = false;
		}
	}

	function viewDetails(item: any) {
		selectedApp = item;
		showDetails = true;
	}

	async function updateStatus(id: string, status: string) {
		try {
			await pb.collection('job_applications').update(id, { status });
			await loadApplications();
			if (selectedApp?.id === id) {
				selectedApp.status = status;
			}
		} catch (e) {
			console.error('Error updating status:', e);
			alert('Failed to update status');
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this application?')) return;
		try {
			await pb.collection('job_applications').delete(id);
			await loadApplications();
			if (selectedApp?.id === id) {
				showDetails = false;
			}
		} catch (e) {
			console.error('Error deleting application:', e);
			alert('Failed to delete application');
		}
	}

	function getStatusBadge(status: string) {
		const colors: Record<string, string> = {
			new: 'blue',
			reviewing: 'yellow',
			shortlisted: 'purple',
			interviewed: 'indigo',
			offered: 'green',
			rejected: 'red',
			accepted: 'green',
			withdrawn: 'gray'
		};
		const color = colors[status] || 'gray';
		return `<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${color}-100 text-${color}-800">${status}</span>`;
	}

	const columns = [
		{
			key: 'applicant',
			label: 'Applicant',
			render: (_: any, row: any) => row.expand?.applicant?.name || row.expand?.applicant?.email || '-'
		},
		{
			key: 'job',
			label: 'Job',
			render: (_: any, row: any) => row.expand?.job?.title || '-'
		},
		{
			key: 'status',
			label: 'Status',
			render: (value: string) => getStatusBadge(value)
		},
		{
			key: 'rating',
			label: 'Rating',
			render: (value: number) =>
				value ? `<span class="text-yellow-500">${'★'.repeat(value)}${'☆'.repeat(5 - value)}</span>` : '-'
		},
		{
			key: 'created',
			label: 'Applied',
			render: (value: string) => new Date(value).toLocaleDateString()
		}
	];
</script>

<div>
	<div class="mb-6">
		<h1 class="text-2xl font-bold text-gray-900">Job Applications</h1>
		<p class="mt-1 text-sm text-gray-600">Review and manage job applications</p>
	</div>

	<DataTable
		{columns}
		data={applications}
		{loading}
		onEdit={viewDetails}
		onDelete={handleDelete}
	/>

	<Modal
		title="Application Details"
		show={showDetails}
		onClose={() => (showDetails = false)}
		size="lg"
	>
		{#if selectedApp}
			<div class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<div>
						<p class="text-sm font-medium text-gray-500">Applicant</p>
						<p class="mt-1 text-gray-900">
							{selectedApp.expand?.applicant?.name || selectedApp.expand?.applicant?.email}
						</p>
					</div>
					<div>
						<p class="text-sm font-medium text-gray-500">Job</p>
						<p class="mt-1 text-gray-900">{selectedApp.expand?.job?.title}</p>
					</div>
				</div>

				<div>
					<p class="text-sm font-medium text-gray-500">Status</p>
					<div class="mt-2 flex gap-2">
						{#each ['new', 'reviewing', 'shortlisted', 'interviewed', 'offered', 'rejected', 'accepted', 'withdrawn'] as status}
							<button
								onclick={() => updateStatus(selectedApp.id, status)}
								class="rounded px-2 py-1 text-xs font-medium {selectedApp.status === status
									? 'bg-purple-600 text-white'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
							>
								{status}
							</button>
						{/each}
					</div>
				</div>

				{#if selectedApp.cover_letter}
					<div>
						<p class="text-sm font-medium text-gray-500">Cover Letter</p>
						<p class="mt-1 whitespace-pre-wrap rounded bg-gray-50 p-3 text-sm text-gray-900">
							{selectedApp.cover_letter}
						</p>
					</div>
				{/if}

				{#if selectedApp.resume}
					<div>
						<p class="text-sm font-medium text-gray-500">Resume</p>
						<a
							href={pb.getFileUrl(selectedApp, selectedApp.resume)}
							target="_blank"
							class="mt-1 inline-flex items-center text-purple-600 hover:underline"
						>
							Download Resume
							<svg
								class="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
						</a>
					</div>
				{/if}

				{#if selectedApp.notes}
					<div>
						<p class="text-sm font-medium text-gray-500">Notes</p>
						<p class="mt-1 whitespace-pre-wrap text-sm text-gray-900">{selectedApp.notes}</p>
					</div>
				{/if}

				<div class="flex justify-between border-t pt-4">
					<p class="text-sm text-gray-500">
						Applied: {new Date(selectedApp.created).toLocaleString()}
					</p>
					<button
						onclick={() => (showDetails = false)}
						class="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
					>
						Close
					</button>
				</div>
			</div>
		{/if}
	</Modal>
</div>
