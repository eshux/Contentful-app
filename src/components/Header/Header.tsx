import React, { FC, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { languages } from "../../data/languages";
import { HeaderType } from "../../types/homepage/headerType";
import styles from './Header.module.scss';

type Props = {
  data: HeaderType
  preview: boolean;
  handlePreview: () => void;
}
const lang = ["DE", "EN"]

const Header:FC<Props> = ({ data, preview, handlePreview }) => {
  const { setSiteLanguage, index } = useContext(LanguageContext);
  
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className="flex-align-center">
            <img className={styles.logo} src={data.logo.url} alt={data.logo.title} />
            <h3 className={styles.title}>{data.title}</h3>
        </div>
      </Link>
      <nav className={styles.navigation}>
        <NavLink to="/blog" activeClassName="selected" className={styles.navItem}>Blog</NavLink>
        <NavLink to="/about" activeClassName="selected" className={styles.navItem}>About</NavLink>
      </nav>
      <div className="flex-align-center">
        <input 
          checked={preview} 
          id="preview" 
          type="checkbox" 
          onChange={handlePreview}
        />
        <label className={styles.checkboxLabel} htmlFor="preview">Show preview</label>
        <button 
          className={styles.button} 
          onClick={() => {
            setSiteLanguage(languages[index === 0 ? 1 : 0])}
          }
        >
          {lang[index]}
        </button>
      </div>
    </div>
  );
}

export default Header;