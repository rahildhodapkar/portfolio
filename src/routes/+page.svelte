<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
	import Nav from '$lib/Nav.svelte';

	const canonical = 'https://rahildhodapkar.com/';
	const title = 'Rahil Dhodapkar | Software Engineer';
	const description =
		'Portfolio of Rahil Dhodapkar, a software engineer and Rutgers University–New Brunswick graduate with professional experience at Rocket Pharmaceuticals. Projects span full-stack web development, machine learning, and systems programming.';
	const ogImage = 'https://rahildhodapkar.com/og-image.png';

	const schemaJson = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		url: canonical,
		name: title,
		description,
		mainEntity: {
			'@type': 'Person',
			name: 'Rahil Dhodapkar',
			url: canonical,
			jobTitle: 'Software Engineer',
			email: 'mailto:rahildhodapkar@gmail.com',
			image: ogImage,
			alumniOf: {
				'@type': 'CollegeOrUniversity',
				name: 'Rutgers University–New Brunswick'
			},
			sameAs: ['https://github.com/rahildhodapkar', 'https://www.linkedin.com/in/rahildhodapkar/']
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rahil Dhodapkar" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- schemaJson contains only local constants; raw HTML is required for valid JSON-LD in Svelte 5. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${schemaJson}</scr` + 'ipt>'}
</svelte:head>

<Nav />
<main>
	<div class="container">
		<Header />
		<Main />
	</div>
</main>

<style>
	.container {
		height: 100svh;
	}
</style>
