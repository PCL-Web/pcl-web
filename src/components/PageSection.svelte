<script>
import { onMount } from 'svelte';
import {ApiUrl} from '../stores.js';
import Article from './Article.svelte';
export let data;


let SectionID = data.id;
const SectionApiURL = `${ApiUrl}/api/sections/${SectionID}?populate=*`;
let sectionDetails;

onMount(() => {
  fetch(SectionApiURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
        sectionDetails = data;
    })
    .catch(error => {
      console.error('There was a problem fetching the page data:', error);
    });
});

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

