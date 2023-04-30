<script>
  export let data;

  import { goto } from "$app/navigation";
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

<hgroup>
  <h2>Shortened URL</h2>
  <h3>{data.link.id}</h3>
</hgroup>

<article>
  <input type="url" readonly name="url" value={fullUrl} aria-label="short url" />
  <div class="grid">
    <button on:click={copyToClipboard} class="secondary">{copied ? 'Copied' : 'Copy'}</button>
    <button on:click={() => goto('edit')}>Edit</button>
  </div>

  <ul>
    <li>Destination: <a href={data.link.url}>{data.link.url}</a></li>
    <li>Created at {data.link.createdAt.toLocaleString()}</li>
    <li>Visits: {data.link.visits}</li>
  </ul>
</article>

<p><a href="/">Create another</a></p>
