<script>
import { onMount } from 'svelte';
export let data;
$: ({pageData} = data);

</script>

<svelte:head>
  <meta name="title" content="{pageData ? pageData[0].attributes.SEO.Title : 'Default title'}">
  <meta name="description" content="{pageData ? pageData[0].attributes.SEO.Description : 'Default description'}">
  <meta name="keywords" content="{pageData ? pageData[0].attributes.SEO.Keywords : 'Default keywords'}">
</svelte:head>

{#if pageData}

<h1 class="pagetitle">{pageData[0].attributes.Title}</h1>
 
{#each pageData[0].attributes.sections.data as section}
<h4>{section.id}</h4>
       <!-- <PageSection data={section} /> -->
  {/each}
{/if}


 <style>
  h1.pagetitle {
    font-size: 2rem;
    font-weight: 200;
    margin: 20px 0;
    text-transform: uppercase;
  }
  
</style>
