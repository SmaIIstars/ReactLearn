import React, { PureComponent } from "react";

/**
 * 只需要传入 className 自己生成9种类
 * 三种状态: appear、enter、exit
 * 1.开始状态: -appear、-enter、-exit
 * 2.执行动画: -appear-active、-enter-active、-exit-active
 * 3.执行结束: -appear-done、-enter-active、-exit-done
 *
 * appear 第一次加载的时候,默认为false
 */

import { CSSTransition } from "react-transition-group";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./CSSTransition.css";

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
        >
          显示/隐藏
        </button>
        {/*
         v-show效果: in
         v-if效果: 添加unmountOnExit (默认false)  
        */}
        {/* 块级元素text-align不生效 */}
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={500}
          unmountOnExit
          appear
          onEnter={(el) => console.log("开始进入")}
          onEntering={(el) => console.log("正在进入")}
          onEntered={(el) => console.log("进入完成")}
          onExit={(el) => console.log("开始退出")}
          onExiting={(el) => console.log("正在退出")}
          onExited={(el) => console.log("退出完成")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
