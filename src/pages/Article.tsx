import { useQuery } from '@apollo/client';
import { FC, useContext } from 'react'
import Loader from 'react-loaders';
import { useParams } from 'react-router';
import { PREVIEW } from '../config/config';
import { LanguageContext } from '../context/LanguageContext';
import { GET_ARTICLE_BY_SLUG } from '../queries/GetArticleBySlug';
import { GetArticleBySlug } from '../types/GetArticleBySlug';
import { renderRichText } from '../utils/renderRichText';

const Article:FC = () => {
  const { slug }: { slug: string } = useParams();
  const { siteLanguage } = useContext(LanguageContext);
  const { loading, error, data } = useQuery<GetArticleBySlug>(GET_ARTICLE_BY_SLUG, {
		variables: {
			locale: siteLanguage,
      preview: PREVIEW,
      slug: slug
		},
	});



  const article = data && data.articleCollection.items[0]

  return (
    <>
    {(loading || error) &&
        <div className="flex-center mt-80" style={{height: "100vh"}}>
          <Loader active={loading} type="ball-pulse" />
          {error && <p>Error :(</p>}
        </div>
      }
      <p>Article: {slug}</p>
      {article && article.content && renderRichText(article.content.json, article.content.links)}
    </>
  );
}

export default Article;