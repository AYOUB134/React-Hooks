import './App.css';
import UseState from './components.js/Hooks/Usestate.js'
import UseEff from  './components.js/Hooks/useEffect.js'
import UseContext from  './components.js/Hooks/useContext.js'
import UseLayoutEff from  './components.js/Hooks/useLayoutEffect.js'
import UseReducer from  './components.js/Hooks/useReducer.js'

import UseCallb from  './components.js/Hooks/useCallback.js'



function App() {
  return (
  <>
     
     <p>
      HELLOW WORLD
     </p>
      <UseEff/>
      <UseState/>
      <UseContext/>
      <UseLayoutEff/>
      <UseReducer/>
      <UseCallb/>

  </>
  );
}

export default App;
