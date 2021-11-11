import { FC, useContext } from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import { LanguageContext } from "../../context/LanguageContext";
import { GetHero } from "../../types/GetHero";
import { GET_HERO } from "../../queries/GetHero";
import Loader from "react-loaders";
import { useQuery } from "@apollo/client";

type Props = {
  onClick: () => void;
}

const Hero: FC<Props> = ({ onClick }) => {
	const { buttonList, siteLanguage } = useContext(LanguageContext);
	const { loading, error, data } = useQuery<GetHero>(GET_HERO, {
		variables: {
			locale: siteLanguage
		}
	});

	const hero = data?.heroCollection.items[0];

	if (loading) {
		return (
			<section className={styles.hero}>
				<Loader active={loading} type="ball-pulse" />
			</section>
		)
	}

	if (error) {
		return (
			<section className={styles.hero}>
				<p>Error :(</p>
			</section>
		)
	}

	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					{hero && hero.title}
				</h1>
				<h2 className={styles.subtitle}>
					{hero && hero.description}
				</h2>
				<div className="mb-80" />
				<Button size="large" onClick={onClick}>
					{buttonList.scrollDown}
				</Button>
			</div>
			<div className={styles.imgContainer}>
				<img 
					src={hero && hero.image.url}
					alt={hero && hero.image.description}
					className={styles.img}
				/>
			</div>
		</section>
	);
};

export default Hero;