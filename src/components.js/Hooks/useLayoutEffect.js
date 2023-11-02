import React, { useState, useLayoutEffect } from 'react';

function useLayoutEff() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <p>Window Width: {width}px</p>
    </div>
  );
}

export default useLayoutEff;
