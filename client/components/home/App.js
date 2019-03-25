import React, { Component } from 'react';

export default class App extends Component {

	componentDidMount() {
		console.log('mounted');
	}

	render() {
		return (
			<div>
				<h1>Welcome</h1>
			</div>
		);
	}
}
