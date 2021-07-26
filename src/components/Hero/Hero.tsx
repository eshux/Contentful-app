import React, { ReactNode, FC } from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Node } from '@contentful/rich-text-types';
import styles from './Hero.module.scss';
import { PersonType } from "../../types/homepageQuery/personType";

type Props = {
  person: PersonType
}

const Hero:FC<Props> = ({ person }) => {

  const RICHTEXT_OPTIONS:Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => {
        return (
          <b style={{ color: "lightblue" }}>{text}</b>
        )
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => {
        return (
          <p className={styles.paragraph}>{children}</p>
        );
      },
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
        return (
          <a className={styles.anchor} href={node.data.uri} target="_blank" rel="noreferrer">{children}</a>
        )
      }
    }
  }


  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {documentToReactComponents(person.bio.json, RICHTEXT_OPTIONS)}
        <div className={styles.socials}>
          <a className={styles.icon} href={person.facebook}>f</a> 
          <a className={styles.icon} href={person.linkedin}>ln</a>
        </div>
      </div>
      <img src={person.image.url} alt={person.image.title} className={styles.img}/> 
    </section>
  )
}

export default Hero;