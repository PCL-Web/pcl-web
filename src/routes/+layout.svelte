<script>
import { onMount } from 'svelte';
import { navigation, navigationApiUrl } from '../stores.js';

import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
import '../global.css'



// need to do this once instead of each time the layout is rendered
onMount(async () => {
        await fetchNavigation();
  });

  const fetchNavigation = async () => {
    const res = await fetch(navigationApiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch navigation data (status ${res.status})`);
    }

    const data = await res.json();
    navigation.set(data);

  };

</script>

<Header />

  <main class="flex-shrink-0">
    <div class="container-fluid">
      <slot />
    </div>
  </main>
   
<Footer />


<style>

</style>