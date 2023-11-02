import React, { useRef, useEffect } from 'react';

function MyComponent() {
  // Step 1: Define a ref using useRef
  const inputRef = useRef(null);

  useEffect(() => {
    // Step 3: Focus the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {/* Step 2: Attach the ref to an element */}
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default MyComponent;
