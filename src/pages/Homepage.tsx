import { FC } from "react";
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from "../queries/GetArticles";
import { GetArticles } from "../types/GetArticles";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import { scroll } from '../utils/helperFunctions';

const Homepage:FC = () => {
	const {loading, error, data} = useQuery<GetArticles>(GET_ARTICLES);

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error :(</p>
	}

	return (
		<>
		<Hero onClick={() => scroll("down")}/>
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
