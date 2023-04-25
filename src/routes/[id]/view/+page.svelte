<script>
  export let data;
  import { page } from "$app/stores";

  const { link } = data;

  const fullUrl = `${$page.url.origin}/${link.id}`;

  let copied = false;

  const copyToClipboard = async () => {
    const result = await navigator.permissions.query({ name: "clipboard-write" });
    if (result.state === "granted" || result.state === "prompt") {
      await navigator.clipboard.writeText(fullUrl);
      copied = true;
      setTimeout(() => copied = false, 3000);
    }
  };
</script>

<hgroup>
  <h2>Shortened URL</h2>
  <h3>{link.id}</h3>
</hgroup>

<article>
  <input
    type="url"
    readonly
    name="url"
    value="{fullUrl}"
    aria-label="short url" />
  <div class="grid">
    <button on:click={copyToClipboard} class="secondary">{copied ? 'Copied' : 'Copy'}</button>
  </div>

  <ul>
    <li>Destination: <a href="{link.url}">{link.url}</a></li>
    <li>Created at {link.createdAt.toLocaleString()}</li>
  </ul>
</article>

<p><a href="/">Create another</a></p>