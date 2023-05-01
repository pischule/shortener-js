<script>
  export let data;

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { isUrlValid } from "$lib/util";

  let url = data.link.url;
  let fullUrl = `${$page.url.origin}/${data.link.id}`;
</script>

<hgroup>
  <h2>Edit URL</h2>
  <h3>{data.link.id}</h3>
</hgroup>

<article>
  <form id="form-update" method="post" action="?/update" use:enhance></form>
  <form id="form-delete" method="post" action="?/delete" use:enhance></form>

  <label>
    Short url:
    <input type="url" readonly name="url" value={fullUrl} aria-label="short url" />
  </label>

  <label>
    Destination
    <input bind:value={url}
           type="url"
           required="required"
           name="url"
           autocomplete="off"
           form="form-update"
           aria-label="url"
           aria-invalid={!url || isUrlValid(url) ? null : true}
    >
  </label>

  <div class="grid">
    <button on:click={() => goto('view')} class="secondary">Cancel</button>
    <button type="submit" form="form-update">Save</button>
    <button class="red" type="submit" form="form-delete">Delete</button>
  </div>
</article>

<style>
    .red {
        --primary: #e53935;
        --primary-hover: #d32f2f;
        --primary-focus: rgba(229, 57, 53, 0.125);
        --primary-inverse: #FFF;
    }
</style>
