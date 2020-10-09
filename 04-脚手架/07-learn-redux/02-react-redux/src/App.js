import React, { PureComponent } from "react";

import Home from "./pages/home2";
import About from "./pages/about2";
import Network from "./pages/network";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
        <hr />
        <Network />
      </div>
    );
  }
}
