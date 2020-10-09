import React, { PureComponent } from "react";

export default class Detail2 extends PureComponent {
  render() {
    // console.log(this.props.lacation);
    return <div>Detail2: {this.props.location.search}</div>;
  }
}
