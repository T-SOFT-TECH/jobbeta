<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	let { class: className = '' } = $props();

	let isMobileMenuOpen = $state(false);

	const mobileLinks = [
		{ href: '/products', label: 'Products' },
		{ href: '/solutions', label: 'Solutions' },
		{ href: '/why-jobbeta', label: 'Why JobBeta?' },
		{ href: '/student', label: 'Student' },
		{ href: '/employer', label: 'Employer' },
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/jobs', label: 'Jobs' },
		{ href: '/career-tips', label: 'Career Tips' },
		{ href: '/about', label: 'About Us' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/how-it-works', label: 'How It Works' }
	];

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
		document.body.style.overflow = '';
	}

	function isActive(path: string) {
		return $page.url.pathname === path;
	}
</script>

<header class="sticky top-0 z-50 w-full bg-white shadow-sm {className}">
	<div
		class="relative z-50 mx-auto flex h-20 max-w-[1600px] items-center justify-between bg-white px-6 md:px-10 lg:px-[101px]"
	>
		<!-- Logo -->
		<div class="flex items-center gap-10 lg:gap-[40px] xl:gap-[60px]">
			<a href="/" class="flex items-center" onclick={closeMobileMenu}>
				<svg width="112" height="24" viewBox="0 0 112 24" fill="none">
					<text
						x="0"
						y="18"
						font-family="Geist, sans-serif"
						font-size="20"
						font-weight="700"
						fill="#7502FF"
					>
						JobBeta
					</text>
				</svg>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-4 lg:flex xl:gap-6">
				<a
					href="/products"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/products'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Products
				</a>
				<a
					href="/solutions"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/solutions'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Solutions
				</a>
				<a
					href="/why-jobbeta"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/why-jobbeta'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Why JobBeta?
				</a>
				<a
					href="/students"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/students'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Students
				</a>
				<div class="group relative flex items-center gap-2">
					<a
						href="/employers"
						class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
							'/employers'
						)
							? 'text-primary font-bold'
							: 'font-normal text-[#2a2c2c]'}"
					>
						Employers
					</a>
				</div>
				<a
					href="/career-centers"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/career-centers'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Career Centers
				</a>
				<a
					href="/jobs"
					class="font-geist hover:text-primary text-base leading-6 tracking-[-0.08px] {isActive(
						'/jobs'
					)
						? 'text-primary font-bold'
						: 'font-normal text-[#2a2c2c]'}"
				>
					Jobs
				</a>
			</nav>
		</div>

		<!-- Desktop Auth Buttons -->
		<div class="hidden items-center gap-5 lg:flex">
			<a
				href="/login"
				class="font-geist flex items-center justify-center rounded-[20px] px-[10px] py-4 text-base font-bold leading-6 tracking-[-0.08px] text-[#2a2c2c] hover:bg-gray-100"
			>
				Login
			</a>
			<a
				href="/signup"
				class="bg-primary font-geist flex items-center justify-center rounded-[20px] px-[10px] py-4 text-base font-bold leading-6 tracking-[-0.08px] text-white transition-colors hover:bg-[#6002d1]"
			>
				Sign Up
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="relative z-[60] flex items-center justify-center p-2 lg:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle mobile menu"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{#if isMobileMenuOpen}
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				{:else}
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Menu Overlay (Slide in from right, below header) -->
	{#if isMobileMenuOpen}
		<div
			transition:fly={{ x: 1000, duration: 400, opacity: 1 }}
			class="fixed bottom-0 right-0 top-20 z-40 w-full overflow-y-auto border-t border-gray-100 bg-white px-6 pb-10 pt-8 shadow-lg lg:hidden"
		>
			<nav class="flex flex-col items-center gap-6 text-center">
				{#each mobileLinks as link, i}
					<a
						href={link.href}
						class="font-geist hover:text-primary text-xl {isActive(link.href)
							? 'text-primary font-bold'
							: 'font-medium text-[#2a2c2c]'}"
						onclick={closeMobileMenu}
						in:fly={{ y: 20, duration: 400, delay: 300 + i * 100 }}
					>
						{link.label}
					</a>
				{/each}

				<hr
					class="my-4 w-full border-gray-200"
					in:fly={{ y: 20, duration: 400, delay: 300 + mobileLinks.length * 100 }}
				/>

				<div
					class="flex w-full max-w-xs flex-col gap-4"
					in:fly={{ y: 20, duration: 400, delay: 300 + mobileLinks.length * 100 + 100 }}
				>
					<a
						href="/login"
						class="font-geist flex w-full items-center justify-center rounded-[20px] border border-gray-200 py-4 text-base font-bold text-[#2a2c2c]"
						onclick={closeMobileMenu}
					>
						Login
					</a>
					<a
						href="/signup"
						class="bg-primary font-geist flex w-full items-center justify-center rounded-[20px] py-4 text-base font-bold text-white"
						onclick={closeMobileMenu}
					>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
