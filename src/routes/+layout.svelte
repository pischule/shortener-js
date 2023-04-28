<script>
  import "@picocss/pico/css/pico.min.css";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<nav class="container-fluid">
  <ul>
    <li><a href="/"><img class="logo" src="/cat.svg" alt="cat logo"></a></li>
  </ul>
  <ul>
    {#if $page.data.session}
      <li><a href="/my-links">My Links</a></li>
      <li>
        <button class="outline" data-placement="left" data-tooltip={`Signed in as ${$page.data.session.user?.name ?? "User"}`}
                on:click={() => signOut()}>Sign out
        </button>
      </li>
    {:else}
      <li>
        <button class="outline" on:click={() => signIn("github")}>Sign In with GitHub</button>
      </li>
    {/if}
  </ul>
</nav>
<main class="container">
  <slot />
</main>

<style>
    .logo {
        width: 2.7rem;
        height: 2.7rem;
        padding: 5px;
    }
</style>