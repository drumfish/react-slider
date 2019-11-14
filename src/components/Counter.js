import React, {useReducer, useEffect} from 'react';
import reducer from "../reducers/reducer";

const initialState = {count: 0};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = state.count;
  });
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({type: 'reset', payload: initialState})}>reset</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}