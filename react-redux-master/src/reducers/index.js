//reducers
import { combineReducers } from 'redux'

const counter = (state=0, action) => {
  if (action.type === 'INCREMENT') {
    // increase value of counter by value passed to increment()
    return state + action.inc;
  }
  return state;
}

const myReducers = combineReducers({counter});

export default myReducers;