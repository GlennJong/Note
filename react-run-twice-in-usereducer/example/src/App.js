import { createContext, useReducer, useContext, StrictMode } from "react";

const ReducerContext = createContext(null);

function actions(state, action) {
  
  switch (action.type) {
    case "increase": {
      state += 1;
      console.log('run');
      debugger;
      return state;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function App() {
  const [ state, dispatch ] = useReducer(actions, 0);
  return (
    <div className="App">
      <ReducerContext.Provider value={{ state, dispatch }}>
        <Example />
      </ReducerContext.Provider>
    </div>
  );
}

export function App2() {
  const [ state, dispatch ] = useReducer(actions, 0);
  return (
    <div className="App">
      <ReducerContext.Provider value={{ state, dispatch }}>
        {/* 放在裡面 */}
        <StrictMode>
          <Example />
        </StrictMode>
      </ReducerContext.Provider>
    </div>
  );
}


const Example = () => {
  const { state, dispatch } = useContext(ReducerContext);
  return (
    <div>
      value: {state}<br />
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
    </div>
  );
};
