"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var connect = require('react-redux').connect;

import { bindActionCreators } from 'redux'

var appAction = require('./actions');
var appStore = require('./store');

var Additem = require('./addItem');
var Listitems = require('./List');



class Notodo extends React.Component{

	constructor(){
		super();
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this._onChange = this._onChange.bind(this);
		this.state = {
			list: appStore.getState()
		};
	}


	componentDidMount(){
		//appStore.addChangeListener(this._onChange);
		this.unsubscribe = appStore.subscribe(this._onChange);
	}
/*
	componentWillUnmount(){
		appStore.removeChangeListener(this._onChange);
	}
*/
	handleAddItem(newItem){
		console.log(appStore);		
		appStore.dispatch(appAction.addItem(newItem))
	}

	handleRemoveItem(index){
		appStore.dispatch(appAction.removeItem(index));
	}

	_onChange(){
		this.setState({
			list: appStore.getState()
		});
	}

	render(){

		console.log(this.state);

		return(

			<div>
				<h1>Notodo List</h1>
				<Additem add={this.handleAddItem} />
				<Listitems items={this.state.list} remove={this.handleRemoveItem} />
			</div>
		)

	}

}


const select = (state) => {
  return {
    list: state
  }
}



Notodo = connect(select)(Notodo);

module.exports = Notodo;

