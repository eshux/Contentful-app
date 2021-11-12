import { useQuery } from '@apollo/client';
import { FC, useContext } from 'react';
import Loader from 'react-loaders';
import { LanguageContext } from '../../context/LanguageContext';
import { GET_ARTICLES } from '../../queries/GetArticles';
import { GetArticles } from '../../types/GetArticles';
import Card from '../Card/Card';
import Masonry from 'react-masonry-css'
import styles from './ArticleSection.module.scss';

type Props = {
  tags: string[];
}

const ArticleSection: FC<Props> = ({ tags }) => {
  const { siteLanguage } = useContext(LanguageContext);
  const {loading, error, data} = useQuery<GetArticles>(GET_ARTICLES, {
		variables: {
			locale: siteLanguage,
			tags: tags
		}
	});

  const articles = data?.articleCollection.items;

  const breakpointColumnsObj = {
    default: 6,
    2000: 5,
    1700: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      {(loading || error) &&
        <div className="flex-center mt-80" style={{height: "100vh"}}>
          <Loader active={loading} type="ball-pulse" />
          {error && <p>Error :(</p>}
        </div>
      }
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {articles && articles.map((article, i) => {
          return (
            <>
              <Card 
                key={article.sys.id} 
                title={article.title}
                description={article.description.json}
                image={article.image.url}
                alt={article.image.description}
                tags={article.tagCollection.items}
              />
          </>
          )
        })}
        </Masonry>
    </>
  )
}

export default ArticleSection;