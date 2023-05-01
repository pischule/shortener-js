<script>
  import { enhance } from "$app/forms";
  import { isUrlValid } from "$lib/util";

  let url = "";
</script>

<h1 class="text-2xl font-bold py-8">URL shortener</h1>

<form class="form-control py" method="post" use:enhance>
  <div class="flex input-group input-group-lg">
    <input
      class="flex-1 input input-primary"
      bind:value={url}
      type="url"
      required
      name="url"
      autocomplete="off"
      placeholder="https://example.com"
      aria-label="url"
      aria-invalid={!url || isUrlValid(url) ? null : true}
    />
    <button class="flex-none btn btn-primary " type="submit">Short</button>
  </div>
</form>
