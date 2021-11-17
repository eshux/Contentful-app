import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Header from "./components/Header/Header";
import TopButton from "./components/TopButton/TopButton";
import Footer from './components/Footer/Footer';

const App = () => {
	
	return (
		<Router>
			{/* <Header /> */}
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/article/:slug">
					<Article />
				</Route>
				<Route>
					<p>404 page not found</p>
				</Route>
			</Switch>
			<TopButton />
			<Footer />
		</Router>	
	);
}

export default App;
