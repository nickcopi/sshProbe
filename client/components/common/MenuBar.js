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
				<MenuItem url = '/loans' text = "View Loans"></MenuItem>
				<MenuItem url = '/stats' text = "Statistics"></MenuItem>
				<MenuItem url = '/settings' text = "Settings"></MenuItem>
				<MenuItem url = '/logout' text = "Logout"></MenuItem>
			</div>
		);
	}
}
