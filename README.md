This is a simple react/redux click counting App

This project is also bootstrapped with create-react-app

For Redux: npm install redux react-redux --save

```
Steps after create-react-app and installing redux and react-redux

(1) Create a new pure functional component called Counter.js


This function will take props
and return a div with something in it.
make sure to export it and import it in App

Here we are going to create a <p> and a <button>

(2) Pass Counter(the component) in App
Something should render on the page.

(3) The redux flow goes from Component to Action to Dispatch to Reducer (it runs in store)

(4) Now that we have our Counter, we are going to import react-redux
We are going to import the function {connect} from react-redux.

(5) Now we need a function that will map anything from the state
So we will create a function called mapStateIntoProps and will take (state)
It will return an object "count: state.count"

(6) We are going to use the connect function to wrap our component with one created
by react-redux. "export default connect(mapStateIntoProps)(Counter)"

(7) We find an error "Count not find "store" in either the context..."
In order to fix this we have to make a store

(8) Create a folder in src called Store and in it create an index.js
The reducers and the store all work together.

In here we will be strictly doing redux.
First, we should import { createStore } from redux.
Then we need to define the state of our application

(9) So we create a const initialState that is an object

(10) Then we create a reducer that takes in state and action.
The state is equal to initialState
return state;

(11) Now we are going to create the store
const store = createStore(reducer);
createStore is what we got from redux.

Finally, export default store;

(12) Now we have the store and we have exported it. We should import store into App

(13) in App.js where we have Counter tag, we will solve the error by adding in the value
store = {store}.
You should see your initialState count render on the page.

We have not created any sort of dispatch yet.

(14) Now we have to create our own action and dispatch it.
We now create a new function in our component

mapDispatchStateToProps(dispatch)
here we will return a new object just like we did for mapStateIntoProps
and it takes onIncrementClick () => {}

  Don't forget to add the mapDispatchStateToProps to the connect in the export.

(15) IN redux actions are objects. So we create an action in the dispatch function
and give it a property called {type: 'INCREMENT'}
Now let's dispatch it "dispatch(action)"

We have successfully dispatched an action to the reducer.
Now we have to close the circle.

(16) IN the reducer add switch case (action.type)
case 'INCREMENT':
 Here we will use Object.assign that takes the object we have in the state and
 make a copy of it.

 We are going to pass a third object that is going to be a new count with the
 value of state.count + 1.

 return Object.assign({}, state, {count: state.count + 1})

```
