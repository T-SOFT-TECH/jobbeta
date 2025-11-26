<script lang="ts">
	import { pb } from '$lib/pocketbase';

	let authData = $state(null);

	$effect(() => {
		if (pb.authStore.isValid) {
			authData = {
				isValid: pb.authStore.isValid,
				record: pb.authStore.record,
				token: pb.authStore.token ? 'exists' : 'none'
			};
		}
	});
</script>

<div class="min-h-screen bg-gray-100 p-8">
	<div class="mx-auto max-w-4xl">
		<h1 class="mb-6 text-3xl font-bold">Debug: Auth Data</h1>

		{#if pb.authStore.isValid}
			<div class="rounded-lg bg-white p-6 shadow">
				<h2 class="mb-4 text-xl font-semibold">Current User Data</h2>
				<pre class="overflow-auto rounded bg-gray-50 p-4 text-sm">{JSON.stringify(
					authData,
					null,
					2
				)}</pre>

				<div class="mt-6">
					<h3 class="mb-2 font-semibold">Quick Check:</h3>
					<ul class="space-y-2">
						<li>
							<strong>Email:</strong>
							{pb.authStore.record?.email || 'N/A'}
						</li>
						<li>
							<strong>Name:</strong>
							{pb.authStore.record?.name || 'N/A'}
						</li>
						<li>
							<strong>Role:</strong>
							<span class="font-mono text-purple-600">{pb.authStore.record?.role || 'MISSING'}</span>
						</li>
						<li>
							<strong>Status:</strong>
							{pb.authStore.record?.status || 'N/A'}
						</li>
					</ul>
				</div>

				{#if !pb.authStore.record?.role}
					<div class="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
						<p class="font-semibold text-red-800">⚠️ Role field is missing!</p>
						<p class="mt-2 text-sm text-red-700">
							You need to add the <code class="rounded bg-red-100 px-1">role</code> field to your user
							account in PocketBase.
						</p>
					</div>
				{:else if pb.authStore.record?.role !== 'admin'}
					<div class="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
						<p class="font-semibold text-yellow-800">
							⚠️ Role is "{pb.authStore.record?.role}" but needs to be "admin"
						</p>
						<p class="mt-2 text-sm text-yellow-700">
							Update your user's role to <code class="rounded bg-yellow-100 px-1">admin</code> in PocketBase.
						</p>
					</div>
				{:else}
					<div class="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
						<p class="font-semibold text-green-800">✓ Role is set to "admin"</p>
						<p class="mt-2 text-sm text-green-700">You should be able to access the admin panel.</p>
						<a
							href="/admin"
							class="mt-3 inline-block rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
						>
							Go to Admin Panel →
						</a>
					</div>
				{/if}
			</div>
		{:else}
			<div class="rounded-lg bg-white p-6 shadow">
				<p class="text-gray-600">Not logged in. Please <a href="/login" class="text-purple-600 hover:underline">login</a> first.</p>
			</div>
		{/if}
	</div>
</div>
