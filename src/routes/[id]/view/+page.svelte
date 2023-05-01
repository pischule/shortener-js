<script>
  export let data;

  import { page } from "$app/stores";

  let fullUrl = `${$page.url.origin}/${data.link.id}`;
  let copied = false;
  let timeout = null;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(fullUrl);
    copied = true;
    clearInterval(timeout);
    timeout = setTimeout(() => (copied = false), 3000);
  };
</script>

<div class="flex">
  <hgroup class="py-3 flex-1">
    <h1 class="text-2xl font-bold">Shortened URL</h1>
    <h2 class="text-lg">{data.link.id}</h2>
  </hgroup>
  {#if data.isOwner}
    <a class="btn btn-ghost flex-none" href="edit">Edit</a>
  {/if}
</div>


<div class="card">
  <div class="input-group flex">
    <input class="input input-bordered flex-1" type="url" name="url" value={fullUrl} aria-label="short url" />
    <button on:click={copyToClipboard} class="btn">{copied ? 'Copied' : 'Copy'}</button>
  </div>

  <ul class="py-4">
    <li>Destination: <a class="link" href={data.link.url}>{data.link.url}</a></li>
    <li>Created at {data.link.createdAt.toLocaleString()}</li>
    <li>Visits: {data.link.visits}</li>
  </ul>
</div>

<p><a class="link" href="/">Create another</a></p>
