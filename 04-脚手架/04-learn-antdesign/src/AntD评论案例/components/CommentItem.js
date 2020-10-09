import React, { PureComponent } from "react";

import { DeleteOutlined } from "@ant-design/icons";
import { Comment, Avatar, Tooltip } from "antd";

export default class CommentItem extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const { nickname, avatar, content, datetime } = this.props.comment;
    // console.log(nickname, avatar, content, datetime);
    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt={avatar} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format("YYYY-MM-DD-HH:mm:ss")}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={(e) => this.removeItem()}>
            <DeleteOutlined />
            删除
          </span>,
        ]}
      />
    );
  }

  removeItem() {
    this.props.removeItem();
    // console.log(this.props);
  }
}
