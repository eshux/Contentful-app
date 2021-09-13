import React, { FC } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { PersonType } from "../../types/homepage/personType";
import { RichTextFormater } from "../RichTextFormater/RichTextFormater";
import styles from './Hero.module.scss';

type Props = {
  person: PersonType
}

const Hero:FC<Props> = ({ person }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {documentToReactComponents(person.bio.json, RichTextFormater({textColor: "white"}))}
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