import React, { FC } from "react";
import Hero from "../components/Hero/Hero";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import { HomepageType } from "../types/homepage/homepageType";

type Props = {
  data: HomepageType;
}

const Homepage:FC<Props> = ({ data }) => {

	return (
		<>
			<Hero person={data.personCollection.items[0]} />
			<h4 className="text-center">Favorite bookmarks</h4>
			{data.favoriteTag.items[0].linkedFrom
				? <Bookmarks data={data.favoriteTag.items[0].linkedFrom?.bookmarkCollection.items}/>
				: <h6 className="text-center">No favorite bookmarks</h6>
			}
			<h4 className="text-center">All bookmarks</h4>
			<Bookmarks data={data.bookmarkCollection.items} />
		</>
	);
}

export default Homepage;
