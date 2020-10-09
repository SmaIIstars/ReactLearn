import React, { useState, useEffect } from "react";

export default function HookTitileChange() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  });

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 10)}>+10</button>
    </div>
  );
}
