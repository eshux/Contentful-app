import React, { FC } from "react";
import { BookmarkType } from "../../types/homepageQuery/bookmarkType";
import styles from './Card.module.scss';

type Props = {
  bookmark: BookmarkType
}

const Card:FC<Props> = ({ bookmark }) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {bookmark.tagCollection.items.map(tag => {
          return (
            <div key={tag.sys.id} className={styles.tag}>
              <span>{tag.name}</span>
            </div>  
          )
        })}
      </div>
      <h4 className="text-center">{bookmark.title}</h4>
      <p className={styles.paragraph}>{bookmark.description}</p>
      <a className={styles.anchor} target="_blank" href={bookmark.url} rel="noreferrer">Visit</a>
    </div>
  )
}

export default Card;