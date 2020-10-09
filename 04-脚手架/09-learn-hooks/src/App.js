import React, { useState, createContext } from "react";

// import CounterClass from "./01-体验hooks/01-counter-class";
// import CounterHook from "./01-体验hooks/02-counter-hook";
// import MulitHookState from "./02-useState/01-多状态";
// import ComplexHookState from "./02-useState/02-修改复杂状态";
// import ClassTitlteChange from "./03-useEffect/01-class标题修改";
// import HookTitileChange from "./03-useEffect/02-hook标题修改";
// import HookCancelSubscrible from "./03-useEffect/03-模拟生命周期函数";
// import MulitHookState from "./03-useEffect/04-多effect使用";

// import ContextHook from "./04-useContext/useContext";
// export const themContext = createContext();
// export const userContext = createContext();

// import Home from "./05-useReducer/home";
// import Profile from "./05-useReducer/profile";

// import CustomLifeHook from "./06-自定义hook/01-自定义hook使用";
// import CustomContextShareHook from "./06-自定义hook/02-Context共享Hook";
// export const tokenContext = createContext();
// export const themContext = createContext();
// export const userContext = createContext();

import CustomScrollPositionHook from "./06-自定义hook/03-获取滚动位置";

function App() {
  const [isShow, isShowState] = useState(true);

  return (
    <div>
      {/* 1. Hook基本使用*/}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}

      {/* 2. 多数据修改*/}
      {/* <MulitHookState /> */}
      {/* <ComplexHookState /> */}

      {/* 3. useEffect*/}
      {/* <ClassTitlteChange /> */}
      {/* <HookTitileChange /> */}
      {/* {isShow ? <HookCancelSubscrible /> : ""} */}
      {/* {isShow ? <MulitHookState /> : ""} */}

      {/* 4.useContext */}
      {/* <themContext.Provider value={{ color: "red" }}>
        <userContext.Provider value={{ name: "Smallstars", age: 18 }}>
          <ContextHook value={{ tag: "1.0.0" }} />
        </userContext.Provider>
      </themContext.Provider> */}

      {/* 5. usereducer*/}
      {/* 
      <Home />
      <Profile /> 
      */}

      {/* 6.自定义hook */}
      {/* {isShow ? <CustomLifeHook /> : ""} */}
      {/* <themContext.Provider value={{ color: "red" }}>
        <userContext.Provider value={{ name: "Smallstars", age: 18 }}>
          <tokenContext.Provider value={{ token: "abcde" }}>
            <CustomContextShareHook />
          </tokenContext.Provider>
        </userContext.Provider>
      </themContext.Provider> */}

      <CustomScrollPositionHook />
      <button onClick={(e) => isShowState(!isShow)}>显示/隐藏</button>
    </div>
  );
}

export default App;
