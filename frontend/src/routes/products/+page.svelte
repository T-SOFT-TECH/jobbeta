<script lang="ts">
	import ProductsHero from '$lib/components/products/ProductsHero.svelte';
	import ProductSuite from '$lib/components/products/ProductSuite.svelte';
	import ComparePlans from '$lib/components/products/ComparePlans.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { links } from '$lib/config/site';
</script>

<svelte:head>
	<title>Products | JobBeta</title>
	<meta
		name="description"
		content="JobBeta products for employers and schools: AI matching, job posting, interview scheduling and hiring analytics."
	/>
</svelte:head>

<ProductsHero />
<ProductSuite />
<ComparePlans />
<CtaBanner
	title="Discover how JobBeta can transform your hiring."
	body="See the platform in action, or take a tour by joining the waitlist."
	primary={{ label: 'Book a Demo', href: links.demo }}
	secondary={{ label: 'Take a Tour', href: links.waitlistEmployer }}
	tertiary={null}
/>
