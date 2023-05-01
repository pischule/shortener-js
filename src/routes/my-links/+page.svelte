<script>
  export let data;

  $: hasPrevPage = data.currentPage >= 1;
  $: hasNextPage = data.currentPage + 1 < data.totalPages;
</script>

<h1 class="text-2xl font-bold py-3">My Links</h1>

<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
    <tr>
      <th scope="col">Link</th>
      <th scope="col">Visits</th>
      <th scope="col">Destination</th>
    </tr>
    </thead>
    <tbody>
    {#each data.links as link}
      <tr>
        <td><a class="link" href="/{link.id}/view">{link.id}</a></td>
        <td>{link.visits}</td>
        <td><a class="link" href={link.url}>{link.url}</a>
        </td>
      </tr>
    {/each}
    </tbody>
  </table>

  {#if data.totalPages > 1}
    <div class="flex justify-center py-2">
      <div class="btn-group">
        <a class="btn" disabled={!hasPrevPage || null} href="?page={data.currentPage - 1}">Prev</a>
        <div class="btn">Page {data.currentPage + 1} of {data.totalPages}</div>
        <a class="btn" disabled={!hasNextPage || null} href="?page={data.currentPage + 1}">Next</a>
      </div>
    </div>
  {/if}
</div>