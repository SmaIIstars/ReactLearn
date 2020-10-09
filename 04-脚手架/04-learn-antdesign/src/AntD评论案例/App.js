import React, { PureComponent } from "react";

import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <div style={{ width: "500px", padding: "20px" }}>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              comment={item}
              key={item.id}
              removeItem={(e) => this.removeComment(index)}
            />
          );
        })}
        <CommentInput submitComment={(info) => this.submitComment(info)} />
      </div>
    );
  }

  removeComment(index) {
    // console.log(index);
    let newCommentList = [...this.state.commentList];

    newCommentList.splice(index, 1);

    this.setState({
      commentList: newCommentList,
    });
  }

  submitComment(info) {
    this.setState({
      // 这里先进性一次浅拷贝，再把 info 加在数组最后
      commentList: [...this.state.commentList, info],
    });
  }
}
