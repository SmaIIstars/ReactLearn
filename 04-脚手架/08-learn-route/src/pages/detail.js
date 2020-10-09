import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    console.log(this.props.match);
    const id = this.props.match.params.id;

    return <div>Detail: {id}</div>;
  }
}
