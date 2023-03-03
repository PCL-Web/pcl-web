import { ApiUrl } from '../../stores.js';

export const load = async ({ fetch, params }) => {

console.log('page.js = params: ', params);

	const fetchPage = async (id) => {
		let fetchUrl = `${ApiUrl}/api/pages/?filters[slug][$eq]=${id}&populate=*`;
		const pageRes = await fetch(fetchUrl);
		const pageData = await pageRes.json();
		console.log('page.js = pageData: ', pageData.data);
		return pageData.data;
	};

	return {
		pageData: fetchPage(params.pageid)
	};
};
