<!-- PageSection.svelte -->
<script context="module">
import { ApiUrl } from '../stores.js';

export const load = async ({ fetch, section }) => {

	const fetchSection = async (id) => {
		let fetchSectionUrl = `${ApiUrl}/api/sections/${id}?populate=*`;
		const sectionRes = await fetch(fetchSectionUrl);
		const sectionData = await sectionRes.json();
    console.log(fetchSectionUrl)
		return sectionData;
	};

  console.log("section.id: " + section.id)
	const sectionData = await fetchSection(section.id);

	return {
		sectionData: sectionData
	};
};

export let section;
</script>

<script>
import { page } from '$app/stores';

$: console.log($page)
$: ({ sectionData } = $page);

console.log(sectionData);
</script>

