<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();

	let openIndex = $state(0);

	const faqs = [
		{
			question: 'Is JobBeta free for students and graduates?',
			answer: 'Yes! Signing up, creating a profile, and applying for jobs is completely free.'
		},
		{
			question: 'Can I save jobs for later?',
			answer: "Absolutely. You can bookmark jobs and apply to them whenever you're ready."
		},
		{
			question: 'How do I apply for jobs?',
			answer:
				"Simply create a profile, upload your CV, and click 'Apply' on any job listing that interests you."
		},
		{
			question: 'What kind of jobs are available on JobBeta?',
			answer:
				'We feature internships, entry-level positions, part-time roles, and full-time graduate jobs across various industries.'
		},
		{
			question: 'How can I improve my chances of getting hired?',
			answer:
				'Complete your profile 100%, upload a professional photo, and tailor your CV to the job description.'
		},
		{
			question: 'Do you offer career advice?',
			answer:
				'Yes, check out our blog and career tips section for expert advice on interviews, resumes, and more.'
		}
	];

	function toggle(index) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<section class="relative w-full bg-white py-20">
	<div class="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-start gap-16 px-4">
		<!-- Header -->
		<div class="flex flex-col items-center justify-center gap-5 text-center">
			<div
				class="font-['Geist-Bold',_sans-serif] text-[40px] font-bold leading-[51px] text-[#2a2c2c]"
			>
				Student FAQs
			</div>
			<div
				class="font-['Geist-Medium',_sans-serif] text-xl font-medium leading-[30px] text-[#2a2c2c]"
			>
				<span>Still have questions? </span>
				<span class="text-[#7502ff]">Contact our support team!</span>
			</div>
		</div>

		<!-- FAQ Grid -->
		<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-[93px]">
			<!-- Column 1 -->
			<div class="flex flex-col gap-6">
				{#each faqs.slice(0, 3) as faq, i}
					{@const index = i}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="flex cursor-pointer flex-col gap-8 rounded-2xl bg-[rgba(42,44,44,0.04)] p-6 transition-all hover:bg-[rgba(42,44,44,0.08)]"
						onclick={() => toggle(index)}
					>
						<div class="flex flex-row items-center justify-between gap-[30px]">
							<div
								class={`text-left font-['Geist-Bold',_sans-serif] text-xl font-bold leading-[30px] ${openIndex === index ? 'text-[#7502ff]' : 'text-[rgba(42,44,44,0.80)]'}`}
							>
								{faq.question}
							</div>
							<div class="relative h-6 w-6 shrink-0">
								{#if openIndex === index}
									<!-- Minus Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#7502ff"
										class="h-6 w-6"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
									</svg>
								{:else}
									<!-- Plus Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-6 w-6 text-[#2a2c2c]"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										/>
									</svg>
								{/if}
							</div>
						</div>
						{#if openIndex === index}
							<div
								class="text-left font-['Geist-Regular',_sans-serif] text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.80)]"
							>
								{faq.answer}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Column 2 -->
			<div class="flex flex-col gap-6">
				{#each faqs.slice(3, 6) as faq, i}
					{@const index = i + 3}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="flex cursor-pointer flex-col gap-8 rounded-2xl bg-[rgba(42,44,44,0.04)] p-6 transition-all hover:bg-[rgba(42,44,44,0.08)]"
						onclick={() => toggle(index)}
					>
						<div class="flex flex-row items-center justify-between gap-[30px]">
							<div
								class={`text-left font-['Geist-Bold',_sans-serif] text-xl font-bold leading-[30px] ${openIndex === index ? 'text-[#7502ff]' : 'text-[rgba(42,44,44,0.80)]'}`}
							>
								{faq.question}
							</div>
							<div class="relative h-6 w-6 shrink-0">
								{#if openIndex === index}
									<!-- Minus Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#7502ff"
										class="h-6 w-6"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
									</svg>
								{:else}
									<!-- Plus Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-6 w-6 text-[#2a2c2c]"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										/>
									</svg>
								{/if}
							</div>
						</div>
						{#if openIndex === index}
							<div
								class="text-left font-['Geist-Regular',_sans-serif] text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.80)]"
							>
								{faq.answer}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
