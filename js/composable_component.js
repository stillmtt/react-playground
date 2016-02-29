"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('composable_component');

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			red: 0
		}
		this.update = this.update.bind(this);

	}

	update(){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
		});
	}

	render(){
		return (
			<div>
				<NumbInput ref="red" update={this.update}
				min={0}
				max={25}
				step={0.01}
				val={+this.state.red}
				//type="number",
				label="Red" />
			</div>
		)
	}

}

class NumbInput extends React.Component{
	render(){
		let label = this.props.label !== '' ?
		<label>{this.props.label} - {this.props.val}</label> : 
		'';
		return (
			<div>
				<input ref="inp" onChange={this.props.update} 
				type={this.props.type}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				defaultValue={this.props.val} />
				{label}
			</div>
		)
	}
}

NumbInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}

NumbInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
}


ReactDOM.render(<App/>, elm);








