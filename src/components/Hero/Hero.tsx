import { FC } from "react";
import styles from "./Hero.module.scss";
import hilltop from "../../assets/hilltop.png";
import Button from "../Button/Button";

type Props = {
  onClick: () => void;
}

const Hero: FC<Props> = ({onClick}) => {

	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1 className={styles.title}>Take a chance</h1>
				<h2 className={styles.subtitle}>
					Read all about the adventures and life lessons we have encountered in the last couple of years
				</h2>
				<div className="mb-80" />
				<Button size="large" onClick={onClick}>
					Scroll Down
				</Button>
			</div>
			<img src={hilltop} alt="hill" className={styles.img} />
		</section>
	);
};

export default Hero;
