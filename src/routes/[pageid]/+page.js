import { ApiUrl } from '../../stores.js';

export const load = async ({ fetch, params }) => {

	const fetchPage = async (id) => {
		let fetchUrl = `${ApiUrl}/api/pages/?filters[slug][$eq]=${id}&populate=*`;
		const pageRes = await fetch(fetchUrl);
		const pageData = await pageRes.json();
		return pageData.data;
	};

	const pageData = await fetchPage(params.pageid);



	return {
		pageData: pageData
	};
};

// Path: src\routes\[pageid]\
