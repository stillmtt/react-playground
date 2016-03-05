"use strict";

//var createStore = require('redux').createStore;
import {createStore} from 'redux';
//var reducer = require('./reducers');
import reducer from './reducers';


module.exports =  ((initialState) => {
  return  createStore(reducer, initialState);
}).call({items: []});