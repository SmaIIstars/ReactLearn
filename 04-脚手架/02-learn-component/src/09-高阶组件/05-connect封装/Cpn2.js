import React, { memo } from "react";
import connect from "./connect";
import { addNumberAction, subNumberAction } from "./store/actionCreator";

const cpn2 = memo(function cpn2(props) {
  return (
    <div>
      <div>Cpn2</div>
      <div>{props.num}</div>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  num: state.num,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => {
    dispatch(addNumberAction(num));
  },
  subNumber: (num) => {
    dispatch(subNumberAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(cpn2);
