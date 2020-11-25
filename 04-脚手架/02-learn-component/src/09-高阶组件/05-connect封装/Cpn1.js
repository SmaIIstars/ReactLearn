import React, { memo } from "react";
import { additionAction, substractionAction } from "./store/actionCreator";
import connect from "./connect";

const cpn1 = memo(function cpn1(props) {
  return (
    <div>
      <div>Cpn1</div>
      <div>{props.num}</div>
      <button onClick={(e) => props.add()}>+</button>
      <button onClick={(e) => props.sub()}>-</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  num: state.num,
});
const mapDispatchToProps = (dispatch) => ({
  add: () => {
    dispatch(additionAction());
  },
  sub: () => {
    dispatch(substractionAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(cpn1);
