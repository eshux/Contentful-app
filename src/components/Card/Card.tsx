import { FC } from 'react'
import { Document } from "@contentful/rich-text-types";
import { Tag } from '../../types/TagType';
import styles from './Card.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RichTextFormater } from "../RichTextFormater/RichTextFormater";

type Props = {
  tags: Tag[];
  image?: string;
  alt: string;
  title: string;
  description: Document | string;
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
        <h2 
          className={styles.title}
        >
          {title}
        </h2>
        {typeof description === 'string' ? (
          description
        ) : (
            documentToReactComponents(description, RichTextFormater({textColor: "black"}))
        )}
      </div>
    </div>
  );
}

export default Card;