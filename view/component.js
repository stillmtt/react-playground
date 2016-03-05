"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var appAction = require('../action/action');
var appStore = require('../store/store');
var Additem = require('./addItem');
var Listitems = require('./List');

var elm = document.getElementById('todo');

class Todo extends React.Component{

	constructor(){
		super();
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this._onChange = this._onChange.bind(this);
		this.state = {
			list: appStore.getList()
		};
	}

	componentDidMount(){
		appStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		appStore.removeChangeListener(this._onChange);
	}

	handleAddItem(newItem){
		appAction.addItem(newItem);
	}

	handleRemoveItem(index){
		appAction.removeItem(index);
	}

	_onChange(){
		this.setState({
			list: appStore.getList()
		});
	}

	render(){

		console.log(this.state.list);

		return(
			<div>
				<h1>Todo List</h1>
				 <Additem add={this.handleAddItem}/>
				 <Listitems items={this.state.list} remove={this.handleRemoveItem} />
			</div>
		)

	}

}


ReactDOM.render(<Todo />, elm);


