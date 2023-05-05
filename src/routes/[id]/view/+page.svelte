<script lang='ts'>
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	export let data: PageData;

	let fullUrl = `${$page.url.origin}/${data?.link.id}`;
	let copied = false;
	let timeout = null;

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(fullUrl);
		copied = true;
		clearInterval(timeout);
		timeout = setTimeout(() => (copied = false), 2000);
	};

	onDestroy(() => clearTimeout(timeout));
</script>

<svelte:head>
	<title>{data.link?.id}</title>
</svelte:head>

<hgroup>
	<h2>Shortened URL</h2>
	<h3>{data.link.id}</h3>
</hgroup>

<input type='url' readonly name='url' value={fullUrl} aria-label='short url' />
<div class='grid'>
	<button on:click={copyToClipboard} class='secondary'>{copied ? 'Copied' : 'Copy'}</button>
	{#if data.isOwner}
		<a href='edit' role='button'>Edit</a>
	{/if}
</div>

<ul>
	<li>Destination: <a href={data.link.url}>{data.link.url}</a></li>
	<li>Created at {data.link.createdAt.toLocaleString()}</li>
	<li>Visits: {data.link.visits}</li>
</ul>

<p><a href='/'>Create another</a></p>

<style>
    a[role='button'] {
        width: 100%;
        margin-bottom: 20px
    }
</style>
