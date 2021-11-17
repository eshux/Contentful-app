import { useQuery } from '@apollo/client';
import { FC, useContext } from 'react';
import Loader from 'react-loaders';
import { LanguageContext } from '../../context/LanguageContext';
import { GET_ARTICLES } from '../../queries/GetArticles';
import { GetArticles } from '../../types/GetArticles';
import Card from '../Card/Card';
import Masonry from 'react-masonry-css';
import styles from './ArticleSection.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { PREVIEW } from '../../config/config';

type Props = {
  tags: string[];
}

const COUNT = 2;

const ArticleSection: FC<Props> = ({ tags }) => {
  // const [ articles, setArticles ] = useState<Article[]>();
  const { siteLanguage } = useContext(LanguageContext);
  const {loading, error, data, fetchMore} = useQuery<GetArticles>(GET_ARTICLES, {
		variables: {
			locale: siteLanguage,
			tags: tags,
      limit: COUNT,
      skip: 0,
      preview: PREVIEW
		},
    // onCompleted: ((data) => setArticles(data.articleCollection.items))
	});


  // console.log(articles)
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
            <Link key={article.sys.id} className={styles.link} to={`/article/${article.slug}`}>
              <Card 
                title={article.title}
                description={article.description.json}
                image={article.image && article.image.url}
                alt={article.image && article.image.description}
                tags={article.tagCollection.items}
              />
            </Link>
          )
        })}
        </Masonry>
        {data && data.articleCollection.total > data.articleCollection.skip + COUNT &&
          <div className="flex-center mb-40 mt-40">
            <Button 
              size="large" 
              onClick={() => {
                fetchMore({
                  variables: {
                    skip: data?.articleCollection.skip+COUNT,
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                      return previousResult;
                    }
                    const newNodes = fetchMoreResult.articleCollection.items;
                    const skipData = fetchMoreResult.articleCollection.skip;
                    const totalData = fetchMoreResult.articleCollection.total;
                    return {
                      ...previousResult,
                      articleCollection: {
                        items: [...previousResult.articleCollection.items, ...newNodes],
                        skip: skipData,
                        total: totalData
                      }
                    };
                  }
                })
              }}
            >
              Load more
            </Button>
          </div>
        }
    </>
  )
}

export default ArticleSection;