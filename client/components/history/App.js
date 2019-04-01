import React, { Component } from 'react';
import {Pie as PieChart} from 'react-chartjs-2';

export default class App extends Component {

	componentDidMount() {
		console.log('mounted');
	}

	render() {
    		let data= {
    		    labels: ['Laptops stolen','Laptops eaten by students','Laptops returned','Laptops destroyed'],
    		    datasets: [{
    		        data:[5,3,13,4],
    		        backgroundColor:['red','blue','green','yellow'],
    		        borderColor:['red','blue','green','yellow'],
    		        borderWidth: 1
    		    }]
    		}
    		let options ={
    		    responsive:false,
		    legend: {
			    labels:{
			    	fontColor:'#555577'
			    }
		    },
		    title:{
			    display:true,
			    fontColor:'#555577',
			    text:'Test Chart'
		    }
		}
		return (
			<div><center>
				<PieChart width={500} height = {500} data = {data} options = {options}/>
			</center></div>
		);
	}
}
