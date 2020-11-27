import React, { PureComponent } from "react";

import { EventEmitter } from "events";

// Event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  // addListener
  componentDidMount() {
    eventBus.addListener("btnClick", this.handleBtnClickListener);
  }

  // removeListener
  componentWillUnmount() {
    // remove all event listener about btnClick
    // eventBus.removeListener("btnClick")

    // Only one needs to be cancelled separately
    // and there use the ... operator
    eventBus.removeListener("btnClick", this.handleBtnClickListener);
  }

  handleBtnClickListener = (message, num) => {
    console.log(message, num);
  };

  render() {
    return <div>Home</div>;
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button
          onClick={(e) => {
            this.btnClick();
          }}
        >
          Click
        </button>
      </div>
    );
  }

  btnClick() {
    // emit the event
    eventBus.emit("btnClick", "HelloWorld", 123);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    );
  }
}
