import React, { useState } from "react";
import Header from "./components/Header/Header";
import useContentful from "./hooks/use-contentful";
import Hero from "./components/Hero/Hero";
import { homepageQuery } from "./queries/homepageQuery";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";


function App() {
	const [isPreview, setIsPreview] = useState(true) // use preview API - try changing to false to see how the content is changing (write something )
	const { data, errors } = useContentful(homepageQuery, isPreview)

	if(errors) {
		console.log(errors.map(err => err.message).join(", "))
	}

	if (!data) {
		return (
			<div className="App">
				<h6>Loading...</h6>
			</div>
		);
	}

	console.log(data)

	return (
		<>
			<Header 
				data={data.headerCollection.items[0]} 
				preview={isPreview} 
				handlePreview={() => setIsPreview(!isPreview)}
			/>
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

export default App;
