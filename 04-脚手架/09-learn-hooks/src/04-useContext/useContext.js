import React, { useContext } from "react";

import { themContext, userContext } from "../App";

export default function ContextHook(props) {
  const [user, them] = [useContext(userContext), useContext(themContext)];

  console.log(user, them, props.value);

  return <div>ContextHook</div>;
}
