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

<section class="gradback">
  {#if sectionDetails}
    {#if sectionDetails.data.attributes.article}
    <Article content={sectionDetails.data.attributes.article} />
   {/if}
{/if}
</section>

<style>
section {
    padding: 60px 0px 0px 0px;
    min-height:20vh;
    height:100vh;
    width:auto;
    overflow:visible
}

.gradback{
  background: linear-gradient(to left top, cyan, white);
}
</style>

