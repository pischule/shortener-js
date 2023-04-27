<script>
	import { enhance } from '$app/forms';
	import { isUrlValid } from '$lib/util';

	let url = '';
</script>

<hgroup>
	<h1>shorturrl</h1>
	<h2>Simple URL Shortener</h2>
</hgroup>

<form method="post" use:enhance>
	<input
		bind:value={url}
		type="url"
		required
		name="url"
		autocomplete="off"
		placeholder="https://example.com"
		aria-label="url"
		aria-invalid={!url || isUrlValid(url) ? null : true}
	/>
	<button type="submit">Short</button>
</form>
