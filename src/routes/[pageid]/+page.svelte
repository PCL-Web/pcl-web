<script>
import Section from '../../components/Section.svelte';
export let data;

$: ({pageData} = data);
let sectionids = [];
$: {
  if (data.pageData) {
    sectionids = data.pageData.attributes.section.map(section => section.id);
  }
  console.log(sectionids);
}
</script>

<svelte:head>
  <meta name="title" content="{pageData.attributes.SEO ? pageData.attributes.SEO.Title : 'Default title'}">
  <meta name="description" content="{pageData.attributes.SEO ? pageData.attributes.SEO.Description : 'Default description'}">
  <meta name="keywords" content="{pageData.attributes.SEO ? pageData.attributes.SEO.Keywords : 'Default keywords'}">
</svelte:head>

{#if pageData}
 <!--section:  content, title, id -->
{#each pageData.attributes.section as section}
       <Section data={section} sectionids={sectionids} />
  {/each}

{/if}


 <style>

</style>
