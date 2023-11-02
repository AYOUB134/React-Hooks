import React, { useState, useDeferredValue } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Step 1: Create a deferred value using useDeferredValue
  const deferredCount = useDeferredValue(count, { timeoutMs: 3000 });

  // Step 2: Render the deferred value
  return (
    <div>
      <p>Count: {count}</p>
      <p>Deferred Count: {deferredCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
