import React, { useState, useEffect } from "react";

export default function MulitEffectHook() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  // 根据顺序执行
  // 添加依赖列表，只有列表中的值变化才会执行
  useEffect(() => {
    console.log("更改标题", counter);
  }, [counter]);

  useEffect(() => {
    console.log("订阅事件");
  }, []);

  useEffect(() => {
    console.log("网络请求");
  }, []);

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 10)}>+10</button>
      <h2>{isLogin ? "SmallStars" : "未登录"}</h2>
      <button onClick={(e) => setIsLogin(!isLogin)}>切换</button>
    </div>
  );
}
