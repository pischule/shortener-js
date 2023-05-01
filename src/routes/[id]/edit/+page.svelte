<script>
  export let data;

  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { isUrlValid } from "$lib/util";

  let url = data.link.url;
  let fullUrl = `${$page.url.origin}/${data.link.id}`;
</script>

<hgroup class="py-3">
  <h1 class="text-2xl font-bold">Edit</h1>
  <h2 class="text-lg">{data.link.id}</h2>
</hgroup>

<form id="form-update" method="post" action="?/update" use:enhance></form>
<form id="form-delete" method="post" action="?/delete" use:enhance></form>

<div class="form-control">

  <label class="label">
    <span class="label-text">
      Destination
    </span>
  </label>
  <input bind:value={url}
         class="input input-bordered"
         type="url"
         required="required"
         name="url"
         autocomplete="off"
         form="form-update"
         aria-label="url"
         aria-invalid={!url || isUrlValid(url) ? null : true}
  >
</div>

<div class="flex py-4 gap-2">
  <a href="view" class="btn flex-1 button">Cancel</a>
  <button class="btn flex-1 btn-primary" type="submit" form="form-update">Save</button>
  <button class="btn flex-1 btn-error" type="submit" form="form-delete">Delete</button>
</div>
