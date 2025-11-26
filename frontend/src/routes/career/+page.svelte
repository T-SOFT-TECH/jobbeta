<script lang="ts">
	// No additional scripts needed for now
</script>

<style>
	@keyframes orbit {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.orbit-container {
		animation: orbit 60s linear infinite;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.float-icon {
		animation: float 3s ease-in-out infinite;
	}
</style>

<svelte:head>
	<title>Career - JobBeta</title>
	<meta name="description" content="Join the JobBeta team and help shape the future of careers" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-white">
	<div class="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[101px] py-16 md:py-24">
		<div class="text-center mb-12">
			<h1 class="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-[#110d21] mb-6">
				Come Work at JobBeta
			</h1>
			<p class="font-geist text-lg md:text-xl text-[#2a2c2c] max-w-3xl mx-auto mb-4">
				Your next career move could help shape the future of countless others.
			</p>
			<p class="font-geist text-base md:text-lg text-[#2a2c2c] mb-8">
				Apply now and be part of something impactful.
			</p>
			<a
				href="#positions"
				class="inline-flex items-center justify-center rounded-[20px] bg-primary px-8 py-4 font-geist text-base font-bold text-white hover:bg-[#6502dd] transition-colors"
			>
				Explore Our Open Positions
			</a>
		</div>

		<!-- Hero Image -->
		<div class="max-w-5xl mx-auto">
			<div class="relative rounded-2xl overflow-hidden shadow-2xl">
				<img
					src="/images/career/career-hero.webp"
					alt="JobBeta Team"
					class="w-full h-auto"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Career Opportunities Section -->
<section class="bg-[#110d21] relative overflow-hidden">
	<div class="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[101px] py-20 md:py-32">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Left Content -->
			<div class="text-white">
				<p class="font-geist text-sm md:text-base font-medium tracking-wider uppercase mb-4 text-white/80">
					READY TO START YOUR CAREER?
				</p>
				<h2 class="font-geist text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
					Looking to advance your career with opportunities that keep you informed and ahead?
				</h2>
				<p class="font-geist text-base md:text-lg text-white/90 mb-8 leading-relaxed">
					Our expertise in AI and tech, paired with a passion for career solutions, keeps us driven to support your success.
				</p>
				<a
					href="#positions"
					class="inline-flex items-center justify-center rounded-[20px] bg-white px-8 py-4 font-geist text-base font-bold text-[#110d21] hover:bg-gray-100 transition-colors"
				>
					Explore Our Open Positions
				</a>
			</div>

			<!-- Right Side - Orbital Animation -->
			<div class="relative flex items-center justify-center min-h-[500px]">
				<!-- Center Circle -->
				<div class="relative z-10 bg-white rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-2xl">
					<div class="text-center">
						<div class="text-4xl font-bold text-[#110d21] mb-1">+ 20</div>
						<div class="text-sm font-medium text-[#62717a]">other openings</div>
					</div>
				</div>

				<!-- Orbital Rings -->
				<div class="absolute inset-0 flex items-center justify-center">
					<!-- Inner Ring -->
					<div class="absolute w-80 h-80 rounded-full border-2 border-white/20"></div>

					<!-- Outer Ring -->
					<div class="absolute w-[480px] h-[480px] rounded-full border-2 border-white/10"></div>

					<!-- Icon 1 - Top -->
					<div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg" style="transform: translate(-50%, -24px);">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#7502ff"/>
						</svg>
					</div>

					<!-- Icon 2 - Top Right -->
					<div class="absolute" style="top: 15%; right: 8%; width: 48px; height: 48px;">
						<div class="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
							<div class="w-8 h-8 bg-[#00a86b] rounded-full flex items-center justify-center text-white font-bold text-xs">
								EN
							</div>
						</div>
					</div>

					<!-- Icon 3 - Right -->
					<div class="absolute" style="top: 50%; right: 0; transform: translateY(-50%);">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect x="4" y="4" width="16" height="16" rx="2" fill="#3b82f6"/>
							</svg>
						</div>
					</div>

					<!-- Icon 4 - Bottom Right -->
					<div class="absolute" style="bottom: 15%; right: 8%;">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<div class="w-8 h-8 bg-[#f59e0b] rounded-full"></div>
						</div>
					</div>

					<!-- Icon 5 - Bottom -->
					<div class="absolute" style="bottom: 0; left: 50%; transform: translate(-50%, 24px);">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="12" r="8" fill="#06b6d4"/>
							</svg>
						</div>
					</div>

					<!-- Icon 6 - Bottom Left -->
					<div class="absolute" style="bottom: 15%; left: 8%;">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<div class="w-8 h-8 bg-[#ec4899] rounded-full flex items-center justify-center text-white font-bold text-xs">
								FN
							</div>
						</div>
					</div>

					<!-- Icon 7 - Left -->
					<div class="absolute" style="top: 50%; left: 0; transform: translateY(-50%);">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8b5cf6"/>
								<path d="M2 17L12 22L22 17" stroke="#8b5cf6" stroke-width="2"/>
							</svg>
						</div>
					</div>

					<!-- Icon 8 - Top Left -->
					<div class="absolute" style="top: 15%; left: 8%;">
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
							<div class="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white font-bold text-xs">
								ALS
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Open Positions Section -->
<section id="positions" class="bg-white">
	<div class="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[101px] py-20">
		<div class="text-center">
			<h2 class="font-geist text-3xl md:text-4xl font-bold text-[#110d21] mb-6">
				Open Positions
			</h2>
			<p class="font-geist text-lg text-[#62717a] mb-12">
				We're currently building our team. Check back soon for exciting opportunities!
			</p>
			<!-- Placeholder for job listings -->
			<div class="max-w-2xl mx-auto p-12 border-2 border-dashed border-gray-300 rounded-xl">
				<p class="font-geist text-base text-[#62717a]">
					No open positions at the moment. Stay tuned!
				</p>
			</div>
		</div>
	</div>
</section>
