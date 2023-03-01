<script>
import { navigation } from '../stores.js';
console.log("nav", $navigation);
</script>


<header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            {#if $navigation}
                {#each $navigation as item}
                <li><a class="nav-link px-3 text-white" href="{item.path}"  rel="external" >{item.title}</a></li>
                {/each}
            {/if}
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-danger" type="submit">Book a demo</button>
          </form>
        </div>
      </div>
    </nav>
  </header>







  <style>


  </style>