<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();

	const features = [
		{
			title: 'Smart Job Matching',
			description: 'Find roles tailored to your skills & goals.'
		},
		{
			title: 'Create an Impressive Profile',
			description: 'Showcase your experience, skills & projects.'
		},
		{
			title: 'Career Tips & Hacks',
			description: 'Get expert advice on resumes, interviews, and networking.'
		},
		{
			title: 'Virtual Career Fairs & Webinars',
			description: 'Meet recruiters from top companies.'
		},
		{
			title: 'Skill Development Programs',
			description: 'Learn new skills and earn certifications.'
		}
	];
</script>

<section class="relative w-full overflow-hidden bg-[#FAFAFA] py-20">
	<!-- Background Decorative Circles (Purple) -->
	<!-- Simplified representation of the many circles in HTML -->
	<div
		class="absolute top-[10%] right-[10%] h-[85px] w-[85px] rounded-full border border-[#7502ff] opacity-20"
	></div>
	<div
		class="absolute top-[5%] right-[15%] h-[85px] w-[85px] rounded-full border border-[#7502ff] opacity-20"
	></div>
	<div
		class="absolute top-[15%] right-[20%] h-[85px] w-[85px] rounded-full border border-[#7502ff] opacity-20"
	></div>

	<div
		class="mx-auto flex w-full max-w-[1369px] flex-col items-center justify-between gap-10 px-4 md:flex-row md:px-[58px]"
	>
		<!-- Text Content -->
		<div class="flex flex-col items-start justify-start gap-10 md:w-1/2">
			<div class="flex flex-col gap-5">
				<div
					class="font-['Geist-Bold',_sans-serif] text-[28px] leading-tight font-bold text-black sm:text-[32px] md:text-[40px] md:leading-[60px]"
				>
					Exclusive Features for Students & Graduates
				</div>
				<div
					class="font-['Geist-Medium',_sans-serif] text-xl leading-[30px] font-medium text-[rgba(42,44,44,0.60)]"
				>
					We don’t just help you find jobs—we help you build your career!. The best part? It’s all
					free. Start now!
				</div>
			</div>

			<!-- Features List -->
			<div class="flex flex-col gap-[30px]">
				{#each features as feature}
					<div class="flex flex-row items-start gap-[30px]">
						<div class="h-[60px] w-[3px] shrink-0 rounded-lg bg-[#7502ff] md:h-[84px]"></div>
						<div class="flex flex-col justify-center gap-3 py-2">
							<div
								class="font-['Geist-Bold',_sans-serif] text-xl leading-[30px] font-bold text-[#2a2c2c]"
							>
								{feature.title}
							</div>
							<div
								class="font-['Geist-Regular',_sans-serif] text-base leading-6 font-normal text-[rgba(48,48,48,0.64)]"
							>
								{feature.description}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Image -->
		<div class="relative md:w-1/2">
			<!-- The HTML had a very large image absolute positioned. I'll make it responsive. -->
			<img
				class="h-auto w-full object-cover"
				src="/images/students/student.png"
				alt="Exclusive Features"
			/>
		</div>
	</div>
</section>
