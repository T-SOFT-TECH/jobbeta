<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/admin/DataTable.svelte';
	import Badge from '$lib/components/admin/Badge.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';

	let users = $state([]);
	let loading = $state(true);
	let showForm = $state(false);
	let isEditing = $state(false);

	let formData = $state({
		id: '',
		email: '',
		name: '',
		role: 'student',
		phone: '',
		status: 'active',
		verified: false,
		password: '',
		passwordConfirm: ''
	});

	onMount(async () => {
		await loadUsers();
	});

	async function loadUsers() {
		loading = true;
		try {
			const records = await pb.collection('users').getFullList({
				sort: '-created'
			});
			users = records;
		} catch (e) {
			console.error('Error loading users:', e);
			alert('Failed to load users');
		} finally {
			loading = false;
		}
	}

	function openCreate() {
		formData = {
			id: '',
			email: '',
			name: '',
			role: 'student',
			phone: '',
			status: 'active',
			verified: false,
			password: '',
			passwordConfirm: ''
		};
		isEditing = false;
		showForm = true;
	}

	function openEdit(item: any) {
		formData = {
			id: item.id,
			email: item.email,
			name: item.name || '',
			role: item.role || 'student',
			phone: item.phone || '',
			status: item.status || 'active',
			verified: item.verified || false,
			password: '',
			passwordConfirm: ''
		};
		isEditing = true;
		showForm = true;
	}

	async function handleSubmit() {
		try {
			if (isEditing) {
				const updateData: any = {
					name: formData.name,
					role: formData.role,
					phone: formData.phone,
					status: formData.status,
					verified: formData.verified
				};

				if (formData.password) {
					if (formData.password !== formData.passwordConfirm) {
						alert('Passwords do not match');
						return;
					}
					updateData.password = formData.password;
					updateData.passwordConfirm = formData.passwordConfirm;
				}

				await pb.collection('users').update(formData.id, updateData);
			} else {
				if (!formData.password || formData.password !== formData.passwordConfirm) {
					alert('Please provide matching passwords');
					return;
				}
				await pb.collection('users').create({
					email: formData.email,
					password: formData.password,
					passwordConfirm: formData.passwordConfirm,
					name: formData.name,
					role: formData.role,
					phone: formData.phone,
					status: formData.status,
					verified: formData.verified
				});
			}
			showForm = false;
			await loadUsers();
		} catch (e: any) {
			console.error('Error saving user:', e);
			alert('Failed to save user: ' + (e.message || 'Unknown error'));
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Are you sure you want to delete this user?')) return;
		try {
			await pb.collection('users').delete(id);
			await loadUsers();
		} catch (e) {
			console.error('Error deleting user:', e);
			alert('Failed to delete user');
		}
	}

	function getRoleBadge(role: string) {
		const variants: Record<string, any> = {
			student: 'info',
			jobseeker: 'success',
			employer: 'purple'
		};
		return `<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${variants[role] || 'default'}-100 text-${variants[role] || 'default'}-800">${role}</span>`;
	}

	function getStatusBadge(status: string) {
		const variants: Record<string, any> = {
			active: 'success',
			inactive: 'warning',
			banned: 'danger'
		};
		return `<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${variants[status] || 'default'}-100 text-${variants[status] || 'default'}-800">${status}</span>`;
	}

	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{
			key: 'role',
			label: 'Role',
			render: (value: string) => getRoleBadge(value)
		},
		{
			key: 'status',
			label: 'Status',
			render: (value: string) => getStatusBadge(value)
		},
		{
			key: 'verified',
			label: 'Verified',
			render: (value: boolean) =>
				value
					? '<span class="text-green-600">✓</span>'
					: '<span class="text-gray-400">✗</span>'
		},
		{
			key: 'created',
			label: 'Joined',
			render: (value: string) => new Date(value).toLocaleDateString()
		}
	];
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Users</h1>
			<p class="mt-1 text-sm text-gray-600">Manage user accounts and permissions</p>
		</div>
		<button
			onclick={openCreate}
			class="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
		>
			Add New User
		</button>
	</div>

	<DataTable {columns} data={users} {loading} onEdit={openEdit} onDelete={handleDelete} />

	<Modal title={isEditing ? 'Edit User' : 'Add New User'} show={showForm} onClose={() => (showForm = false)}>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			class="space-y-4"
		>
			<div>
				<label class="block text-sm font-medium text-gray-700">Email *</label>
				<input
					type="email"
					bind:value={formData.email}
					required
					disabled={isEditing}
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 disabled:bg-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Name</label>
				<input
					type="text"
					bind:value={formData.name}
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Phone</label>
				<input
					type="tel"
					bind:value={formData.phone}
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Role *</label>
				<select
					bind:value={formData.role}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				>
					<option value="student">Student</option>
					<option value="jobseeker">Job Seeker</option>
					<option value="employer">Employer</option>
				</select>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Status *</label>
				<select
					bind:value={formData.status}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
				>
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
					<option value="banned">Banned</option>
				</select>
			</div>

			<div class="flex items-center">
				<input
					type="checkbox"
					bind:checked={formData.verified}
					class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
				/>
				<label class="ml-2 block text-sm text-gray-900">Email Verified</label>
			</div>

			<div class="border-t pt-4">
				<p class="mb-2 text-sm font-medium text-gray-700">
					{isEditing ? 'Change Password (leave blank to keep current)' : 'Password *'}
				</p>
				<div class="space-y-3">
					<input
						type="password"
						bind:value={formData.password}
						placeholder="Password"
						required={!isEditing}
						class="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
					<input
						type="password"
						bind:value={formData.passwordConfirm}
						placeholder="Confirm Password"
						required={!isEditing}
						class="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
					/>
				</div>
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
					{isEditing ? 'Update' : 'Create'} User
				</button>
			</div>
		</form>
	</Modal>
</div>
