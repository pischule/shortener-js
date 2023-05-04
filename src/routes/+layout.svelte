<script lang='ts'>
	import '@picocss/pico/css/pico.min.css';
	import { page } from '$app/stores';

	import logo from '$lib/assets/logo.svg';
</script>

<svelte:head>
	<title>shorturrl</title>
</svelte:head>

<nav class='container-fluid'>
	<ul>
		<li><a href='/'><img class='logo' src={logo} alt='cat logo'></a></li>
	</ul>
	<ul>
		{#if $page.data.session}
			<li><a href='/my-links'>My Links</a></li>
			<li>
				<a class='outline' role='button' href='/auth/signout' data-placement='left'
					 data-tooltip={`Signed in as ${$page.data.session.user?.name ?? "User"}`}>Sign out</a>
			</li>
		{:else}
			<li>
				<a class='outline' role='button' href='/auth/signin'>Sign in</a>
			</li>
		{/if}
	</ul>
</nav>
<main class='container'>
	<slot />
</main>

<style>
    .logo {
        width: 2.7rem;
        height: 2.7rem;
        padding: 5px;
    }
</style>