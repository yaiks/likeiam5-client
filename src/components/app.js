import { h, Component } from "preact";
import { Router, route } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";

import Header from "./Header";
import { AuthProvider, useAuth } from "context/auth";

// Code-splitting is automated for routes
import Root from "routes/root";
import Explore from "routes/explore";
import Editor from "routes/editor";
import Login from "routes/login";
import Signup from "routes/signup";
import Profile from "routes/profile";
import Post from "routes/post";
import About from "routes/about";

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = (e) => {
		const { user } = useAuth();
		switch (e.url) {
			case "/editor":
				if (!user) route("/login", true);
				break;
		}
		this.currentUrl = e.url;
	};

	render(props) {
		return (
			<div id='app'>
				<Provider value={props}>
					<AuthProvider>
						<Header />
						<Router onChange={this.handleRoute}>
							<Root path='/' />
							<Explore path='/explore' />
							<Editor path='/editor/' type='content' />
							<Editor path='/editor/:type' />
							<Editor path='/editor/add-info' />
							<Editor path='/editor/review' />
							<Editor path='/editor/published' />
							<Login path='/login' />
							<Signup path='/signup' />
							<Post path='/post/:postId' />
							<Profile path='/profile' />
							<About path='/about' />
						</Router>
					</AuthProvider>
				</Provider>
			</div>
		);
	}
}
