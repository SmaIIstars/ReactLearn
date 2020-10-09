import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();

    this.props = props;

    this.state = {
      movies: ["大话西游", "盗梦空间", "流浪地球", "星际穿越"],
    };
  }

  render() {
    return (
      <div>
        {this.state.movies.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    );
  }
}
