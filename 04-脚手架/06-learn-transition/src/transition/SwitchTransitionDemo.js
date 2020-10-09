import React, { PureComponent } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./SwitchTransition.css";

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isOn: true,
    };
  }

  render() {
    const { isOn } = this.state;
    return (
      <div>
        {/* mode 默认out-in
          in-out 先进后出
          out-in 后进先出
        */}
        <SwitchTransition mode="out-in">
          {/* 这里的按钮不是消失，所以不是 in */}
          <CSSTransition
            key={isOn ? "on" : "off"}
            classNames="btn"
            timeout={1000}
          >
            <button
              onClick={(e) => {
                this.setState({
                  isOn: !isOn,
                });
              }}
            >
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
