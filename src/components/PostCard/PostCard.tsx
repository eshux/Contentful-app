import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import { BlogPostType } from '../../types/blogQuery/blogPostType';
import styles from './PostCard.module.scss';

type Props = {
  data: BlogPostType;
}

const PostCard:FC<Props> = ({ data }) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img 
          src={data.mainImage.url} 
          className={styles.img} 
          alt={data.mainImage.description}
        />
      </div>
      <div className={styles.cardContent}>
        <h4 
          className="text-center"
        >
          {data.title}
        </h4>
        {data.introText.substring(0, 197) + "..."}
      </div>
      {/* <Link 
        to="/blog-detail/${slug}" 
        className={styles.anchor} 
        target="_blank" 
        href={bookmark.url} 
        rel="noreferrer"
      >
        Visit
      </a> */}
    </div>
  );
}

export default PostCard;