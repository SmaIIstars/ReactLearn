import React, { PureComponent } from "react";

import moment from "moment";
// import "moment/locale/zh-cn";

import { Input, Button } from "antd";

const { TextArea } = Input;

export default class CommentInput extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div>
        <TextArea
          row={4}
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
        ></TextArea>
        <Button type="primary" onClick={(e) => this.addComment()}>
          添加评论
        </Button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  addComment() {
    moment.locale("zh-cn");
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg",
      nickname: "Smallstars",
      datetime: moment(),
      content: this.state.content,
    };

    this.props.submitComment(commentInfo);

    this.setState({
      content: "",
    });
  }
}
