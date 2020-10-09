import React from "react";
import useUserContext from "./hooks/context-hook";

export default function CustomContextShareHook() {
  const [user, them, token] = useUserContext();
  console.log(user, them, token);

  return (
    <div>
      <h2>CustomContextShareHook </h2>
    </div>
  );
}
