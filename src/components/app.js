import { h, Component } from "preact";
import { Router, route } from "preact-router";

import Header from "./Header";
import { AuthProvider, useAuth } from "context/auth";

// Code-splitting is automated for routes
import Root from "routes/root";
import Explore from "routes/explore";
import Editor from "routes/editor";
import Login from "routes/login";
import Profile from "routes/profile";

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

	render() {
		return (
			<div id='app'>
				<AuthProvider>
					<Header />
					<Router onChange={this.handleRoute}>
						<Root path='/' />
						<Explore path='/explore' />
						<Editor path='/editor' />
						<Login path='/login' />
						<Profile path='/profile/' user='me' />
						<Profile path='/profile/:user' />
					</Router>
				</AuthProvider>
			</div>
		);
	}
}
