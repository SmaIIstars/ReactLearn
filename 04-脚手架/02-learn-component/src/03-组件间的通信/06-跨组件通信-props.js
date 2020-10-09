import React, { Component } from "react";

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <div>
        {/* 函数中没有 this 直接用 props */}
        {/* <ProfileHeader
          nickname={props.nickname}
          level={props.level}
        ></ProfileHeader> */}
        <ProfileHeader {...props}></ProfileHeader>
      </div>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super();

    this.props = props;

    this.state = {
      nickname: "Smallstars",
      level: 10,
    };
  }

  render() {
    // const { nickname, level } = this.state;

    return (
      <div>
        {/* <Profile nickname={nickname} level={level}></Profile> */}
        <Profile {...this.state}></Profile>
      </div>
    );
  }
}
