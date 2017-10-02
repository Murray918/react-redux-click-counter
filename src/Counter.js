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
      <button> Click Counter </button>
    </div>
  )
}

export default Counter;
