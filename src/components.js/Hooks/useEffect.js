import React, { useState, useEffect } from 'react';

function UseEff() {
  // Step 1: Define a state variable using useState
  const [count, setCount] = useState(0);

  // Step 2: Use the useEffect hook to perform side effects
  useEffect(() => {
    // This code runs after every render

    // Step 3: Define the side effect you want to perform
    document.title = `Count: ${count}`;

    // Step 4: (Optional) Return a cleanup function if needed
    return () => {
      // This code runs before the component is removed from the DOM (cleanup)
    };
  }, [count]); // Step 5: Define dependencies (optional)

  // Step 6: Use the state variable in your component
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEff;
