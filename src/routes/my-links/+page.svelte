<script lang='ts'>
	import type { PageData } from './$types';

	export let data: PageData;

	$: totalPages = Math.ceil(data.totalCount / data.pageSize);
	$: fromIndex = data.currentPage * data.pageSize;
	$: toIndex = fromIndex + data.links.length;
</script>

<svelte:head>
	<title>My Links</title>
</svelte:head>

<h1>My Links</h1>

<figure>
	<table>
		<thead>
		<tr>
			<th scope='col'>Link</th>
			<th scope='col'>Visits</th>
			<th scope='col'>Destination</th>
		</tr>
		</thead>
		<tbody>
		{#each data.links as link}
			<tr>
				<td><a href='/{link.id}/view'>{link.id}</a></td>
				<td>{link.visits}</td>
				<td><a href={link.url}>{link.url}</a>
				</td>
			</tr>
		{/each}
		</tbody>
	</table>

	{#if totalPages > 1}
		<div class='grid'>
			<div class='prev'>
				{#if data.currentPage > 0}
					<a href='?page={data.currentPage - 1}'>Previous</a>
				{/if}
			</div>
			<div class='page-count'>
				{fromIndex + 1}-{toIndex} / {data.totalCount}
			</div>
			<div class='next'>
				{#if data.currentPage + 1 < totalPages}
					<a href='?page={data.currentPage + 1}'>Next</a>
				{/if}
			</div>
		</div>
	{/if}
</figure>

<style>
    .grid {
        padding-top: 1rem;
    }

    .prev {
        text-align: start;
    }

    .next {
        text-align: end;
    }

    .page-count {
        text-align: center;
    }
</style>