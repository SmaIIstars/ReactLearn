import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./TransitionGroup.css";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      names: ["coderwhy", "Small", "Stars"],
    };
  }

  render() {
    return (
      <TransitionGroup>
        {this.state.names.map((item, index) => {
          return (
            <CSSTransition key={item} timeout={500} classNames="item">
              <div>
                {item}
                <button
                  onClick={(e) => {
                    this.removeName(index);
                  }}
                >
                  -name
                </button>
              </div>
            </CSSTransition>
          );
        })}

        <button
          onClick={(e) => {
            this.addName();
          }}
        >
          +name
        </button>
      </TransitionGroup>
    );
  }

  addName() {
    this.setState({
      names: [...this.state.names, "Smallstars"],
    });
  }

  // splice 返回的是改变的东西，而不是原本的东西
  removeName(index) {
    this.setState({
      names: [...this.state.names.filter((item, indey) => index !== indey)],
    });
  }
}
