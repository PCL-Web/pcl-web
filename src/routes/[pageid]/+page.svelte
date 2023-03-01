<script>

import { onMount } from 'svelte';
import {ApiUrl} from '../../stores.js';
import PageSection from '../../components/PageSection.svelte';
export let data;

const PagesApiURL = `${ApiUrl}/api/pages/?filters[slug][$eq]=${data.page.slug}&populate=*`;
let pageDetails;

onMount(() => {
    fetch(PagesApiURL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
         pageDetails = data;
      })
      .catch(error => {
        console.error('There was a problem fetching the page data:', error);
      });
  });
</script>

<svelte:head>
  <meta name="title" content="{pageDetails ? pageDetails.data[0].attributes.SEO.Title : 'Default title'}">
  <meta name="description" content="{pageDetails ? pageDetails.data[0].attributes.SEO.Description : 'Default description'}">
  <meta name="keywords" content="{pageDetails ? pageDetails.data[0].attributes.SEO.Keywords : 'Default keywords'}">
</svelte:head>


{#if pageDetails}
  <h1 class="pagetitle">{pageDetails.data[0].attributes.Title}</h1>

  {#each pageDetails.data[0].attributes.sections.data as section}
      <PageSection data={section} />
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
