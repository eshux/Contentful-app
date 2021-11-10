import { FC, useState } from 'react';
import styles from './TopButton.module.scss';
import up from '../../assets/up.svg';
import { scroll } from '../../utils/helperFunctions';

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
      <img src={up} alt="" />
    </button>
  )
}

export default TopButton;