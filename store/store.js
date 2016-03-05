"use strict";

var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/dispatcher');
var appConstants = require('../constants/constants');
//var objectAssign = require()

var CHANGE_EVENT = 'change';

var _store = {
	list: []
};

var addItem = function(item){
	_store.list.push(item);
};
var removeItem = function(index){
	_store.list.splice(index, 1);
};


var appStore = Object.assign({}, EventEmitter.prototype,{

	addChangeListener: function(cb){
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	
	getList: function(){
		return _store.list;
	}
});


AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.ADD_ITEM:
			addItem(action.data);
			appStore.emit(CHANGE_EVENT);
		break;
		case appConstants.REMOVE_ITEM:
			removeItem(action.data);
			appStore.emit(CHANGE_EVENT);
		break;
		default: 
			return true;
	}
});

module.exports = appStore;
