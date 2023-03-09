<script> 
import { onMount } from 'svelte';
import { navigation, navigationApiUrl } from '../stores.js';
import { goto } from '$app/navigation';
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
import '../global.css'

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

    // go to home page
     let firstItem = $navigation[Object.keys($navigation)[0]];
     if (firstItem.path) {
      goto(firstItem.path);
     }

  };

</script>

<Header />
  <main>
      <slot />
  </main>
<Footer />