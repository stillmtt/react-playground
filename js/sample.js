"use strict";


var React = require('react');
var ReactDOM = require('react-dom');


/**
 * component 
 */

var Hello = React.createClass({

	render: function(){
		return (
			React.createElement('div', null, 'hello stillaccia')
		);
	}

});

/**
 * render to document 
 */
ReactDOM.render(
	React.createElement(Hello), 
	document.getElementById('app')
);