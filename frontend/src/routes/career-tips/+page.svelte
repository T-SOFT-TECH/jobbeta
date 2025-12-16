<script>
	import CareerTipsHero from '$lib/components/career-tips/CareerTipsHero.svelte';
	import TopicsSection from '$lib/components/career-tips/TopicsSection.svelte';
	import ArticlesGrid from '$lib/components/career-tips/ArticlesGrid.svelte';
	import CareerTipsCTA from '$lib/components/career-tips/CareerTipsCTA.svelte';
	import CareerTipsNewsletter from '$lib/components/career-tips/CareerTipsNewsletter.svelte';

	const topics = [
		'All',
		'Networking',
		'Productivity',
		'Resume',
		'Career',
		'Job Applications',
		'Portfolios'
	];

	let activeTopic = $state('All');

	// Articles with unique questions, answers, and categories
	const allArticles = [
		// Networking
		{
			title: 'How do I build professional connections while still in school?',
			content:
				"Start by attending career fairs, joining professional clubs, and connecting with alumni on LinkedIn. Don't be afraid to reach out to professionals in your field for informational interviews. Building genuine relationships now will pay dividends throughout your career.",
			category: 'Networking'
		},
		{
			title: "What's the best way to follow up after a networking event?",
			content:
				'Send a personalized LinkedIn connection request or email within 24-48 hours. Reference something specific you discussed and express interest in staying connected. Keep it brief and professional, and suggest a coffee chat if appropriate.',
			category: 'Networking'
		},
		// Productivity
		{
			title: 'How can I balance job searching with my current responsibilities?',
			content:
				"Set aside dedicated time blocks for job searching, even if it's just 30 minutes daily. Use job alerts to save time, prepare templates for cover letters, and track your applications in a spreadsheet. Consistency is more effective than sporadic intense sessions.",
			category: 'Productivity'
		},
		{
			title: 'What tools can help me stay organized during my job search?',
			content:
				'Use tools like Notion, Trello, or a simple spreadsheet to track applications. Set calendar reminders for follow-ups. Use browser extensions to save job postings, and keep your resume and cover letter templates easily accessible.',
			category: 'Productivity'
		},
		// Resume
		{
			title: 'How do I make my resume stand out with limited experience?',
			content:
				'Focus on transferable skills from coursework, projects, volunteer work, and part-time jobs. Use action verbs and quantify achievements where possible. Tailor your resume to each job by matching keywords from the job description.',
			category: 'Resume'
		},
		{
			title: 'Should I include a summary or objective on my resume?',
			content:
				"A brief summary highlighting your key skills and career goals can be effective, especially for entry-level candidates. Keep it to 2-3 sentences and tailor it to the specific role you're applying for. Avoid generic objectives.",
			category: 'Resume'
		},
		// Career
		{
			title: 'What career path is best suited for my skills and interests?',
			content:
				"Take career assessment tests, reflect on what activities energize you, and research roles that match your interests. Talk to professionals in fields you're curious about. Consider internships or part-time roles to explore different paths before committing.",
			category: 'Career'
		},
		{
			title: 'How do I switch careers without starting from scratch?',
			content:
				'Identify transferable skills from your current experience. Take online courses or certifications to fill skill gaps. Network with people in your target field and consider transitional roles that bridge both industries.',
			category: 'Career'
		},
		// Job Applications
		{
			title: 'How many jobs should I apply to per week?',
			content:
				'Quality over quantity is key. Aim for 5-10 well-researched, tailored applications per week rather than 50 generic ones. Each application should be customized with a relevant cover letter and resume adjustments.',
			category: 'Job Applications'
		},
		{
			title: 'What should I do if I never hear back after applying?',
			content:
				"Follow up with a polite email 1-2 weeks after applying. If still no response, move on but don't take it personally—many companies receive hundreds of applications. Keep applying and refining your approach.",
			category: 'Job Applications'
		},
		// Portfolios
		{
			title: "Do I need a portfolio if I'm not in a creative field?",
			content:
				'Yes! Portfolios can showcase projects, case studies, writing samples, or presentations regardless of your field. They demonstrate your skills more effectively than a resume alone and give employers tangible evidence of your abilities.',
			category: 'Portfolios'
		},
		{
			title: 'What should I include in my online portfolio?',
			content:
				'Include your best work samples, brief project descriptions explaining your role and impact, testimonials if available, your resume, and contact information. Keep it clean, easy to navigate, and mobile-friendly.',
			category: 'Portfolios'
		}
	];

	// Filter articles based on active topic
	let filteredArticles = $derived(
		activeTopic === 'All'
			? allArticles
			: allArticles.filter((article) => article.category === activeTopic)
	);
</script>

<svelte:head>
	<title>Career Tips - JobBeta</title>
</svelte:head>

<div class="overflow-hidden bg-white font-['Geist',sans-serif]">
	<!-- Hero Section -->
	<CareerTipsHero />

	<!-- Topics and Articles Section -->
	<section class="px-4 py-16 md:px-8 md:py-20 lg:px-20">
		<div class="mx-auto max-w-[1214px]">
			<TopicsSection {topics} bind:activeTopic />
			<ArticlesGrid articles={filteredArticles} />
		</div>
	</section>

	<!-- Dual CTA Section -->
	<CareerTipsCTA />
</div>
