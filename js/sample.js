"use strict";


var React = require('react');
var ReactDOM = require('react-dom');

var elm = document.getElementById('app');

var App = React.createClass({

	getInitialState: function() {
	    return {
	    	txt: 'this is txt from constructor'
	    };
	},

	update: function(e){
		this.setState({txt: e.target.value});
	},

	render: function(){
		return (
			<div>
				<input type="text" onChange={this.update} />
				<h1>{this.state.txt}</h1>
			</div>
		);
	}
});


ReactDOM.render(<App />, elm);




