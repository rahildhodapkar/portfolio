<script lang="ts">
	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav aria-label="Primary">
	<ul>
		{#each links as link (link.href)}
			<!-- Fragment links stay on this page and intentionally bypass route resolution. -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--navbar-color) 85%, transparent);
		backdrop-filter: blur(8px);
	}

	ul {
		display: flex;
		justify-content: center;
		gap: clamp(1rem, 4vw, 3rem);
		list-style: none;
		padding: 0.75rem 1rem;
		overflow-x: auto;
	}

	a {
		color: var(--orange-50);
		text-decoration: none;
		font-weight: 300;
		white-space: nowrap;
	}

	a:hover {
		color: var(--orange-500);
	}
</style>
