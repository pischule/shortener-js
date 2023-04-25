<nav class="container-fluid">
  <ul>
    <li><a href="/"><img class="logo" src="/cat.svg" alt="cat logo"></a></li>
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