<script>
	// Reusable CTA Component with customizable content and colors
	let {
		leftBgColor = 'bg-primary', // Left section background color
		rightBgColor = 'bg-secondary', // Right section background color

		// Left section content
		leftLabel = 'Get Started',
		leftTitle = 'Ready to bring JobBeta to your students?',
		leftDescription = "Let's work together to shape the future of early-career hiring.",
		leftButton1Text = 'Become a Partner',
		leftButton2Text = 'Schedule A Demo',

		// Right section content
		rightLabel = 'We love to hear from you',
		rightTitle = 'Do you need more Details<br />or support?',
		rightButton1Text = 'Hire With JobBeta',
		rightButton2Text = 'Partner with JobBeta',

		// Decorative images
		showDecorators = true,
		leftDecoratorImage = '/images/decorators/lower-ring-pattern.png',
		rightDecoratorImage = '/images/decorators/right ring pattern.png'
	} = $props();
</script>

<section class="relative w-full overflow-hidden {rightBgColor}">
	<div class="mx-auto grid h-[70vh] w-full grid-cols-1 lg:grid-cols-2">
		<!-- Left Section -->
		<div class="relative w-full content-center overflow-hidden {leftBgColor}">
			<!-- Content -->
			<div class="relative z-10 px-8 py-32 md:px-16 lg:px-32">
				<div class="flex max-w-md flex-col gap-12">
					<div class="flex flex-col gap-5">
						{#if leftLabel}
							<p class="font-lato text-left text-base font-normal leading-6 text-white">
								{leftLabel}
							</p>
						{/if}
						<h2 class="font-geist text-left text-4xl font-semibold leading-[54px] text-white">
							{@html leftTitle}
						</h2>
						<p class="font-geist text-left text-xl font-normal leading-[30px] text-white">
							{leftDescription}
						</p>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							class="font-lato cursor-pointer rounded-[20px] bg-black px-10 py-4 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-gray-900"
						>
							{leftButton1Text}
						</button>
						<button
							class="font-lato cursor-pointer rounded-[20px] border border-white px-10 py-4 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-white/10"
						>
							{leftButton2Text}
						</button>
					</div>
				</div>
			</div>

			<!-- Decorative Circles - Bottom Left -->
			{#if showDecorators && leftDecoratorImage}
				<div class="pointer-events-none absolute bottom-0 left-0 h-auto w-auto">
					<img src={leftDecoratorImage} alt="" class="h-auto w-auto" />
				</div>
			{/if}
		</div>

		<!-- Right Section -->
		<div class="relative mx-auto w-full content-center overflow-hidden">
			<!-- Content -->
			<div class="relative z-10 px-8 py-32 md:px-16 lg:px-20">
				<div class="flex flex-col content-center items-center gap-12">
					<div class="flex flex-col gap-1">
						{#if rightLabel}
							<p class="font-lato text-left text-base font-normal leading-6 text-white">
								{rightLabel}
							</p>
						{/if}
						<h2 class="font-geist text-left text-4xl font-semibold leading-[54px] text-white">
							{@html rightTitle}
						</h2>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							class="text-secondary font-lato rounded-[20px] bg-white px-10 py-4 text-center text-base font-bold leading-6 transition-colors hover:bg-gray-100"
						>
							{rightButton1Text}
						</button>
						<button
							class="font-lato rounded-[20px] border border-white px-10 py-4 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-white/10"
						>
							{rightButton2Text}
						</button>
					</div>
				</div>
			</div>

			<!-- Decorative Circles - Top Right -->
			{#if showDecorators && rightDecoratorImage}
				<div class="pointer-events-none absolute right-0 top-0 h-auto w-auto">
					<img src={rightDecoratorImage} alt="" class="h-auto w-auto" />
				</div>
			{/if}
		</div>
	</div>
</section>
