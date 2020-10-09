import React, { useState } from "react";

export default function MulitHookState() {
  const [counter, setCounter] = useState(10);
  const [age, setAge] = useState(18);
  const [name, setName] = useState("Smallstars");

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <h2>姓名: {name}</h2>
      <h2>年龄: {age}</h2>
    </div>
  );
}
