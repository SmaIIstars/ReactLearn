import React, { useEffect } from "react";

const Home = (props) => {
  useLoginLife("Home");
  return <div>Home</div>;
};

const About = (props) => {
  useLoginLife("About");
  return <div>About</div>;
};

export default function CustomLifeHook() {
  useEffect(() => {
    console.log("CustomLifeHook创建");
    return () => {
      console.log("CustomLifeHook销毁");
    };
  }, []);

  return (
    <div>
      <h2>CustomLifeHook</h2>
      <Home />
      <About />
    </div>
  );
}

function useLoginLife(name) {
  useEffect(() => {
    console.log(`${name}CustomLifeHook创建`);
    return () => {
      console.log(`${name}CustomLifeHook销毁`);
    };
  }, []);
}
