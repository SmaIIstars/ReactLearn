import React from "react";
import scrollPosition from "./hooks/scroll-position-hook";

export default function CustomScrollPositionHook() {
  const position = scrollPosition();
  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", left: "0px", top: "0px" }}>
        CustomScrollPositionHook: {position}
      </h2>
    </div>
  );
}
