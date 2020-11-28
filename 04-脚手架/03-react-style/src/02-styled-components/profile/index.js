import React, { PureComponent } from "react";

import { SSInput } from "./style";

/**
 * 1.Attribute Penetration
 * 2.Dynamic Props
 */
class index extends PureComponent {
  constructor() {
    super();
    this.state = {
      textColor: "blue",
    };
  }

  render() {
    return (
      <div>
        <hr />
        <div>Profile</div>
        <input type="password" />
        <SSInput type="password" textColor={this.state.textColor} />
      </div>
    );
  }
}

export default index;
