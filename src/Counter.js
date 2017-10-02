import React from 'react';

//pure functional component

function Counter (props) {
  console.log('renderrrrr', props);
  return (
    <div>
      <h1>We be countin' up in here</h1>
    </div>
  )
}

export default Counter;
