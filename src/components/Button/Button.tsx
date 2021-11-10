import { FC } from "react";
import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  size?: "large" | "small";
  style?: "clicked";
  disableElevation?: boolean;
  vertical?: boolean;
}

const Bookmarks:FC<Props> = ({ onClick, size, children, disableElevation, style, vertical }) => {

  return (
    <button 
      onClick={onClick} 
      className={`
        ${styles.button} 
        ${disableElevation && !style ? styles.disableEl : ""}
        ${style === "clicked" ? styles.clicked : ""} 
        ${size === "large" ? styles.large : ""}
        ${size === "small" ? styles.small : ""}
        ${vertical ? styles.vertical : ""}
      `}
    >
      {children}
    </button>
  )
}

export default Bookmarks;