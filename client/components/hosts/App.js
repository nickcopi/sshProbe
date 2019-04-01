import React, { Component } from 'react';
import HostList from './HostList';

export default class App extends Component {

	componentDidMount() {
		console.log('mounted');
	}

	render() {
		return (
			<div>
				<HostList/>
			</div>
		);
	}
}
