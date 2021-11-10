import { useState } from "react";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Header from "./components/Header/Header";
import TopButton from "./components/TopButton/TopButton";

const App = () => {
	const [isPreview, setIsPreview] = useState(true) // preview API
	
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/article/:slug">
					<Article preview={isPreview}/>
				</Route>
			</Switch>
			<TopButton />
		</Router>	
	);
}

export default App;
