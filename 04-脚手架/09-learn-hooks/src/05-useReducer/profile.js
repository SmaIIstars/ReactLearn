import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";

export default function Hprofile() {
  const [state, dispatch] = useReducer(reducer, { counter: 10 });

  return (
    <div>
      <h2>profile当前计数: {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
