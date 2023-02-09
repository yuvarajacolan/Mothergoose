import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Bargraph extends Component {


// }
// module.exports = Bargraph;        




export default class Bargraph extends Component {
	render() {
		console.log('datasets',this.props.datasets)

		const options = {
			title: {
				text: this.props.title,
				fontStyle: "normal",
				fontSize: 20,
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: this.props.datasets
				
				// [
				// 	{ label: "Apple",  y: 10  },
				// 	{ label: "Orange", y: 15  },
				// 	{ label: "Banana", y: 25  },
				// 	{ label: "Mango",  y: 30  },
				// 	{ label: "Grape",  y: 28  }
				// ]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}