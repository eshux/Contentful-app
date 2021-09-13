import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./App.css";
import useContentful from "./hooks/use-contentful";
import { getHomepageData } from "./queries/getHomepageData";
import Header from "./components/Header/Header";
import { HomepageType } from "./types/homepage/homepageType";
import BlogDetail from "./pages/BlogDetail";
import Loader from "react-loaders";

const App = () => {
	const [isPreview, setIsPreview] = useState(true) // preview API
	const { data, errors } = useContentful(getHomepageData, isPreview)

	const homepageData = data as HomepageType;

	if(errors) {
		console.log(errors.map(err => err.message).join(", "))
	}

	if (!data) {
		return (
      <div className="App">
			  <Loader active={!data} type="ball-scale-ripple" />
      </div>
		);
	}
	
	return (
		<Router>
			<Header 
				data={homepageData.headerCollection.items[0]} 
				preview={isPreview} 
				handlePreview={() => setIsPreview(!isPreview)}
			/>
			<Switch>
				<Route exact path="/">
					<Homepage data={homepageData}/>
				</Route>
				<Route path="/blog">
					<Blog preview={isPreview}/>
				</Route>
				<Route path="/blog-detail/:slug">
					<BlogDetail preview={isPreview}/>
				</Route>
				<Route path="/about">
					<About/>
				</Route>
			</Switch>
		</Router>	
	);
}

export default App;
