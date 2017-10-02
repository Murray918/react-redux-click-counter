import React from 'react';
import { connect } from 'react-redux';
//this is a specific react-redux function called connect



//pure functional component

function Counter (props) {
  console.log('renderrrrr', props);
  return (
    <div>
      <h1>We be countin' up in here</h1>
      <p> Count: {props.count}</p>
      <button onClick={props.onIncrementClick}> Click Counter </button>
    </div>
  )
}

//so we need a function that will map anything from the state into props
//let's create a function that will do this

function mapStateIntoProps (state) {
  console.log('mapStateIntoProps', state);
  return {
    count: state.count
  }
}

function mapDispatchStateToProps (dispatch) {
  return {
    onIncrementClick: () => {
      console.log('clickin');
      const action = {type: 'INCREMENT'};
      //we have defined an action and gave it a type
      //now let's dispatch it
      dispatch(action)
    }
  }

}

export default connect(mapStateIntoProps, mapDispatchStateToProps)(Counter);
//this is pretty much creating a new component -- by wrapping our component in it.
//this sould yield an error about Cannot find store. So we create a store
