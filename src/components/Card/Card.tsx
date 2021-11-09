import { FC } from 'react'
import { Document } from "@contentful/rich-text-types";
import { Tag } from '../../types/TagType';
import styles from './Card.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RichTextFormater } from "../RichTextFormater/RichTextFormater";

type Props = {
  tags: Tag[];
  image: string;
  alt: string;
  title: string;
  description: Document | string;
}

const Card:FC<Props> = ({ tags, image, alt, title, description }) => {

  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        {tags.map(it => {
          return <p className="mr-8" key={it.sys.id}>{it.name}</p>
        })}
      </div>
      <div className={styles.cardImage}>
        <img 
          src={image} 
          className={styles.img} 
          alt={alt}
        />
      </div>
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