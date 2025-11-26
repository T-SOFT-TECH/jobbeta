<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isAuthorized = $state(false);

	onMount(() => {
		pb.authStore.onChange(() => {
			checkAuth();
		});
		checkAuth();
	});

	function checkAuth() {
		const userRole = pb.authStore.record?.role;

		if (!pb.authStore.isValid || userRole !== 'admin') {
			// Not authenticated or not an admin - redirect to main login
			goto('/login');
		} else {
			isAuthorized = true;
		}
	}

	function logout() {
		pb.authStore.clear();
		goto('/login');
	}
</script>

{#if isAuthorized}
	<div class="flex h-screen bg-gray-100">
		<!-- Sidebar -->
		<aside class="w-64 bg-white shadow-md">
			<div class="p-6">
				<h1 class="text-2xl font-bold text-purple-600">JobBeta Admin</h1>
			</div>
			<nav class="mt-6">
				<a
					href="/admin"
					class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url
						.pathname === '/admin'
						? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
						: ''}"
				>
					Dashboard
				</a>

				<div class="mt-6">
					<p class="px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
						User Management
					</p>
					<a
						href="/admin/users"
						class="mt-2 block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/users'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Users
					</a>
				</div>

				<div class="mt-6">
					<p class="px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
						Job Management
					</p>
					<a
						href="/admin/companies"
						class="mt-2 block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/companies'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Companies
					</a>
					<a
						href="/admin/job-categories"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/job-categories'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Job Categories
					</a>
					<a
						href="/admin/jobs"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/jobs'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Jobs
					</a>
					<a
						href="/admin/applications"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/applications'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Applications
					</a>
				</div>

				<div class="mt-6">
					<p class="px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
						Content Management
					</p>
					<a
						href="/admin/blog-posts"
						class="mt-2 block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/blog-posts'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Blog Posts
					</a>
					<a
						href="/admin/career-tips"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/career-tips'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Career Tips
					</a>
					<a
						href="/admin/testimonials"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/testimonials'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Testimonials
					</a>
					<a
						href="/admin/partners"
						class="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 {$page.url.pathname.startsWith(
							'/admin/partners'
						)
							? 'border-r-4 border-purple-600 bg-purple-50 text-purple-600'
							: ''}"
					>
						Partners
					</a>
				</div>
			</nav>
			<div class="absolute bottom-0 w-64 border-t p-6">
				<button
					onclick={logout}
					class="flex items-center text-gray-600 transition-colors hover:text-red-600"
				>
					<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						/>
					</svg>
					Logout
				</button>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 overflow-y-auto p-8">
			{@render children()}
		</main>
	</div>
{:else}
	<div class="flex h-screen items-center justify-center">
		<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-purple-600"></div>
	</div>
{/if}
