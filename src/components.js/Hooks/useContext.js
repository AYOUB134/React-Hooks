import React, { useContext } from 'react';

// Step 1: Create a context
const ThemeContext = React.createContext('light');

function useContext() {
  // Step 2: Use useContext to access the context value
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme }}>Themed Button</button>;
}

export default useContext;
