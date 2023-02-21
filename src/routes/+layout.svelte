<script>
  import { onMount } from 'svelte';

  const MenuApiURL = 'http://localhost:1337/api/navigation/render/1?type=TREE';

  let menu;

  onMount(async () => {
    const response = await fetch(MenuApiURL);
    menu = await response.json();
    return menu;
  });
</script>


<header class="site-header sticky-top py-1">
    <nav class="container d-flex flex-column flex-md-row justify-content-between">
      <div class="py-2" href="/" aria-label="Logo">LOGO</div>

      {#if menu}
          {#each menu[0].items as item}
          <a class="py-2 d-none d-md-inline-block" href="{item.path}" >{item.title}</a>
          {/each}
      {/if}
    </nav>
  </header>

  <div class="container">
 
      <slot />

  </div>
   

    <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
           
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="/">Cool stuff</a></li>
            
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="/">Resource name</a></li>
   
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="/">Business</a></li>

            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="/">Team</a></li>

            </ul>
          </div>
        </div>
      </footer>