"use strict";


var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('input_txt');

class Inputext extends React.Component {

	constructor(){
		super();
		this.state = {
			txt: 'Default text'
		},
		this.update = this.update.bind(this);
	}

	update(e){
		this.setState({txt: e.target.value});
	}

	render(){
		return (
			<TextInput txt={this.state.txt} update={this.update} />
		);
	}
};


var TextInput = function(props){
		return (
			<div>
				<input type="text" onChange={props.update} />
				<h1>{props.txt}</h1>
			</div>
		);	
}





ReactDOM.render(<Inputext />, elm);




