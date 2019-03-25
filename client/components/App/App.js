import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Loans from '../loans/App';
import Settings from '../settings/App';
import Stats from '../stats/App';
import Home from '../home/App';
//import '../app.css';
import MenuBar from '../common/MenuBar';

export default class App extends Component {

	componentDidMount() {
		console.log('mounted');
	}

	render() {
		return (
			<div>
				<link rel = 'stylesheet' type = 'text/css' href = 'app.css'/>
				<HashRouter basename = '/'>
					<div>
						<MenuBar/>
						<Route exact path = '/' component = {Home}/>
						<Route path = '/loans' component = {Loans}/>
						<Route path = '/settings' component = {Settings}/>
						<Route path = '/stats' component = {Stats}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}
