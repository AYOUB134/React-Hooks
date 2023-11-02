import React, { useState, useCallback } from 'react';

function useCallb() {
  const [count, setCount] = useState(0);

  // Step 1: Define a callback function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Step 2: Define dependencies (empty array means no dependencies)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default useCallb;
