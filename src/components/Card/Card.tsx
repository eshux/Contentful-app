import { FC } from 'react'
import { Tag } from '../../types/TagType';
import styles from './Card.module.scss';

type Props = {
  tags: Tag[];
  image?: string;
  alt: string;
  title: string;
  description: string;
}

const Card:FC<Props> = ({ tags, image, alt, title, description }) => {

  return (
    <div className={styles.card}>
      {image && 
        <>
          <div className={styles.imageWrapper}>
            <img 
              src={image} 
              className={styles.img} 
              alt={alt}
            />
            <div className={styles.overlay}>
              {tags.map(it => {
                return <p className="mr-8" key={it.contentfulMetadata.tags[0].id}>#{it.name}</p>
              })}
            </div>
          </div>
        </>
      }
      <div className={styles.cardContent}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;