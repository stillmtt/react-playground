"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('mixin');

let Mixin = InnerComponent => class extends React.Component{

	constructor(){
		super();
		this.update = this.update.bind(this);
		this.state = {
			val: 0
		};
	}

	update(){
		this.setState({val: this.state.val+1});
	}

	componentWillMount(){
		console.log('will mount');
	}

	render(){
		return <InnerComponent update={this.update} 
			{...this.state}
			{...this.props} />
	}

	componentDidMount(){
		console.log('did mount');
	}

};


const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>


const Label = (props) => <p onMouseMove={props.update}>{props.txt} - {props.val}</p>

let ButtonMixed = Mixin(Button);

let LabelMixed = Mixin(Label);


class App extends React.Component {
	render(){
		return(
			<div>
				<ButtonMixed txt="Button" />
				<LabelMixed txt="Label" />
			</div>
		)
	}
};


ReactDOM.render(<App/>, elm);

