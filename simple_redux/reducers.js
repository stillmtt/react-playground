"use strict";

//import { increase, decrease } from './actions';

// You probably don't name your reducers, reducer but in this example it made it visually easier to map in my head.
module.exports = (state = 0, action) => {
  console.log('current state is ', state, 'and action is ', action);

  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
      // If you don't return the new state then nothing gets sent.
  }
}