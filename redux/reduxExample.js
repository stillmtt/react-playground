"use strict";

var createStore = require('redux').createStore;
var combineReducers = require('redux').combineReducers;

var userReducer = function (state = {}, action) {

    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        default:
            return state;
    }
}


var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
})

var store_0 = createStore(reducer);

store_0.subscribe(function() {
    console.log('store_0 has been updated. Latest store state:', store_0.getState());
    // Update your views here
})


var addItemActionCreator = function (item) {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

store_0.dispatch(addItemActionCreator({ id: 1234, description: 'anything' }))

console.log("\n", '### It starts here')
console.log('store_0 state after initialization:', store_0.getState())
 