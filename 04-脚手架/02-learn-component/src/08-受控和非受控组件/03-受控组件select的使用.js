import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      fruits: "orange",
    };
  }

  render() {
    return (
      <div>
        <div>水果: {this.state.fruits}</div>
        <form
          action="/#"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <select
            name="fruits"
            id="fruits"
            onChange={(e) => {
              this.handleChange(e);
            }}
            // 设置默认值
            value={this.state.fruits}
          >
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>

          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fruits);
  }

  handleChange(event) {
    this.setState({
      fruits: event.target.value,
    });
  }
}
