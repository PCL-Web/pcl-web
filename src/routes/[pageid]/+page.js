import { ApiUrl } from '../../stores.js';

export const load = async ({ fetch, params }) => {
	const fetchPage = async (id) => {
		let fetchUrl = `${ApiUrl}/api/pages/?filters[slug][$eq]=${id}&populate[section][populate]=*&populate[SEO]=*`;
		const pageRes = await fetch(fetchUrl);
		if (!pageRes.ok) {
			throw new Error("Error fetching page data");
		}
		const pageData = await pageRes.json();
		return pageData.data;
	};

	const pageData = await fetchPage(params.pageid);

	return {
		pageData: pageData[0]
	};
};
