<script>
import {ApiUrl} from '../stores.js';
import Article from './Article.svelte';
export let data;

let sectionDetails;
let sectionDetailsFetch;

$: sectionDetailsFetch = updateSection(data).then(data => {sectionDetails = data;}) // will run whenever data updates

async function updateSection(section) {
  try {
    const response = await fetch(`${ApiUrl}/api/sections/${section.id}?populate=article`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
    
  } catch (error) {
    console.error('There was a problem fetching the page data:', error);
  }
}


</script>

<section>
  {#if sectionDetails}
    {#if sectionDetails.data.attributes.article}
    <Article content={sectionDetails.data.attributes.article} />
   {/if}
{/if}
</section>

<style>
section {
    background-color: #f1f1f1;
    padding: 0px;
    margin-bottom:10px;
    min-height:20vh;
    width:auto;
}
</style>

