import { useQuery } from '@apollo/client';
import { FC, useContext } from 'react';
import Loader from 'react-loaders';
import { LanguageContext } from '../../context/LanguageContext';
import { GET_ARTICLES } from '../../queries/GetArticles';
import { GetArticles } from '../../types/GetArticles';
import Card from '../Card/Card';
import styles from './ArticleSection.module.scss';

type Props = {
  tags: string[];
}

const ArticleSection: FC<Props> = ({ tags }) => {
  const { siteLanguage } = useContext(LanguageContext);
  const {loading:loadingArticles, error:errorArticles, data:dataArticles} = useQuery<GetArticles>(GET_ARTICLES, {
		variables: {
			locale: siteLanguage,
			tags: tags
		}
	});

  const articles = dataArticles?.articleCollection.items;

  return (
    <>
      <Loader active={loadingArticles} type="ball-scale-ripple" />
      {errorArticles && <p>Error :(</p>}
      <div className="flex flex-wrap">
        {articles && articles.map(article => {
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
    </>
  )
}

export default ArticleSection;