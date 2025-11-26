<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let activeIndex = $state(0);
	let innerWidth = $state(0);

	// Duplicating to match the "06" count in the design reference
	const testimonials = [
		{
			name: 'Mr. Ade',
			role: 'Business Owner',
			image: 'Ellipse 229.png',
			quote:
				'"We hired an incredible intern in just a few days! JobBeta made the recruitment process seamless."'
		},
		{
			name: 'Alex',
			role: 'HR Manager',
			image: 'Ellipse 229-1.png',
			quote:
				'"JobBeta helped us find young, skilled professionals who perfectly fit our company culture."'
		},
		{
			name: 'Linda',
			role: 'Tech Start Up Founder',
			image: 'Ellipse 229-2.png',
			quote:
				'"As a startup, we needed fresh talent quickly. JobBeta connected us with top graduates, and we couldn’t be happier!"'
		},
		{
			name: 'Sarah',
			role: 'Recruiter',
			image: 'Ellipse 229.png',
			quote: '"The platform is intuitive and the candidates are top-notch. Highly recommended!"'
		},
		{
			name: 'John',
			role: 'CTO',
			image: 'Ellipse 229-1.png',
			quote: '"Found our lead developer here. The skills assessment feature is a lifesaver."'
		},
		{
			name: 'Emily',
			role: 'Director',
			image: 'Ellipse 229-2.png',
			quote: '"Great support team and excellent candidate pool. Will definitely use again."'
		}
	];

	let cardsToShow = $derived(innerWidth < 768 ? 1 : 3);
	let cardWidth = $derived(innerWidth < 768 ? innerWidth - 64 : 404); // Mobile: full width minus padding, Desktop: 404px
	let gap = 20;

	let totalSlides = $derived(testimonials.length);
	let maxIndex = $derived(Math.max(0, totalSlides - cardsToShow));

	function nextSlide() {
		if (activeIndex < maxIndex) {
			activeIndex++;
		} else {
			activeIndex = 0; // Loop back to start
		}
	}

	function prevSlide() {
		if (activeIndex > 0) {
			activeIndex--;
		} else {
			activeIndex = maxIndex; // Loop to end
		}
	}
</script>

<svelte:window bind:innerWidth />

<section class="relative overflow-hidden py-12 md:py-24">
	<!-- Purple Container -->
	<div class="container relative z-10 mx-auto px-4">
		<div
			class="bg-primary relative flex min-h-[800px] flex-col items-center overflow-hidden rounded-[20px] px-4 py-12 md:min-h-[1302px] md:px-0 md:py-20"
		>
			<!-- Decorative Circles Background -->
			<div class="pointer-events-none absolute inset-0">
				{#each Array(12) as _, i}
					<div
						class="absolute h-[100px] w-[100px] rounded-full border border-white opacity-20 md:h-[148px] md:w-[148px]"
						style="
                            top: {Math.random() * 50}%; 
                            left: {Math.random() * 100}%; 
                            transform: rotate(-14deg);
                        "
					></div>
				{/each}
			</div>

			<!-- Header -->
			<div
				class="relative z-10 mb-12 flex w-full max-w-[1252px] flex-col items-start justify-between gap-8 px-4 md:mb-16 md:flex-row md:items-end md:px-8"
			>
				<div class="flex flex-col gap-2">
					<p class="font-geist text-sm font-medium text-white/85">Success Stories</p>
					<h2
						class="font-geist text-3xl font-bold leading-tight text-white md:text-[40px] md:leading-[51px]"
					>
						Employer Testimonials & Success Stories
					</h2>
				</div>
				<p
					class="font-geist max-w-[487px] text-lg font-medium leading-relaxed text-white/85 md:text-xl md:leading-[30px]"
				>
					Hear from companies that have found exceptional talent through JobBeta. Join these
					successful employers – Post your job today!
				</p>
			</div>

			<!-- Carousel Controls & Cards Container -->
			<div class="relative z-10 mb-32 flex w-full max-w-[1252px] flex-col gap-8 md:gap-[42px]">
				<!-- Navigation Controls (Right Aligned) -->
				<div class="flex items-center justify-end gap-[17px] self-end px-4 md:px-0">
					<!-- Prev Button -->
					<button
						onclick={prevSlide}
						class="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] border border-white transition-colors hover:bg-white/10 md:h-[60px] md:w-[60px]"
					>
						<img
							src="{base}/icons/employers/keyboard-arrow-down5.svg"
							alt="Prev"
							class="h-6 w-6 opacity-60 md:h-[30px] md:w-[30px]"
						/>
					</button>

					<!-- Counter -->
					<div class="font-geist text-lg text-white/80 md:text-xl">
						<span>0{activeIndex + 1}/</span><span class="text-white/50">0{totalSlides}</span>
					</div>

					<!-- Next Button -->
					<button
						onclick={nextSlide}
						class="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] border border-white bg-[#f8f3ff]/20 transition-colors hover:bg-[#f8f3ff]/30 md:h-[60px] md:w-[60px]"
					>
						<img
							src="{base}/icons/employers/keyboard-arrow-down6.svg"
							alt="Next"
							class="h-6 w-6 md:h-[30px] md:w-[30px]"
						/>
					</button>
				</div>

				<!-- Cards Track -->
				<div class="w-full overflow-hidden px-4 md:px-0">
					<div
						class="flex gap-5 transition-transform duration-500 ease-in-out"
						style="transform: translateX(-{activeIndex * (cardWidth + gap)}px);"
					>
						{#each testimonials as testimonial}
							<div
								class="relative shrink-0 overflow-hidden rounded-2xl border border-white bg-white px-6 pb-8 pt-12 md:h-[536px] md:px-[26px] md:pt-[53px]"
								style="width: {cardWidth}px;"
							>
								<div class="flex w-full flex-col gap-6">
									<!-- Header: Name and Role -->
									<div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
										<h3
											class="font-geist text-2xl font-bold leading-tight text-[#2a2c2c] md:text-[32px] md:leading-[48px]"
										>
											{testimonial.name}
										</h3>
										<div class="flex flex-col justify-center gap-1">
											<span class="font-geist text-sm text-[#2a2c2c]/90">{testimonial.role}</span>
										</div>
									</div>

									<!-- Image -->
									<img
										src="{base}/images/employers/{testimonial.image}"
										alt={testimonial.name}
										class="mx-auto h-[200px] w-[200px] object-cover md:h-[267.25px] md:w-[240.9px]"
									/>

									<!-- Quote -->
									<div class="flex flex-col gap-[30px]">
										<p
											class="font-geist text-lg font-medium leading-relaxed text-[#2a2c2c] md:text-xl md:leading-[30px]"
										>
											{testimonial.quote}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Trusted By Badge -->
			<div
				class="absolute bottom-10 left-1/2 flex w-[90%] -translate-x-1/2 transform flex-col items-center gap-3 rounded-[30px] border border-white bg-white/10 px-5 py-3 backdrop-blur-sm md:bottom-20 md:w-auto md:flex-row md:gap-5 md:rounded-[50px]"
			>
				<div class="relative flex h-[50px] w-[123px] items-center justify-center">
					<!-- Overlapping avatars -->
					<img
						src="{base}/images/employers/frame-20856633272.png"
						alt="User"
						class="absolute left-1/2 h-[50px] w-[50px] -translate-x-[36px] rounded-full object-cover md:left-0 md:translate-x-0"
					/>
					<img
						src="{base}/images/employers/frame-20856633610.png"
						alt="User"
						class="absolute left-1/2 h-[50px] w-[50px] -translate-x-[6px] rounded-full object-cover md:left-[30px] md:translate-x-0"
					/>
					<img
						src="{base}/images/employers/frame-20856633250.png"
						alt="User"
						class="absolute left-1/2 h-[50px] w-[50px] translate-x-[24px] rounded-full object-cover md:left-[73px] md:translate-x-0"
					/>
				</div>
				<span class="font-geist text-center text-sm font-semibold text-white md:text-left"
					>Trusted by 10,000+ Employers</span
				>
			</div>
		</div>
	</div>
</section>
