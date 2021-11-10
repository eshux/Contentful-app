import React, { FC, useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';
import styles from './Sidebar.module.scss';

type Props = {
  tags: {
    name: string;
    id: string;
  }[]
  selectTag: (id:string) => void;
  selectedTags: string[];
}
const Sidebar:FC<Props> = ({tags, selectTag, selectedTags}) => {
  // const { blogList } = useContext(LanguageContext);
  
  return (
    <div className={styles.sidebar}>
      {/* <h6 className={styles.titles}>{blogList.searchByTags}</h6> */}
      <div className="flex flex-wrap">
        {tags.map(tag => {
          return (
            <button 
              key={tag.id} 
              className={`${selectedTags.includes(tag.id) ? styles.activeTag : ""} ${styles.tag}`} 
              onClick={() => selectTag(tag.id)}
            >
              {tag.name}
            </button>
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;