import { useState, useEffect, useContext } from "react";
import { spaceContent } from "../APIs/spaceContent";
import { CDA_ACCESS_TOKEN, CPA_ACCESS_TOKEN, SPACE_ID } from "../config/space-config";
import { LanguageContext } from "../context/LanguageContext";
import { BlogType } from "../types/blog/blogType";
import { SingleBlogType } from "../types/blog/singleBlogType";
import { HomepageType } from "../types/homepage/homepageType";

const useContentful = (
	queryData: () => string,
	isPreview:(boolean | null) = null, 
	id:(string | null) = null, 
	tags: (string[] | null) = null
) => {
	const [data, setData] = useState<HomepageType | BlogType | SingleBlogType | null>(null);
	const [errors, setErrors] = useState<Error[] | null>(null);
  const { siteLanguage } = useContext(LanguageContext);

	const query = queryData();
	const lang = siteLanguage;

	useEffect(() => {
			window
				.fetch(spaceContent(SPACE_ID), {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${isPreview ? CPA_ACCESS_TOKEN : CDA_ACCESS_TOKEN}`,
					},
					body: JSON.stringify({ query, variables: { isPreview, lang, id, tags } }), // names has to be exactly the same as in query
				})
				.then((response) => response.json())
				.then(({ data, errors }) => {
					if (errors) {
						setErrors(errors)
					}
          if (data) { 
            setData(data);
          }
			  })
        .catch((error) => {
          setErrors([error])
        })
		}, [query, isPreview, lang, id, tags]);

  return {data, errors}
};

export default useContentful;
