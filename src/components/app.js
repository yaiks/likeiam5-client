import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./Header";
import { AuthProvider } from "../context/auth";

// Code-splitting is automated for routes
import Root from "routes/root";
import Home from "routes/home";
import Editor from "routes/editor";
import Login from "routes/login";
import Profile from "routes/profile";

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = (e) => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id='app'>
				<AuthProvider>
					<Header />
					<Router onChange={this.handleRoute}>
						<Root path='/' />
						<Home path='/home' />
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
