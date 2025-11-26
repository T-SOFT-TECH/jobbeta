<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import StatsCard from '$lib/components/admin/StatsCard.svelte';

	let stats = $state({
		users: 0,
		jobs: 0,
		applications: 0,
		companies: 0,
		blogPosts: 0,
		careerTips: 0
	});

	let recentActivity = $state([]);
	let loading = $state(true);

	onMount(async () => {
		await loadDashboardData();
	});

	async function loadDashboardData() {
		loading = true;
		try {
			const [users, jobs, applications, companies, blogPosts, careerTips] = await Promise.all([
				pb.collection('users').getList(1, 1).catch(() => ({ totalItems: 0 })),
				pb.collection('jobs').getList(1, 1).catch(() => ({ totalItems: 0 })),
				pb.collection('job_applications').getList(1, 1).catch(() => ({ totalItems: 0 })),
				pb.collection('companies').getList(1, 1).catch(() => ({ totalItems: 0 })),
				pb.collection('blog_posts').getList(1, 1).catch(() => ({ totalItems: 0 })),
				pb.collection('career_tips').getList(1, 1).catch(() => ({ totalItems: 0 }))
			]);

			stats = {
				users: users.totalItems || 0,
				jobs: jobs.totalItems || 0,
				applications: applications.totalItems || 0,
				companies: companies.totalItems || 0,
				blogPosts: blogPosts.totalItems || 0,
				careerTips: careerTips.totalItems || 0
			};

			const recentJobs = await pb.collection('jobs').getList(1, 5, {
				sort: '-created'
			}).catch(() => ({ items: [] }));

			recentActivity = recentJobs.items || [];
		} catch (e) {
			console.error('Error loading dashboard data:', e);
		} finally {
			loading = false;
		}
	}

	const userIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>';
	const briefcaseIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>';
	const documentIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>';
	const officeIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>';
</script>

<div>
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
		<p class="mt-2 text-gray-600">
			Welcome back, <span class="font-medium text-purple-600">{pb.authStore.record?.name || pb.authStore.record?.email}</span>
		</p>
	</div>

	{#if loading}
		<div class="py-20 text-center">
			<div class="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-purple-600"></div>
		</div>
	{:else}
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<StatsCard title="Total Users" value={stats.users} icon={userIcon} />
			<StatsCard title="Total Jobs" value={stats.jobs} icon={briefcaseIcon} />
			<StatsCard title="Applications" value={stats.applications} icon={documentIcon} />
			<StatsCard title="Companies" value={stats.companies} icon={officeIcon} />
			<StatsCard title="Blog Posts" value={stats.blogPosts} icon={documentIcon} />
			<StatsCard title="Career Tips" value={stats.careerTips} icon={documentIcon} />
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h3 class="mb-4 text-lg font-semibold text-gray-700">Quick Actions</h3>
				<div class="flex flex-col gap-2">
					<a href="/admin/jobs" class="text-purple-600 hover:underline">Create New Job &rarr;</a>
					<a href="/admin/users" class="text-purple-600 hover:underline">Manage Users &rarr;</a>
					<a href="/admin/applications" class="text-purple-600 hover:underline"
						>Review Applications &rarr;</a
					>
					<a href="/admin/blog-posts" class="text-purple-600 hover:underline"
						>Create Blog Post &rarr;</a
					>
					<a href="/admin/testimonials" class="text-purple-600 hover:underline"
						>Manage Testimonials &rarr;</a
					>
				</div>
			</div>

			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h3 class="mb-4 text-lg font-semibold text-gray-700">Recent Jobs</h3>
				{#if recentActivity.length > 0}
					<div class="space-y-3">
						{#each recentActivity as job}
							<div class="border-b border-gray-100 pb-3 last:border-b-0">
								<p class="font-medium text-gray-900">{job.title}</p>
								<p class="text-sm text-gray-500">
									{new Date(job.created).toLocaleDateString()}
								</p>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-gray-500">No recent jobs found.</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
