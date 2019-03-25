import React, { Component } from 'react';

export default class ComputerView extends Component {
	state = { username: null, loans: null};

	updateLoans(){
		fetch('/api/getComputers')
			.then(res => res.json())
			.then(data =>{
				this.setState({ loans:data });
				console.log(data);
			})
			.catch((err)=>{
				console.log(err);
			});
	}
	componentDidMount() {
		console.log('mounted');
		this.updateLoans();
	}
	lockout(id,locked,e){
		let opts = {
			id,
			locked: !locked
		}
		let headers = {
			'Accept':'application/json',
			'Content-Type': 'application/json'
		}
		fetch('/api/lockout',{
			method:'post',
			body: JSON.stringify(opts),
			headers
		})
			.then(res => res.json())
			.then(data =>{
				this.updateLoans();
			})
			.catch((err)=>{
				console.log(err);
			});
	}
	loadLoans=(loans)=>{
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
		const loans = this.state.loans;
		return (
			<div>
				{loans?this.loadLoans(this.state.loans):<h1>Loading</h1>}
			</div>
		);
	}
}
