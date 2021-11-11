import { FC, useContext, useState } from 'react';
import styles from './NavBar.module.scss';
import { GET_TAGS } from '../../queries/GetTags';
import { useQuery } from '@apollo/client';
import { LanguageContext } from '../../context/LanguageContext';
import { GetTags } from '../../types/GetTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders';
import Button from '../Button/Button';

const NavBar:FC = () => {
  const [open, setOpen] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { siteLanguage, buttonList } = useContext(LanguageContext);
  const {loading, error, data} = useQuery<GetTags>(GET_TAGS, {
    variables: {
      locale: siteLanguage
    }
  })

  const selectTag = (id:string) => {
    const newTags = [...selectedTags];
    if (!newTags.includes(id)) {
      newTags.push(id);
      setSelectedTags(newTags);
    } else {
      const tagId = newTags.indexOf(id);
      newTags.splice(tagId, 1)
      setSelectedTags(newTags);
    }
  }
  
  const tags = data?.tagCollection.items;

  return (
    <div className={`${open ? styles.open : ""} ${styles.container}`}>
      <div className={styles.content}>
        <Loader active={loading} type="ball-pulse" />
        {error && <p>Error :(</p>}
        <Button 
            onClick={() => {
              selectedTags.length && setSelectedTags([])
            }} 
            size="small" 
            style={!selectedTags.length ? "clicked" : undefined} 
            disableElevation
          >
            {buttonList.all}
        </Button>
        {tags?.map(tag => {
          return (
            <Button 
              key={tag.sys.id} 
              onClick={() => selectTag(tag.sys.id)} 
              size="small" 
              style={selectedTags.includes(tag.sys.id) ? "clicked" : undefined} 
              disableElevation
            >
              {tag.name}
            </Button>
          )
        })}

      </div>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faAngleDown} size="lg" className={`${styles.icon}`} />
      </button>
    </div>
  )
}

export default NavBar;