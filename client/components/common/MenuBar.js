import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class MenuBar extends Component {

	componentDidMount() {
		console.log('mounted');
	}
	render() {
		return (
			<div className='menuBar'>
				<MenuItem url = '/' text = "Home"></MenuItem>
				<MenuItem url = '/hosts' text = "Hosts"></MenuItem>
				<MenuItem url = '/tests' text = "Tests"></MenuItem>
				<MenuItem url = '/history' text = "History"></MenuItem>
			</div>
		);
	}
}
