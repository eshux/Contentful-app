import { FC, useContext, useState } from "react";
import { useQuery } from '@apollo/client';
import Hero from "../components/Hero/Hero";
import { compareArrays, scroll } from '../utils/helperFunctions';
import { LanguageContext } from "../context/LanguageContext";
import NavBar from "../components/NavBar/NavBar";
import { GetTags } from "../types/GetTags";
import { GET_TAGS } from "../queries/GetTags";
import ArticleSection from "../components/ArticleSection/ArticleSection";
import Header from "../components/Header/Header";

const Homepage:FC = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [tagsToFilter, setTagsToFilter] = useState<string[]>([]);
	const { siteLanguage } = useContext(LanguageContext);
	const {loading:loadingTags, error:errorTags, data:dataTags} = useQuery<GetTags>(GET_TAGS, {
		variables: {
			locale: siteLanguage
		}
	})
	const tagIds = dataTags?.tagCollection.items.map(tag => tag.contentfulMetadata.tags[0].id);

  const selectTag = (id:string) => {
    const newTags = [...selectedTags];
    if (!newTags.includes(id)) {
      newTags.push(id);
      setSelectedTags(newTags);
    } else {
      const tagId = newTags.indexOf(id);
      newTags.splice(tagId, 1)
      setSelectedTags(newTags); 
    }
  }
  
  const tags = dataTags?.tagCollection.items;

	return (
		<>
			<Header />
			<Hero onClick={() => scroll("down")}/>
			<NavBar 
				loading={loadingTags}
				error={errorTags}
				tags={tags}
				selectAll={() => setSelectedTags([])}
				selectedTags={selectedTags}
				onSelect={(id: string) => selectTag(id)}
				onFilter={() => setTagsToFilter(selectedTags)}
				changesMade={!compareArrays(selectedTags, tagsToFilter)}
			/>
			{tagIds &&
				<ArticleSection tags={!tagsToFilter.length ? tagIds : tagsToFilter} />
			}
		</>
	);
}

export default Homepage;
