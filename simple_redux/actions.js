import { INCREASE, DECREASE } from './constants';
// Not necessary all the time to have constants if the app is small as it is often noted in a lot of flux offerings
// This allows for consistency in case you messed up somewhere it is better to find out where in larger apps

export const increase = () => {
  return {
    type: INCREASE
  }
}
// The type isn't necessarily a requirement but I wouldn't recommend actions without it
// In reducer parameters you receive something along the lines of
/*
  const reducer = (state = 0, action) { // It'll kind of look something like this reducer = (state = 0, increase() )
                                        // where the action is a callback 
    switch(action.type) {  // And this is where action.type = INCREASE which is set to the value of 'INCREASE' if you used constants
      case INCREASE: {
        return state + 1;
      }
    }
  }
*/

//


export const decrease = () => {
  return {
    type: DECREASE
  }
}