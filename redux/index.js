"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
//var Provider = require('react-redux').Provider;
//var connect = require('react-redux').connect;
import {Provider, connect} from 'react-redux';



var Notodo = require('./comp');



import store from './store';
//var store = require('./store');

//import initStore from './store';
//var store = initStore([]);

//var createStore = require('redux').createStore;
//import reducer from './reducers';
//var store = createStore(reducer);

var elm = document.getElementById('notodo');


ReactDOM.render(
  <Provider store={store}>
    <Notodo />
  </Provider>,
  elm
)