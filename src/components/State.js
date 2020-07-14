import React, { Component } from 'react'

export default class State extends React.Component {
	constructor(){
			super();
			this.state={
				name:"puneeth"
			}
		}
				clickMe=()=>{
					this.setState(
						{
							name:"Puneeth Krishna"
						}
					)
				}
	render() {

		return (
			<div>
			<h1>we are using states</h1>
			<h2>this.state.name</h2>
			<button onclick={()=>{

			}}>Click Me.....!</button>	
			</div>
		)
	}
}