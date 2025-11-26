<script>
	import { base } from '$app/paths';
</script>

<section class="bg-brand-dark-purple relative overflow-hidden py-20">
	<!-- Decorative Background Circles -->
	<div class="pointer-events-none absolute inset-0 opacity-10">
		<div
			class="absolute left-[30%] top-[80%] h-[185px] w-[185px] -rotate-45 rounded-full border border-white"
		></div>
		<div
			class="absolute left-[5%] top-[80%] h-[185px] w-[185px] -rotate-45 rounded-full border border-white"
		></div>
		<div
			class="absolute left-[40%] top-[80%] h-[185px] w-[185px] -rotate-45 rounded-full border border-white"
		></div>
		<div
			class="absolute right-[10%] top-[-10%] h-[185px] w-[185px] rounded-full border border-white"
		></div>
		<div
			class="absolute right-[5%] top-[5%] h-[185px] w-[185px] rounded-full border border-white"
		></div>
	</div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
			<!-- Left Column: Create Account -->
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-4">
					<h2 class="font-geist text-4xl font-semibold leading-tight text-white">
						Create an Employer Account
					</h2>
					<p class="font-geist text-xl font-normal leading-relaxed text-white">
						Start hiring today! Sign up as an employer and gain access to top students and graduate
						talent.
					</p>
				</div>
				<button
					class="font-lato w-fit rounded-[20px] bg-black px-8 py-4 text-base font-bold text-white transition-colors hover:bg-neutral-900"
				>
					Join As an Employer
				</button>
			</div>

			<!-- Right Column: Contact/Support -->
			<div class="flex flex-col gap-8 border-l-0 border-white/10 lg:border-l lg:pl-12">
				<div class="flex flex-col gap-2">
					<span class="font-lato text-base text-white">We love to hear from you</span>
					<h2 class="font-geist text-4xl font-semibold leading-tight text-white">
						Do you need more Details <br /> or support?
					</h2>
				</div>
				<div class="flex flex-col gap-4 sm:flex-row">
					<button
						class="text-secondary font-lato rounded-[20px] bg-white px-8 py-4 text-base font-bold transition-colors hover:bg-neutral-100"
					>
						Hire With JobBeta
					</button>
					<button
						class="font-lato rounded-[20px] border border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
					>
						Partner with JobBeta
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
