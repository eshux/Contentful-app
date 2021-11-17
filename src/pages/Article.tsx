import { FC } from 'react'
import { useParams } from 'react-router';

const Article:FC = () => {
  const { slug }: { slug: string } = useParams();

  return (
    <>
      <p>Article: {slug}</p>
    </>
  );
}

export default Article;