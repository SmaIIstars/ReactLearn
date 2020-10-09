import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";

export default function Home() {
  // const [counter, setCounter] = useState(0);

  /**
   * useReducer参数
   * 1.renducer函数
   * 2.初始值
   */
  const [state, dispatch] = useReducer(reducer, { counter: 10 });

  return (
    <div>
      <h2>Home当前计数: {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
