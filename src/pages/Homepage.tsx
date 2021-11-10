import { FC, useContext } from "react";
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from "../queries/GetArticles";
import { GetArticles } from "../types/GetArticles";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import { scroll } from '../utils/helperFunctions';
import { LanguageContext } from "../context/LanguageContext";
import Loader from "react-loaders";

const Homepage:FC = () => {
	const { siteLanguage } = useContext(LanguageContext);
	const {loading, error, data} = useQuery<GetArticles>(GET_ARTICLES, {
		variables: {
			locale: siteLanguage
		}
	});

	return (
		<>
		<Hero onClick={() => scroll("down")}/>
		<Loader active={!loading} type="ball-scale-ripple" />
		{error && <p>Error :(</p>}
		<div className="flex flex-wrap">
			{data && data.articleCollection.items.map(article => {
				return (
					<Card 
						key={article.sys.id} 
						title={article.title}
						description={article.description.json}
						image={article.image.url}
						alt={article.image.description}
						tags={article.tagCollection.items}
					/>
				)
			})}
		</div>
		<button onClick={() => scroll("top")}>TOP</button>
		</>
	);
}

export default Homepage;
