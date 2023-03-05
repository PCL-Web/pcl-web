import { ApiUrl } from '../../stores.js';

export const load = async ({ fetch, params }) => {
	const fetchPage = async (id) => {
		let fetchUrl = `${ApiUrl}/api/pages/?filters[slug][$eq]=${id}&populate=sections`;
		//console.log('fetchUrl', fetchUrl);
		const pageRes = await fetch(fetchUrl);
		const pageData = await pageRes.json();
		return pageData.data;
	};
	return {
		pageData: pageData
	};
};

// Path: src\routes\[pageid]\
