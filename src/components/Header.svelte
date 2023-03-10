<script>
  import { onMount } from 'svelte';
  import { navigation } from '../stores.js';
  let showBackground = false;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  function handleScroll() {
    showBackground = window.scrollY > 56;
  }

</script>

<header >
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md fixed-top navbar-dark" class:showBackground>
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
   LOGO
    
          <!-- <img src="{ImageUrl}{$globaldata.PCLLogo.data.attributes.formats.thumbnail.url}" alt="Logo" class="img-fluid" /> -->
         
        
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-md-0">
            {#if $navigation}
                {#each $navigation as item}
                <li><a class="nav-link px-3 text-white" href="{item.path}" data-sveltekit-prefetch>{item.title}</a></li>
                {/each}
            {/if}
          </ul>
          </div>
          <div class="d-flex">
          <form class="d-flex" role="search">
            <button class="btn btn-danger demo" type="submit">Book a demo</button>
          </form>
        </div>
      </div>
    </nav>
  </header>


