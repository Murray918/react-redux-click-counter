import { createStore } from 'redux';


// now we define the state of our app -- which for us its just a count variable.

const initialState = {
  count: 1
};

//now we create a reducer
//we make state = initialState because after the first time the reducer is called the initial state is copied into here
const reducer = (state = initialState, action) => {
  console.log('reducer is running', action);

//it's common to use switch statements to handle such actions
  switch (action.type) {
    case 'INCREMENT':

      return Object.assign({}, state, {count: state.count + 1})

  default:
  return state;
}
}

const store = createStore(reducer);

export default store;
