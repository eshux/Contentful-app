import { FC, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import styles from './Footer.module.scss';

const Footer:FC = () => {

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2021 eguza</p>
    </footer>
  );
} 

export default Footer;