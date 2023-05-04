<script lang='ts'>
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>{data.id}</title>
</svelte:head>

<hgroup>
	<h2>Edit URL</h2>
	<h3>{data.id}</h3>
</hgroup>

<article>
	<form method='POST' use:enhance>
		<label>
			Destination
			<input
				type='url'
				name='url'
				value={data.url ?? (form?.url ?? '')}
				required='required'
				autocomplete='off'
				aria-label='url'
				aria-invalid={form?.invalid}
			>
		</label>

		<div class='grid'>
			<a href='view' role='button' class='secondary'>Cancel</a>
			<button formaction='?/update' type='submit'>Save</button>
			<button formaction='?/delete' class='red' type='submit'>Delete</button>
		</div>
	</form>
</article>

<style>
    a[role='button'] {
        width: 100%;
        margin-bottom: 20px
    }

    .red {
        --primary: #e53935;
        --primary-hover: #d32f2f;
        --primary-focus: rgba(229, 57, 53, 0.125);
        --primary-inverse: #FFF;
    }
</style>
