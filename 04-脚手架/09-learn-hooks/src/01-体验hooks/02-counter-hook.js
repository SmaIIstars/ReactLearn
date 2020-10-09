import React, { useState } from "react";

export default function CounterHook() {
  /**
   * hook: userState
   * 1.本身是一个函数
   * 2.参数和返回值
   *  > 参数：给默认值
   *  > 返回值：
   *    1.当前 state
   *    2.更新函数
   * 3.限制
   *  > 在函数最外层
   *  > 只在 React 的函数组件中使用
   */

  // const [state, setState] = useState(0);
  // 可以传一个函数初始化值
  const [counter, setCounter] = useState(() => 10);

  // 也可以传入一个回调函数,和setState一样
  function addNum1() {
    // 会合并
    setCounter(counter + 10);
    setCounter(counter + 10);
    setCounter(counter + 10);
    setCounter(counter + 10);
  }

  function addNum2() {
    // 可以传入回调函数进行累加，避免合并
    setCounter((preValue) => preValue + 10);
    setCounter((preValue) => preValue + 10);
    setCounter((preValue) => preValue + 10);
    setCounter((preValue) => preValue + 10);
  }

  return (
    <div>
      <h2>当前计数: {counter}</h2>

      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={addNum1}>+10</button>
      <button onClick={addNum2}>+10</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
