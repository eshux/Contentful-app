import React, { FC } from "react";
import { BookmarkType } from "../../types/homepageQuery/bookmarkType";
import Card from "../Card/Card";
import styles from './Bookmarks.module.scss';

type Props = {
  data: BookmarkType[]
}

const Bookmarks:FC<Props> = ({ data }) => {

  return (
    <section className={styles.bookmarks}>
      {data.map(item => {
        return (
          <Card key={item.sys.id} bookmark={item} />
        )
      })}
    </section>
  )
}

export default Bookmarks;