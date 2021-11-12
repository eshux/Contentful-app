import { FC, useContext, useState } from 'react';
import styles from './NavBar.module.scss';
import { ApolloError} from '@apollo/client';
import { LanguageContext } from '../../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders';
import Button from '../Button/Button';
import { Tag } from '../../types/TagType';

type Props = {
  loading: boolean;
  error: ApolloError | undefined;
  tags: Tag[] | undefined;
  selectedTags: string[];
  selectAll: () => void;
  onSelect: (id: string) => void;
  onFilter: () => void;
  changesMade?: boolean;
}

const NavBar:FC<Props> = ({ loading, error, tags, selectedTags, selectAll, onSelect, onFilter, changesMade}) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { buttonList } = useContext(LanguageContext);

  const height = document.querySelector("#content")?.clientHeight;
  
  const csss = (hover: boolean, height: number | undefined) => ({
    maxHeight: hover && height ? height + "px" : "40px"
  });

  return (
    <div 
      className={`${styles.container} ${open ? styles.open : ""}`}
      onMouseOver={() => { !open && setHover(true)}}
      onMouseOut={() => { !open && setHover(false)}}
      style={csss(hover, height)}
    >
      <div className={styles.content} id="content">
        <div className={styles.innerContent}>
          <Loader active={loading} type="ball-pulse" />
          {error && <p>Error :(</p>}
          <Button 
              onClick={() => {
                selectedTags.length && selectAll()
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
                  key={tag.contentfulMetadata.tags[0].id} 
                  onClick={() => onSelect(tag.contentfulMetadata.tags[0].id)} 
                  size="small" 
                  style={selectedTags.includes(tag.contentfulMetadata.tags[0].id) ? "clicked" : undefined} 
                  disableElevation
                >
                  {tag.name}
                </Button>
              )
            })}
        </div>
        <button className={`${styles.mainButton} ${changesMade ? styles.mainButtonActive : ""}`} onClick={onFilter}>
          <FontAwesomeIcon icon={faSyncAlt} size="lg" className={`${styles.icon}`} />
        </button>
      </div>
      <button className={styles.button} onClick={() => {
        setOpen(!open)
      }}>
        <FontAwesomeIcon icon={faAngleDown} size="lg" className={`${styles.icon}`} />
      </button>
    </div>
  )
}

export default NavBar;