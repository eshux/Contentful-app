import React, {FC} from 'react'
import { BlogPostType } from '../../types/blog/blogPostType';
import styles from './PostCard.module.scss';

type Props = {
  data: BlogPostType;
}

const PostCard:FC<Props> = ({ data }) => {

  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        {data.tagsCollection.items.map(it => {
          return <p className="mr-8" key={it.sys.id}>{it.name}</p>
        })}
      </div>
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
    </div>
  );
}

export default PostCard;