import React, { createContext } from "react";

// First, create the context
const UserContext = createContext({
  nickname: "defaultName",
  level: 0,
});

const ThemeContext = createContext({
  red: "red",
});

const ProfileHeader = () => {
  return (
    // Fourth, user the Consumer and call the function pass in the value
    <UserContext.Consumer>
      {(userValue) => {
        return (
          // Fifth, mulit level nested calls, as the Fluter
          <ThemeContext.Consumer>
            {(themeValue) => {
              // console.log(themeValue);
              return (
                <>
                  <div style={{ color: themeValue.color }}>
                    nickname: {userValue.nickname}
                  </div>
                  <div>level: {userValue.level}</div>
                  <div>color: {themeValue.color}</div>
                </>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
    </div>
  );
};

const App = () => {
  const user = {
    nickname: "smallstars",
    level: 100,
  };

  return (
    // Second, sharing the data
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ color: "blue" }}>
        {/* Third, as a subcomponent */}
        <Profile />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
