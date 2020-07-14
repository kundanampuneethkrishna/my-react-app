import React from 'react'

export default class Welcome extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
			<h1>my name is {this.props.name} & my college is Sv university {this.props.college}</h1>
			{this.props.children}
			</div>
		)
	}
}