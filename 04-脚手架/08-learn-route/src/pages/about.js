import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

export function AboutHistory(props) {
  return <div>AboutHistory</div>;
}

export function AboutCulture(props) {
  return <div>AboutCulture</div>;
}

export function AboutContact(props) {
  return <div>AboutContact</div>;
}

export function AboutJoin(props) {
  return <div>AboutJoin</div>;
}

export default class About extends PureComponent {
  render() {
    // console.log(this.props.route);

    // 精准匹配
    // const branch = matchRoutes(this.props.route.routes, "/about");
    // console.log(branch);

    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">
          历史
        </NavLink>
        <NavLink exact to="/about/culture" activeClassName="about-active">
          文化
        </NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">
          联系
        </NavLink>
        <button
          onClick={(e) => {
            this.jumpToJoin();
          }}
        >
          加入我们
        </button>
        {/* <Switch>
          <Route exact path="/about" component={AboutHistory}></Route>
          <Route path="/about/culture" component={AboutCulture}></Route>
          <Route path="/about/contact" component={AboutContact}></Route>
          <Route path="/about/join" component={AboutJoin} />
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }

  // 只有被路由渲染出来的才会被添加这些属性
  jumpToJoin() {
    // console.log(this.props.history);
    // console.log(this.props.location);
    // console.log(this.props.match);
    this.props.history.push("/about/join");
  }
}
