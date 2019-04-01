import React, { Component } from 'react';

export default class HostEdit extends Component {
	state = { username: null, hosts: null};

	componentDidMount() {
		console.log('mounted');
		this.getHosts();
	}

	render() {
		return (
			<div className = 'hostEdit'>
				<input placholder = 'name'>
			</div>
		);
	}
}
