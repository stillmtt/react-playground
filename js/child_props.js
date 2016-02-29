"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('childprops');


class Btn extends React.Component {
	render(){
		return <Mybutton> Click me and <You />  </Mybutton>
	}
}

class Mybutton extends React.Component {
	render(){
		return <button>{this.props.children}</button>
	}
}



const You = () => <span>you</span>
//or
/*
const You = React.createClass({
	render: function(){
		return <span>you</span>;
	}
});
*/


ReactDOM.render(<Btn />, elm);