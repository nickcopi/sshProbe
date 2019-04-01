import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Hosts from '../hosts/App';
import Tests from '../tests/App';
import History from '../history/App';
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
				<HashRouter basename = '/'>
					<div>
						<MenuBar/>
						<Route exact path = '/' component = {Home}/>
						<Route path = '/hosts' component = {Hosts}/>
						<Route path = '/tests' component = {Tests}/>
						<Route path = '/history' component = {History}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}
