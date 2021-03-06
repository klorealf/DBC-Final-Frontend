import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import Signup from '../routes/signup';
import Login from '../routes/login';
import NewUser from '../routes/newuser';
import AddMember from '../routes/member';
import AddChore from '../routes/chore';
import AddHousehold from '../routes/household/new';
import DashboardPage from '../routes/dashboard';
import Household from '../routes/household';
import Logout from '../routes/logout';
import Details from './tabs/details.js'
import Members from './tabs/members.js'
import Chores from './tabs/chores.js'


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Logout path="/logout/" />
					<Login path="/login/" />
					<Signup path="/signup/" />
					<NewUser path="/newuser/" />
					<AddMember path="/addmember/" />
					<AddChore path="/addchore/:household_id" />
					<AddHousehold path="/household/new" />
					<DashboardPage path="/dashboard/" test="test" />
					<Household path="/household/:household_id/"/>
					<Details path="/household/:household_id/details/" />
					<Members path="/household/members" />
					<Chores path="/household/chores" />
				</Router>
			</div>
		);
	}
}

// class ExampleOne extends Component {
// 	render() {
// 			return (
// 				<div>
// 					<Household household="DBC House" />
// 					<div>Tab content 1</div>
// 				</div>
// 			)
// 	}
// }


// function ExampleTwo(props) {
// 	return (
// 		<div>
// 			<Household household="DBC House" />
// 			<div>Tab content 2</div>
// 		</div>
// 	)
// }
