import React, { Component } from 'react';
const fs = require('fs');
const app = require('electron').remote.app;

export default class HostList extends Component {
	state = { username: null, hosts: null};

	componentDidMount() {
		console.log('mounted');
		this.getHosts();
	}
	getHosts = ()=>{
		let path = app.getPath('userData') + 'hosts.json';
		fs.readFile(path,(err,data)=>{
			if(err) this.setState({hosts:[]});
			else {
				this.setState({hosts:JSON.stringify(data)});
				fs.writeFileSync(path,[]);
			}

		});
		
	}
	loadHosts=(loans)=>{
		let elements = [];
		loans.forEach(loan=>{
			let style = {
				color: loan.color
			}
			elements.push((
				<div className = 'loan'>
					<h1 style={style}>{loan.name}</h1>
					<h3>Loaned to {loan.eid} on {loan.time}</h3>
					<h3 onClick = {this.lockout.bind(this,loan.id,loan.locked)} className='lockout'>
						{loan.locked?'Unlock':'Lockout'}
					</h3>
				</div>
			));
		});
		return elements;
	}

	render() {
		const hosts = this.state.hosts;
		console.log(hosts);
		return (
			<div>
				<h1>Registered Hosts</h1>
				{hosts?this.loadHosts(this.state.hosts):<h1>Loading</h1>}
				<span className = 'paddedSpan' >Add new host</span>
				<span className = "add">+</span>
			</div>
		);
	}
}
