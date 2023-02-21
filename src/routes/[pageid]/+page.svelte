<script>

import { onMount } from 'svelte';
export let data;

const PagesApiURL = `http://localhost:1337/api/pages/${data.page.id}?populate=*`;

let pageDetails;

onMount(async () => {
  pageDetails = await getPages();
});

async function getPages() {
  const response = await fetch(PagesApiURL);
  return await response.json();
}
</script>


{#await getPages() then pagedetails}
    <h1 class="pagetitle">{pagedetails.data.attributes.Title}</h1>

    {#each pagedetails.data.attributes.sections.data as section}
        <div class="section">{section.attributes.SectionName}</div>
    {/each}
{/await}



<style>
  .pagetitle {
        font-size: 2rem;
        font-weight: 700;
        margin: 20px 0;
  }
    .section {
        background-color: #f1f1f1;
        padding: 20px;
        margin: 20px 0;
        border-radius: 10px;
    }
</style>