import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    // console.log(this.props);
    const info = this.props.location.state.info;
    return (
      <div>
        Detail3:
        <div>姓名:{info.name}</div>
        <div>年龄:{info.age}</div>
        <div>身高:{info.height}</div>
      </div>
    );
  }
}
