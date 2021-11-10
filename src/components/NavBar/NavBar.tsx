import { FC } from 'react';
import styles from './NavBar.module.scss';
import arrow from '../../assets/arrow.svg'

const NavBar:FC = () => {

  return (
    <div className={`${styles.containerHidden} ${styles.container}`}>
      <div className={styles.content}>
        <p>Hi there</p>

      </div>
      <button className={styles.button}>
        Filter by Categories
        {/* <img src={arrow} alt="" className={styles.arrow}/> */}
      </button>
    </div>
  )
}

export default NavBar;