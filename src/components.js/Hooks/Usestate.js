import React, { useState } from 'react';

function UseState() {
  // Step 1: Define a state variable and its setter function using useState
  const [count , setCount] = useState(0);

  // Step 2: Use the state variable in your component
  return (
    <div>
      <p>Count: {count}</p>

      {/* Step 3: Define an event handler to update the state */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
    </div>
  );
}

export default UseState;

