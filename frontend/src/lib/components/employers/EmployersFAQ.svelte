<script>
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let openIndex = $state(0); // Default first one open

	const faqs = [
		{
			question: 'How do I post a job on JobBeta?',
			answer: 'Yes! Signing up, creating a profile, and applying for jobs is completely free.'
		},
		{
			question: 'Is there a fee for posting jobs?',
			answer:
				'We offer both free and premium posting options. Check our pricing section for more details.'
		},
		{
			question: 'Can I search for candidates directly?',
			answer: 'Yes, with our Pro and Premium plans, you can search our talent pool directly.'
		},
		{
			question: 'What types of candidates are on JobBeta?',
			answer:
				'We have a diverse pool of candidates ranging from interns to experienced professionals across various industries.'
		},
		{
			question: 'How do I connect with candidates?',
			answer:
				'You can message candidates directly through our platform once you have shortlisted them.'
		},
		{
			question: 'How do I apply for jobs?',
			answer:
				'This FAQ seems to be for candidates, but as an employer, you can view applications in your dashboard.'
		},
		{
			question: 'How do I post a job on JobBeta?',
			answer: 'Yes! Signing up, creating a profile, and applying for jobs is completely free.'
		},
		{
			question: 'Is there a fee for posting jobs?',
			answer:
				'We offer both free and premium posting options. Check our pricing section for more details.'
		}
	];

	/**
	 * @param {number} index
	 */
	function toggle(index) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="bg-white py-20">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 font-geist text-3xl font-bold text-neutral-800 md:text-5xl">Employer FAQs</h2>
			<p class="font-geist text-lg text-neutral-600 md:text-xl">
				Still have questions? <a
					href="{base}/contact"
					class="font-bold text-primary hover:underline">Contact our support team!</a
				>
			</p>
		</div>

		<!-- FAQ Grid -->
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
			{#each faqs as faq, index}
				<div
					class="rounded-2xl bg-neutral-50 p-6 transition-all duration-300 {openIndex === index
						? 'border border-neutral-100 bg-white shadow-lg'
						: 'hover:bg-neutral-100'}"
				>
					<button
						class="flex w-full items-center justify-between gap-4 text-left"
						onclick={() => toggle(index)}
					>
						<span
							class="font-geist text-lg font-bold md:text-xl {openIndex === index
								? 'text-primary'
								: 'text-neutral-800'}"
						>
							{faq.question}
						</span>
						<div
							class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 {openIndex ===
							index
								? 'rotate-0 bg-primary text-white'
								: 'rotate-0 bg-neutral-200 text-neutral-600'}"
						>
							<!-- Animated Plus/Minus Icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 transition-transform duration-300"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<!-- Horizontal line (always visible) -->
								<path
									fill-rule="evenodd"
									d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								/>
								<!-- Vertical line (rotates to disappear when open) -->
								<path
									fill-rule="evenodd"
									d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
									clip-rule="evenodd"
									class="origin-center transition-all duration-300 {openIndex === index
										? 'scale-0 opacity-0'
										: 'scale-100 opacity-100'}"
								/>
							</svg>
						</div>
					</button>

					{#if openIndex === index}
						<div
							transition:slide={{ duration: 300, easing: cubicOut }}
							class="mt-4 border-t border-neutral-100 pt-4 font-geist text-sm leading-relaxed text-neutral-600 md:text-base"
						>
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
