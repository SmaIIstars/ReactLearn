import React, { Component } from "react";

// First, create the context object
const UserContext = React.createContext({
  nickname: "defaultName",
  level: 0,
});

class ProfileHeader extends Component {
  render() {
    // console.log("ProfileHeader", this);
    const { context } = this;
    return (
      <div>
        <h2>用户昵称: {context.nickname}</h2>
        <h2>用户等级: {context.level} </h2>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    // console.log("Profile", this);
    return (
      <div>
        <div>
          <ProfileHeader></ProfileHeader>
        </div>
      </div>
    );
  }
}

// Fourth, get the shared data
ProfileHeader.contextType = UserContext;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "Smallstars",
      level: 10,
    };
  }

  render() {
    return (
      <>
        {/* Third, sharing the data */}
        <UserContext.Provider value={this.state}>
          {/* Second, components that use shared data must be subcomponent */}
          <Profile />
        </UserContext.Provider>
        {/* use the default value */}
        <Profile />
      </>
    );
  }
}
