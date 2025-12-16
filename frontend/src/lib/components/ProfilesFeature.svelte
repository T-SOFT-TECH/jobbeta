<script lang="ts">
	// Profiles that Tell Your Story Feature Section
</script>

<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-[29px]">
	<!-- Text Content (appears second on mobile, first on desktop) -->
	<div class="order-2 flex flex-col gap-6 lg:order-1">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-4 lg:gap-[26px]">
				<h3
					class="text-[24px] leading-tight font-bold text-[#110d21] sm:text-[28px] lg:text-[32px]"
					style="font-family: var(--font-geist); letter-spacing: -0.16px;"
				>
					Profiles that Tell Your Story
				</h3>
				<p
					class="text-[16px] leading-relaxed font-normal text-[rgba(42,44,44,0.66)] sm:text-[18px] lg:text-[20px]"
					style="font-family: var(--font-geist); letter-spacing: -0.1px;"
				>
					Go beyond the resume. Show your projects, passions, and personality with dynamic profiles
					and portfolios.
				</p>
			</div>
			<button
				class="flex w-full items-center gap-[10px] rounded-[20px] border border-black px-[10px] py-4 transition-colors hover:bg-gray-50 sm:w-[240px]"
			>
				<p
					class="w-full text-center text-[16px] leading-6 font-bold text-[#110d21]"
					style="font-family: var(--font-lato); letter-spacing: -0.08px;"
				>
					Get Matched Today!
				</p>
			</button>
		</div>
	</div>

	<!-- Image (appears first on mobile, second on desktop) -->
	<div
		class="relative order-1 h-[300px] w-full overflow-hidden sm:h-[400px] lg:order-2 lg:h-[656px]"
	>
		<!-- Henry Philips Profile Card -->
		<div class="absolute top-0 left-0 h-[250px] w-full sm:h-[350px] lg:h-[493px] lg:w-[562px]">
			<img
				src="/images/source/Henry-philips.jpg"
				class="h-full w-full rounded-[16px] object-cover"
				alt="Henry Philips Profile"
			/>
		</div>

		<!-- Contract Notification Card (Bottom Right) - Hidden on mobile for cleaner look -->
		<div
			class="absolute top-[120px] left-[50px] z-10 hidden h-[355px] w-[425px] overflow-hidden rounded-[16px] bg-white shadow-xl sm:top-[150px] sm:left-[100px] md:block lg:top-[230px] lg:left-[200px]"
		>
			<!-- Header Background with Celebration Graphics -->
			<div class="absolute top-0 left-0 h-[138px] w-full overflow-hidden">
				<img src="/images/source/new-contract.jpg" class="h-full w-full object-cover" alt="" />
			</div>

			<!-- Contract Message -->
			<div class="absolute top-[170px] left-[32px] flex w-[331px] flex-col gap-[15px]">
				<p
					class="text-[16px] leading-6 font-extrabold text-[rgba(42,44,44,0.8)]"
					style="font-family: var(--font-geist); letter-spacing: -0.08px;"
				>
					You have a new contract
				</p>
				<p
					class="text-[14px] leading-[21px] font-semibold text-[rgba(42,44,44,0.54)]"
					style="font-family: var(--font-geist); letter-spacing: -0.07px;"
				>
					Your Cv matches with the available position. Please check through the job description and
					payment to be sure it suits your needs totally. we look forward to having you on board!.
				</p>
			</div>

			<!-- Accept Offer Button -->
			<div class="absolute top-[310px] left-[31px] rounded-[20px] bg-green-600 px-3 py-1">
				<p
					class="text-[12px] leading-[18px] font-bold text-white"
					style="font-family: var(--font-geist); letter-spacing: -0.06px;"
				>
					Accept Offer
				</p>
			</div>
		</div>
	</div>
</div>
