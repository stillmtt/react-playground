"use strict";

var AppDispatcher = require('../dispatcher/dispatcher');
var appConstants = require('../constants/constants');

module.exports = {

	addItem: function(item){
		AppDispatcher.handleAction({
			actionType: appConstants.ADD_ITEM,
			data: item
		});
	},

	removeItem: function(index){
		AppDispatcher.handleAction({
			actionType: appConstants.REMOVE_ITEM,
			data: index
		});
	}

};
