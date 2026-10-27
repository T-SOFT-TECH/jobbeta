<script lang="ts">
	const sections = [
		{
			title: '1. Introduction',
			body: [
				'Welcome to JobBeta. This Privacy Policy explains how JobBeta ("we", "us" or "our") collects, uses, stores and protects your personal information when you use our website, products and services.',
				'By using JobBeta, you agree to the collection and use of information in accordance with this policy.'
			]
		},
		{
			title: '2. Information We Collect',
			body: [
				'Information you provide to us: name, email address, phone number, location, education details, work experience, CVs and other information you add to your profile, waitlist entries, or send to us through forms.',
				'Information we collect automatically: device and browser information, IP address, pages visited, and general usage data that helps us improve the platform.',
				'Information from third parties: where you choose to sign in with a third-party account or interact with partners, we may receive limited information from those services.'
			]
		},
		{
			title: '3. How We Use Your Information',
			body: [
				'To provide and operate the JobBeta platform, including matching candidates with opportunities and helping employers find suitable talent.',
				'To communicate with you about your account, waitlist status, product updates, and support requests.',
				'To improve our services, understand how the platform is used, and develop new features.',
				'To comply with legal obligations and enforce our terms of use.'
			]
		},
		{
			title: '4. Sharing Your Information',
			body: [
				'We do not sell your personal information. We may share information with employers or career centres when you apply for a role or ask us to share your profile for matching purposes.',
				'We may share data with service providers who help us operate the platform (such as hosting and analytics providers), subject to appropriate confidentiality obligations.',
				'We may disclose information where required by law or to protect the rights, property or safety of JobBeta, our users or others.'
			]
		},
		{
			title: '5. Cookies and Similar Technologies',
			body: [
				'We use cookies and similar technologies to keep you signed in, remember your preferences and understand how the platform is used. You can control cookies through your browser settings, although some features may not work properly without them.'
			]
		},
		{
			title: '6. Data Retention',
			body: [
				'We retain personal information for as long as necessary to provide our services and for legitimate business or legal purposes. When information is no longer needed, we take reasonable steps to delete or anonymise it.'
			]
		},
		{
			title: '7. Your Rights',
			body: [
				'Depending on where you live, you may have the right to access, correct, update or delete your personal information, to object to or restrict certain processing, and to withdraw consent where processing is based on consent.',
				'To exercise any of these rights, please contact us using the details below.'
			]
		},
		{
			title: '8. Security',
			body: [
				'We use reasonable technical and organisational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.'
			]
		},
		{
			title: '9. Children\u2019s Privacy',
			body: [
				'JobBeta is not intended for children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.'
			]
		},
		{
			title: '10. Changes to This Policy',
			body: [
				'We may update this Privacy Policy from time to time. We will post the updated version on this page and, where appropriate, notify you of significant changes.'
			]
		},
		{
			title: '11. Contact Us',
			body: [
				'If you have any questions about this Privacy Policy or how we handle your personal information, please reach out through our contact page or email us at hello@jobbeta.com.'
			]
		}
	];
</script>

<svelte:head>
	<title>Privacy Policy - JobBeta</title>
	<meta
		name="description"
		content="Learn how JobBeta collects, uses and protects your personal information."
	/>
</svelte:head>

<section class="w-full bg-white py-12 md:py-20">
	<div class="page-container max-w-4xl">
		<h1 class="font-geist text-3xl font-bold text-[#110d21] sm:text-4xl md:text-5xl">
			Privacy Policy
		</h1>
		<p class="mt-4 font-geist text-base text-[#62717a]">Last updated: September 2026</p>

		<div class="mt-10 flex flex-col gap-10">
			{#each sections as section (section.title)}
				<div>
					<h2 class="font-geist text-xl font-bold text-[#110d21] md:text-2xl">{section.title}</h2>
					<div class="mt-3 flex flex-col gap-3">
						{#each section.body as paragraph}
							<p class="font-geist text-base leading-relaxed text-[#62717a]">{paragraph}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 rounded-[24px] bg-[#f8f3ff] p-6 md:p-8">
			<h2 class="font-geist text-xl font-bold text-[#110d21]">Still have questions?</h2>
			<p class="mt-2 font-geist text-base text-[#62717a]">
				If there's anything you'd like clarified, our team is happy to help.
			</p>
			<a
				href="/contact"
				class="mt-5 inline-flex items-center justify-center rounded-[20px] bg-[#7502ff] px-6 py-3.5 font-geist text-base font-bold text-white transition-colors hover:bg-[#6502dd]"
			>
				Contact Support
			</a>
		</div>
	</div>
</section>
