"use strict";

var appConstants = require('../constants/constants');

const without = (arr, ...values) =>
  arr.filter(el => !values.some(exclude => el === exclude));



module.exports = (state=[], action) => {

	console.log('redux current state is ', state, 'and action is ', action);
	switch(action.type){

		case appConstants.ADD_ITEM:
			console.log(state);
			/*return {
				...state,
				list: 'add item'
			}*/
			return [action.item].concat(state)
		break;

		case appConstants.REMOVE_ITEM:
			/*return {
				...state,
				text: 'remove item'
			}*/
			return without(state, state[action.index]);
		break;

		default: 
			return state;
	}
};
