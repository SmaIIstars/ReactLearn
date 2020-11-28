import React, { memo } from "react";

import { HomeWrapper, TitleWrapper } from "./style";

const index = memo(function index(props) {
  return (
    <HomeWrapper>
      <div className="banner">
        <span className="active">Home1</span>
        <span>Home2</span>
        <span>Home3</span>
      </div>
      <TitleWrapper>Home Title</TitleWrapper>
    </HomeWrapper>
  );
});

export default index;
