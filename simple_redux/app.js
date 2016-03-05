"use strict";

//import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
import { increase, decrease } from './actions';  // You want to import the actions you will want to dispatch

var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;



class App extends React.Component {
  render() {
    const { counter, dispatch } = this.props;
    // counter from the connect(select) and dispatch by default from connect
    return (
      <div>
        <span>{counter}</span>
        <button onClick={ () => dispatch(increase())}>Increase</button>
        <button onClick={ () => dispatch(decrease())}>Decrease</button>
      </div>
      // The onClick triggers a function that returns the dispatch function which in turn calls another function, your action:
        /*
          const increase = () => {
            return {
              type: 'INCREASE'
            }
          }
        */


      // more so than not you will often pass arguments within these functions and return it gets passed to the actions

    );
  }

}

const select = (state) => {
  return {
    counter: state
  }
}



// The above function maps the state to props.  So the reducer returns the new state, but the idea is to not have components carry
// any state.  This means you take the new state provided by the reducer("provided" through "connect") and return it as props.
// notice the returned object counter?  That becomes similar to this.props.counter providing the new state as it's value.


App = connect(select)(App);

module.exports = App;
// This is one alternative to using the connect function from react-redux.   You may have seen the @connect decorator but they
// often choose this route as dectorators can still change in possible future