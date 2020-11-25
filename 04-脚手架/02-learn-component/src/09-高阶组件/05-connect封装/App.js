import React, { memo } from "react";
import Cpn1 from "./Cpn1";
import Cpn2 from "./Cpn2";

const App = memo(function App(props) {
  return (
    <div>
      <Cpn1 />
      <Cpn2 />
    </div>
  );
});

export default App;
