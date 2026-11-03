<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
</script>

<!--
	Client review v2: a "coming soon" introduction with one action, Register
	Your Interest. No demo button (the product isn't ready to demonstrate) and
	no stock photo.
-->
<section class="relative overflow-hidden bg-primary text-white">
	<div class="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#3296f8]/40 blur-3xl"></div>
	<div class="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#f59e0b]/20 blur-3xl"></div>
	<div class="pointer-events-none absolute -right-24 -bottom-24 hidden h-80 w-80 rounded-full border border-white/15 lg:block"></div>
	<div class="pointer-events-none absolute right-24 bottom-10 hidden h-48 w-48 rounded-full border border-white/10 lg:block"></div>

	<div class="page-container relative flex flex-col items-start gap-6 py-14 md:py-20 lg:py-24">
		<span class="eyebrow-light">
			<Icon name="graduation" size={14} /> For universities &amp; career centres · Coming soon
		</span>
		<h1 class="title-display max-w-3xl">Helping institutions prepare students for what's next.</h1>
		<p class="lead max-w-2xl text-white/85">
			We're building tools to help universities and career centres connect students with career
			opportunities and employers. Be among the first to know when JobBeta for Career Centres
			launches.
		</p>
		<a href="#register" class="btn btn-light text-primary">
			Register Your Interest <Icon name="arrow-right" size={18} />
		</a>
	</div>
</section>
