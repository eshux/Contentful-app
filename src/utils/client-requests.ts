import { CDA_ACCESS_TOKEN, SPACE_ID } from "../config/space-config";

const contentful = require('contentful');

export const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: CDA_ACCESS_TOKEN
});

//client fetch

	// useEffect(() => {
	// 	client
	// 		.getEntries({
	// 			content_type: "homepage",
	// 			locale: lang
	// 		})
	// 		.then((res: any) => {
	// 			console.log(res.items[0].fields);
	// 			const response = {
	// 				title: res.items[0].fields.title,
	// 				logo: {
	// 					url: res.items[0].fields.logo.fields.file.url,
	// 					title: res.items[0].fields.logo.fields.title,
	// 				},
	// 			};
	// 			setPage(response);
	// 		});
	// 	// console.log(resp);
	// }, [lang]);