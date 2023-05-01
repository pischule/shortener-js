<script>
  import "../app.css";
  import { page } from "$app/stores";
</script>

<nav class="navbar">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">shorturrl</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#if $page.data.session}
        <li><a href="/my-links">My Links</a></li>
        <li><a href="/auth/signout">Sign out</a></li>
      {:else}
        <li><a href="/auth/signin">Sign in</a></li>
      {/if}
    </ul>
  </div>
</nav>

<div class="container mx-auto">
  <slot />
</div>