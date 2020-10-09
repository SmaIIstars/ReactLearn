import React, {
  Component
} from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello React",
    };
  }

  render() {
    return ( <
      div >
      <
      h2 > {
        this.state.message
      } < /h2> < /
      div >
    );
  }
}