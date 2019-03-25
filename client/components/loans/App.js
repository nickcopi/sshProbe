import React, { Component } from 'react';
import ComputerView from './ComputerView';

export default class App extends Component {

	componentDidMount() {
		console.log('mounted');
	}

	render() {
		return (
			<div>
				<ComputerView/>
			</div>
		);
	}
}
