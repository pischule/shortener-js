<script lang='ts'>
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<hgroup>
	<h1>shorturrl</h1>
	<h2>Simple URL Shortener</h2>
</hgroup>

<form method='post' use:enhance>
	<input
		value={form?.url ?? ''}
		type='url'
		required
		name='url'
		autocomplete='off'
		placeholder='https://example.com'
		aria-label='url'
		aria-invalid={form?.invalid}
	/>
	<button type='submit'>Short</button>
</form>
