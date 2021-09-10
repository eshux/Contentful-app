import { useState, useEffect, useContext } from "react";
import { spaceContent } from "../APIs/spaceContent";
import { CDA_ACCESS_TOKEN, CPA_ACCESS_TOKEN, SPACE_ID } from "../config/space-config";
import { LanguageContext } from "../context/LanguageContext";
import { BlogType } from "../types/blogQuery/blogType";
import { HomepageType } from "../types/homepageQuery/homepageType";

const useContentful = (queryData: (lang: string) => string, isPreview?: boolean) => {
	const [data, setData] = useState<HomepageType | BlogType | null>(null);
	const [errors, setErrors] = useState<Error[] | null>(null);
  const { siteLanguage } = useContext(LanguageContext);

	console.log("Data", data)

  const query = queryData(siteLanguage);

	useEffect(() => {
			window
				.fetch(spaceContent(SPACE_ID), {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${isPreview ? CPA_ACCESS_TOKEN : CDA_ACCESS_TOKEN}`,
					},
					body: JSON.stringify({ query, variables: { isPreview } }),
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
		}, [query, isPreview]);

  return {data, errors}
};

export default useContentful;
