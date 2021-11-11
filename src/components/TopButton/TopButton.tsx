import { FC, useState } from 'react';
import styles from './TopButton.module.scss';
import { scroll } from '../../utils/helperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const TopButton:FC = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setHidden(false)
    } 
    else if (scrolled <= 300){
      setHidden(true)
    }
  }
  window.addEventListener('scroll', toggleHidden);

  return (
    <button 
      className={`${styles.button} ${hidden ? styles.hide : ""}`}
      onClick={() => scroll("top")}
    >
        <FontAwesomeIcon icon={faAngleUp} size="lg" className={styles.icon} />

      {/* <img src={up} alt="" className={styles.icon}/> */}
    </button>
  )
}

export default TopButton;