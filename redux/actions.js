"use strict";


var appConstants = require('../constants/constants');


module.exports = {

	addItem: function(item){
		return {
			type: appConstants.ADD_ITEM,
			item
		};
	},

	removeItem: function(index){
		return {
			type: appConstants.REMOVE_ITEM,
			index
		};
	}

};



