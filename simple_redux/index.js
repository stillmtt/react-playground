"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
//var Provider = require('react-redux').Provider;
//var connect = require('react-redux').connect;
import {Provider, connect} from 'react-redux';

var createStore = require('redux').createStore;

var App = require('./app');
var reducer = require('./reducers');


var elm = document.getElementById('notodo');




let store = createStore(reducer);
// The store is created with createStore and it only takes in one reducer so you will have to use combine reducer
// if your reducer has more than one reducer.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, elm
);
// Provider "provides" the store to the component you want be enclosing them in the { Provider } component from react-redux
// This means that the App component, a top level component, doesn't actually carry any state since it just takes
// the state from the store that was returned by the reducer and then converted through connect's map to state connect(select) from App.jsx

// If you look at App.jsx, this.props.dispatch would be similar to store.dispatch if they were on the same file