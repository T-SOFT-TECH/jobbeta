<script lang="ts">
	let { class: className = '' } = $props();
	let email = $state('');
	let currentYear = $state(new Date().getFullYear());
</script>

<footer class="relative w-full overflow-hidden bg-[#1a1625] {className}">
	<div class="relative mx-auto max-w-full px-4 md:px-10 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32">
		<!-- Top Section -->
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
			<!-- Left Content -->
			<div class="flex flex-col gap-6">
				<!-- Logo with Icon -->
				<div class="flex items-center gap-2">
					<div class="w-8 h-8 bg-[#7502ff] rounded-lg flex items-center justify-center">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
							<circle cx="10" cy="10" r="8" fill="white"/>
						</svg>
					</div>
					<span class="font-geist text-2xl font-bold text-white">JobBeta</span>
				</div>

				<div class="flex flex-col gap-4 text-white max-w-md">
					<h3 class="font-geist text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
						Need that dream Job or career change?
					</h3>
					<p class="font-geist text-base font-normal leading-6">
						Stay updated with our announcement, tips and News
					</p>
				</div>
			</div>

			<!-- Newsletter -->
			<div class="flex items-start lg:items-center lg:justify-end">
				<div class="flex w-full max-w-md">
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your Email Address"
						class="flex-1 h-14 px-4 rounded-l-lg bg-[rgba(255,255,255,0.14)] font-geist text-base text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-[#7502ff]"
					/>
					<button
						class="h-14 w-14 flex items-center justify-center rounded-r-lg bg-[#7502ff] hover:bg-[#6502dd] transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Footer Links -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16 relative">
			<!-- Company -->
			<div class="flex flex-col gap-6">
				<h4 class="font-geist text-xl md:text-2xl font-bold text-white">
					Company
				</h4>
				<div class="flex flex-col gap-4 font-geist text-base font-normal text-white">
					<a href="/about" class="hover:text-[#7502ff] transition-colors">About us</a>
					<a href="/why-jobbeta" class="hover:text-[#7502ff] transition-colors">Why JobBeta</a>
					<a href="/join" class="hover:text-[#7502ff] transition-colors">Join Us</a>
					<a href="/blog" class="hover:text-[#7502ff] transition-colors">Blog</a>
					<a href="/privacy" class="hover:text-[#7502ff] transition-colors">Privacy Policy</a>
				</div>
			</div>

			<!-- Students -->
			<div class="flex flex-col gap-6">
				<h4 class="font-geist text-xl md:text-2xl font-bold text-white">
					Students
				</h4>
				<div class="flex flex-col gap-4 font-geist text-base font-normal text-white">
					<a href="/how-it-works" class="hover:text-[#7502ff] transition-colors">How it works</a>
					<a href="/jobs" class="hover:text-[#7502ff] transition-colors">Jobs</a>
					<a href="/help" class="hover:text-[#7502ff] transition-colors">Help center</a>
				</div>
			</div>

			<!-- Employers -->
			<div class="flex flex-col gap-6">
				<h4 class="font-geist text-xl md:text-2xl font-bold text-white">
					Employers
				</h4>
				<div class="flex flex-col gap-4 font-geist text-base font-normal text-white">
					<a href="/solutions" class="hover:text-[#7502ff] transition-colors">Solutions</a>
					<a href="/products" class="hover:text-[#7502ff] transition-colors">Products</a>
					<a href="/blog" class="hover:text-[#7502ff] transition-colors">Blog</a>
					<a href="/demo" class="hover:text-[#7502ff] transition-colors">Demo</a>
				</div>
			</div>

			<!-- Career Centers -->
			<div class="flex flex-col gap-6">
				<h4 class="font-geist text-xl md:text-2xl font-bold text-white">
					Career Centers
				</h4>
				<div class="flex flex-col gap-4 font-geist text-base font-normal text-white">
					<a href="/events" class="hover:text-[#7502ff] transition-colors">Events</a>
					<a href="/demo" class="hover:text-[#7502ff] transition-colors">Demo</a>
					<a href="/blog" class="hover:text-[#7502ff] transition-colors">Blog</a>
				</div>
			</div>


		</div>

	</div>

	<!-- Illustration (hidden on mobile/tablet) -->
	<div class="hidden xl:block absolute right-0 bottom-[9rem] w-[400px] h-[400px] pointer-events-none">
		<img src="/icons/Graphic_elements-footer.svg" alt="" class="w-full h-full object-contain" />
	</div>

	<!-- Bottom Bar with Wave -->
	<div class="relative">
		<!-- Purple Wave Vector -->
		<img src="/icons/Footer-Vector.svg" alt="" class="w-full " />

		<!-- Bottom Content -->
		<div class="bg-[#7502ff] py-6">
			<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<p class="font-geist text-base text-white">
					Copyright@{currentYear}. All rights Reserved
				</p>
				<div class="flex gap-6 font-geist text-base text-white">
					<a href="https://linkedin.com" class="hover:underline transition-all">LinkedIn</a>
					<a href="https://twitter.com" class="hover:underline transition-all">Twitter</a>
					<a href="https://facebook.com" class="hover:underline transition-all">Facebook</a>
					<a href="https://instagram.com" class="hover:underline transition-all">Instagram</a>
				</div>
			</div>
		</div>
	</div>
</footer>
