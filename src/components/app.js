import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Provider from 'preact-context-provider';
import NProgress from 'NProgress'

import { auth, db } from '../lib/FireBaseConfig';

import Header from './header';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Post from 'async!../routes/post';
import PostNew from 'async!../routes/post/new';
import Login from 'async!../routes/login';

// import '../assets/mini-nord.min.css'
// import '../assets/tachyons.min.css'
// import 'bulma/css/bulma.css'


// let globals = { currentUser: null };

export default class App extends Component {

	// Global variables like auth, theme etc.
	constructor() {
		super();
		this.state = { currentUser: auth.currentUser};
	};

    // before the component gets mounted to the DOM
    componentWillMount() { 
		auth.onAuthStateChanged( user => {
			if (user) {
			    // User is signed in.
				this.setState({currentUser:user})
				
			} else {
			    // User is signed out.
			    this.setState({currentUser:null})
			}
		});

    }

    // before the component gets mounted to the DOM
	componentWillMount(){}
    // after the component gets mounted to the DOM
	componentDidMount() {};
    // before new props get accepted
    componentWillReceiveProps() {}
    // before render(). Return false to skip render
    shouldComponentUpdate() {}
    // before render()
    componentWillUpdate(){}
    // after render()
    componentDidUpdate(){}
    // prior to removal from the DOM
    componentWillUnmount() {}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};


	render() {
		return (
			<Provider glob={this.state}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
						<Post path="/post/:id" />
						<Post path="/post/new" />
						<Login path="/login" />
					</Router>
				</div>
			</Provider>
		);
	}
}
