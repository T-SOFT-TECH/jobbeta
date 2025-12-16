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
	<div class="mx-auto grid w-full grid-cols-1 lg:h-[70vh] lg:grid-cols-2">
		<!-- Left Section -->
		<div class="relative w-full content-center overflow-hidden {leftBgColor}">
			<!-- Content -->
			<div class="relative z-10 px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-24 lg:py-32 xl:px-32">
				<div class="flex max-w-md flex-col gap-8 md:gap-12">
					<div class="flex flex-col gap-4 md:gap-5">
						{#if leftLabel}
							<p class="text-left font-lato text-sm leading-6 font-normal text-white md:text-base">
								{leftLabel}
							</p>
						{/if}
						<h2
							class="text-left font-geist text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-4xl md:leading-[54px]"
						>
							{@html leftTitle}
						</h2>
						<p
							class="text-left font-geist text-base leading-relaxed font-normal text-white md:text-xl md:leading-[30px]"
						>
							{leftDescription}
						</p>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							class="cursor-pointer rounded-[20px] bg-black px-6 py-3.5 text-center font-lato text-sm leading-6 font-bold text-white transition-colors hover:bg-gray-900 sm:px-10 sm:py-4 sm:text-base"
						>
							{leftButton1Text}
						</button>
						<button
							class="cursor-pointer rounded-[20px] border border-white px-6 py-3.5 text-center font-lato text-sm leading-6 font-bold text-white transition-colors hover:bg-white/10 sm:px-10 sm:py-4 sm:text-base"
						>
							{leftButton2Text}
						</button>
					</div>
				</div>
			</div>

			<!-- Decorative Circles - Bottom Left -->
			{#if showDecorators && leftDecoratorImage}
				<div class="pointer-events-none absolute bottom-0 left-0 hidden h-auto w-auto md:block">
					<img src={leftDecoratorImage} alt="" class="h-auto w-auto" />
				</div>
			{/if}
		</div>

		<!-- Right Section -->
		<div class="relative mx-auto w-full content-center overflow-hidden">
			<!-- Content -->
			<div class="relative z-10 px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-20 lg:py-32">
				<div class="flex flex-col content-center items-center gap-8 md:gap-12 lg:items-start">
					<div class="flex flex-col gap-1">
						{#if rightLabel}
							<p
								class="text-center font-lato text-sm leading-6 font-normal text-white md:text-left md:text-base"
							>
								{rightLabel}
							</p>
						{/if}
						<h2
							class="text-center font-geist text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-left md:text-4xl md:leading-[54px]"
						>
							{@html rightTitle}
						</h2>
					</div>

					<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
						<button
							class="rounded-[20px] bg-white px-6 py-3.5 text-center font-lato text-sm leading-6 font-bold text-secondary transition-colors hover:bg-gray-100 sm:px-10 sm:py-4 sm:text-base"
						>
							{rightButton1Text}
						</button>
						<button
							class="rounded-[20px] border border-white px-6 py-3.5 text-center font-lato text-sm leading-6 font-bold text-white transition-colors hover:bg-white/10 sm:px-10 sm:py-4 sm:text-base"
						>
							{rightButton2Text}
						</button>
					</div>
				</div>
			</div>

			<!-- Decorative Circles - Top Right -->
			{#if showDecorators && rightDecoratorImage}
				<div class="pointer-events-none absolute top-0 right-0 hidden h-auto w-auto md:block">
					<img src={rightDecoratorImage} alt="" class="h-auto w-auto" />
				</div>
			{/if}
		</div>
	</div>
</section>
