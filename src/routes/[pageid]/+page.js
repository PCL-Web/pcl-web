import { ApiUrl } from '../../stores.js';

export const load = async ({ fetch, params }) => {
	console.log('load', params);

	const fetchPage = async (id) => {
		let fetchUrl = `${ApiUrl}/api/pages/?filters[slug][$eq]=${id}&populate=*`;
		console.log('fetchUrl: ', fetchUrl);
		const pageRes = await fetch(fetchUrl);
		console.log('pageRes: ', pageRes);
		const pageData = await pageRes.json();
		console.log('pageData: ', pageData);
		return pageData.data;
	};

	return {
		pageData: fetchPage(params.pageid)
	};
};
