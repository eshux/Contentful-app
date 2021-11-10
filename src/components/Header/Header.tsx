import { FC, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { languageNames, languages } from '../../data/languages';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header:FC = () => {
  const { siteLanguage, setSiteLanguage } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {languageNames.map((lang, i) => {
          return (
            <div className="mb-16" key={lang}>
              <Button 
                style={siteLanguage === languages[i] ? 'clicked' : undefined} 
                size="small" 
                onClick={() =>
                  siteLanguage !== languages[i] && setSiteLanguage(languages[i])
                }
                disableElevation
                vertical
              >
                {lang}
              </Button>
            </div>
          )
        })}
      </nav>
    </header>
  );
} 

export default Header;