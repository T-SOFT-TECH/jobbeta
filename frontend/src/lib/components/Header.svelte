<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import {
		getNavItems,
		getMainNavItems,
		hasCustomNav,
		type NavItem
	} from '$lib/config/headerConfig';
	import { onMount } from 'svelte';
	import { links } from '$lib/config/site';
	import Logo from '$lib/components/ui/Logo.svelte';

	let { class: className = '' } = $props();

	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);
	let showMainNav = $state(false); // Controls whether to show main nav or page-specific nav

	// Dynamic navigation items based on current route
	let pageNavItems: NavItem[] = $derived(getNavItems($page.url.pathname));
	let mainNavItems: NavItem[] = $derived(getMainNavItems());

	// Check if current page has custom nav (different from main nav)
	let hasPageSpecificNav = $derived(hasCustomNav($page.url.pathname));

	// The nav items to display in mobile menu
	let mobileNavItems: NavItem[] = $derived(showMainNav ? mainNavItems : pageNavItems);

	// Desktop always shows page-specific nav
	let navItems: NavItem[] = $derived(pageNavItems);

	// Scroll detection for header style transition
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Check initial scroll position

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
			showMainNav = false; // Reset to page-specific nav when opening
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
		document.body.style.overflow = '';
		showMainNav = false; // Reset state
	}

	function goToMainNav() {
		showMainNav = true;
	}

	function goBackToPageNav() {
		showMainNav = false;
	}

	function isActive(path: string) {
		return $page.url.pathname === path;
	}
</script>

<header
	class="sticky top-0 z-50 w-full transition-all duration-300 ease-in-out {isScrolled
		? 'bg-white shadow-md'
		: 'bg-white/70 backdrop-blur-xl'} {className}"
	style="view-transition-name: site-header"
>
	<div class="page-container relative z-50 flex h-16 items-center justify-between lg:h-[72px]">
		<!-- Logo -->
		<div class="flex items-center gap-10 xl:gap-14">
			<a href="/" class="flex items-center" onclick={closeMobileMenu}>
				<Logo />
			</a>

			<!-- Desktop Navigation (Dynamic) -->
			<!-- The active pill is its own element, named the same on every page, so the browser
			     slides it to the new link during a page transition. Labels are named too, so a link
			     that exists in both menus glides to its new spot and stays above the pill. -->
			<nav class="hidden items-center gap-1 lg:flex xl:gap-2">
				{#each navItems as item (item.href)}
					{@const active = isActive(item.href)}
					<a
						href={item.href}
						aria-current={active ? 'page' : undefined}
						class="relative isolate rounded-full px-3 py-1.5 font-geist text-base leading-6 tracking-[-0.08px] transition-colors duration-200 hover:text-primary {active
							? 'font-semibold text-primary'
							: 'font-normal text-[#2a2c2c]'}"
					>
						{#if active}
							<span
								aria-hidden="true"
								class="absolute inset-0 -z-10 rounded-full bg-primary/10"
								style="view-transition-name: nav-active; view-transition-class: nav-pill"
							></span>
						{/if}
						<span
							style="view-transition-name: nav-{item.href.slice(1).replace(/[^a-z0-9]+/g, '-')}; view-transition-class: nav-label"
						>
							{item.label}
						</span>
					</a>
				{/each}
			</nav>
		</div>

		<!-- Desktop Auth Buttons -->
		<div class="hidden items-center gap-2 lg:flex">
			<a href={links.login} class="btn px-4 py-2.5 text-[#2a2c2c] hover:bg-neutral-grey/60">
				Login
			</a>
			<a href={links.signUp} class="btn btn-primary px-5 py-2.5">Join Waitlist</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="relative z-[70] flex items-center justify-center p-2 lg:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle mobile menu"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke={isMobileMenuOpen ? 'white' : 'currentColor'}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="transition-colors duration-300"
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
</header>

<!-- Full Screen Mobile Menu Overlay - OUTSIDE header for proper full-screen coverage -->
{#if isMobileMenuOpen}
	<!-- Backdrop covering entire screen -->
	<button
		class="fixed inset-0 z-[100] h-screen w-screen bg-black/50 lg:hidden"
		onclick={closeMobileMenu}
		aria-label="Close menu"
	></button>

	<!-- Slide-in Menu Panel from Right -->
	<div
		class="mobile-menu-panel fixed top-0 right-0 z-[101] flex h-screen w-[85%] max-w-[320px] flex-col bg-secondary lg:hidden"
		style="background-color: #110d21 !important; height: 100vh; height: 100dvh;"
	>
		<!-- Menu Header with Logo -->
		<div class="flex h-16 shrink-0 items-center justify-between bg-secondary px-6">
			<a href="/" class="flex items-center" onclick={closeMobileMenu} aria-label="Go to home">
				<Logo tone="light" />
			</a>

			<!-- Close Button -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
				onclick={closeMobileMenu}
				aria-label="Close menu"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</div>

		<!-- Gradient Accent Line -->
		<div
			class="h-px w-full shrink-0 bg-gradient-to-r from-[#7502ff] to-transparent opacity-70"
		></div>

		<!-- Back Button / View All Menu Button -->
		{#if hasPageSpecificNav}
			<div class="shrink-0 px-6 pt-4">
				{#if showMainNav}
					<!-- Back to page-specific nav -->
					<button
						class="mobile-nav-item flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
						style="--stagger-index: 0"
						onclick={goBackToPageNav}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M19 12H5M12 19l-7-7 7-7" />
						</svg>
						Back to Page Menu
					</button>
				{:else}
					<!-- Back to main menu -->
					<button
						class="mobile-nav-item flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
						style="--stagger-index: 0"
						onclick={goToMainNav}
					>
						<div class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M19 12H5M12 19l-7-7 7-7" />
							</svg>
						</div>
						Back to Main Menu
					</button>
				{/if}
			</div>
		{/if}

		<!-- Navigation Links -->
		<nav class="flex flex-1 flex-col gap-2 overflow-y-auto bg-secondary px-6 py-4">
			{#each mobileNavItems as link, index (link.href)}
				<a
					href={link.href}
					class="mobile-nav-item rounded-lg px-4 py-3 font-geist text-lg font-medium transition-colors {isActive(
						link.href
					)
						? 'bg-[#7502ff] text-white'
						: 'text-white/80 hover:bg-white/10 hover:text-white'}"
					style="--stagger-index: {index + (hasPageSpecificNav ? 1 : 0)}"
					onclick={closeMobileMenu}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Bottom Auth Buttons -->
		<div class="flex shrink-0 flex-col gap-3 bg-secondary px-6 pb-8">
			<a
				href={links.login}
				class="mobile-nav-item flex w-full items-center justify-center rounded-full border border-white/30 py-3.5 font-geist text-base font-bold text-white transition-colors hover:bg-white/10"
				style="--stagger-index: {mobileNavItems.length + (hasPageSpecificNav ? 1 : 0)}"
				onclick={closeMobileMenu}
			>
				Login
			</a>
			<a
				href={links.signUp}
				class="mobile-nav-item flex w-full items-center justify-center rounded-full bg-[#7502ff] py-3.5 font-geist text-base font-bold text-white transition-colors hover:bg-[#6002d1]"
				style="--stagger-index: {mobileNavItems.length + (hasPageSpecificNav ? 2 : 1)}"
				onclick={closeMobileMenu}
			>
				Join Waitlist
			</a>
		</div>
	</div>
{/if}

<style>
	/* Mobile Menu Slide-in from Right */
	.mobile-menu-panel {
		background: #110d21 !important;
		animation: slideInRight 0.3s ease-out forwards;
	}

	@keyframes slideInRight {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	/* Staggered Nav Item Animation */
	.mobile-nav-item {
		opacity: 0;
		transform: translateX(30px);
		animation: staggerFadeIn 0.4s ease-out forwards;
		animation-delay: calc(0.1s + var(--stagger-index, 0) * 0.08s);
	}

	@keyframes staggerFadeIn {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
