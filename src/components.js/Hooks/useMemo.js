import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Step 1: Define a memoized value using useMemo
  const doubledCount = useMemo(() => {
    console.log('Calculating doubled count...');
    return count * 2;
  }, [count]); // Step 2: Define dependencies (count)

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
