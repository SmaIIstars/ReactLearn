import React, { PureComponent } from "react";
import {
  // Link,
  NavLink,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Detail2 from "./pages/detail2";
import Detail3 from "./pages/detail3";

import routes from "./router";

import "./App.css";

class App extends PureComponent {
  render() {
    const id = "123";
    const info = {
      name: "Smallstars",
      age: 18,
      height: 18.3,
    };

    return (
      <>
        {/* 
        选中改变样式可以自己写个通过下标对应改变 (类似vue)
        <Link to="/">首页</Link>
        <Link to="/about"> 关于</Link>
        <Link to="/profile">个人</Link> 
        */}
        {/* NavLink 自带属性，默认也是模糊匹配 */}
        {/* 
        <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }}>
          首页
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeStyle={{ color: "red", fontSize: "30px" }}
        >
          {" "}
          关于
        </NavLink>
        <NavLink
          exact
          to="/profile"
          activeStyle={{ color: "red", fontSize: "30px" }}
        >
          个人
        </NavLink> 
        */}
        {/* 默认会添加一个 active 类，可以自己改 */}
        <NavLink exact to="/" activeClassName="link-active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          {" "}
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          个人
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">
          详情
        </NavLink>
        <NavLink
          to={`/detail2?name=Stars&age=18`}
          activeClassName="link-active"
        >
          详情2
        </NavLink>
        <NavLink
          to={{
            pathname: "/detail3",
            search: "?weight=60",
            state: { info },
          }}
          activeClassName="link-active"
        >
          详情3
        </NavLink>
        <button onClick={(e) => this.jumpToProduct()}>商品</button>

        {/* 默认为模糊匹配 可以匹配多个路由 (使用Switch)*/}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} /> */}
        {/* <Route path="/:id" component={User} /> */}
        {/* <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route path="" component={NoMatch} />
        </Switch> */}

        {renderRoutes(routes)}
      </>
    );
  }

  // 非路由渲染的不会添加 history,location,match 属性
  jumpToProduct() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
