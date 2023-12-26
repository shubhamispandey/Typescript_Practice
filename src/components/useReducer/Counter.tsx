import React, { useReducer } from "react";

type State = number;
type Action = { type: "increment" | "decrement" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
const InitialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      <hr />
      <div>counter: {state}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default Counter;
