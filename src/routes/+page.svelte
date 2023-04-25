<script>
  import { enhance } from "$app/forms";
  import { isUrlValid } from "$lib/util";

  let url = "";

  $: isValid = isUrlValid(url);
</script>

<hgroup>
  <h1>shorturrl</h1>
  <h2>Simple URL Shortener</h2>
</hgroup>

<form method="post" use:enhance>
  <input
    bind:value={url}
    type="url"
    required="required"
    name="url"
    autocomplete="off"
    placeholder="https://example.com"
    aria-label="url"
    aria-invalid={url === '' ? null : !isValid}
  />
  <button type="submit" disabled="{!isValid}">Short</button>
</form>
