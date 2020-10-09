import React, { useState, useEffect } from "react";

export default function HookCancelSubscrible() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // 更新 DOM 树后会调用
    console.log("订阅事件");

    // 更新 DOM 树前会先调用
    return () => {
      console.log("取消订阅");
    };

    // 最后一个空数组可以阻止更新调用return, 只在销毁时候调用
  }, []);
  return (
    // 更新 DOM 树
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 10)}>+10</button>
    </div>
  );
}
