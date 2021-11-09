import { FC } from "react";
import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  size?: "large";
}

const Bookmarks:FC<Props> = ({ onClick, size, children }) => {

  return (
    <button onClick={onClick} className={`${styles.button} ${size === "large" ? styles.large : ""}`}>
      {children}
    </button>
  )
}

export default Bookmarks;