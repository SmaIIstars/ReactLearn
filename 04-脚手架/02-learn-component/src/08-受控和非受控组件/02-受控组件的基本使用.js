// import React, { PureComponent } from "react";

// export default class App extends PureComponent {
//   constructor(props) {
//     super();
//     this.props = props;

//     this.state = {
//       username: "默认文本",
//       fruits: "orange",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>username: {this.state.username}</span>

//         <form action="/#" onSubmit={(e) => this.handleSubmit(e)}>
//           <label htmlFor="username">
//             用户:{" "}
//             <input
//               type="text"
//               id="username"
//               onChange={(e) => this.handleChange(e)}
//               value={this.state.username}
//             />
//           </label>

//           <input type="submit" value="提交 " />
//         </form>
//       </div>
//     );
//   }

//   handleChange(event) {
//     this.setState({
//       username: event.target.value,
//       fruits: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     // 阻止与事件相关联的默认操作
//     // 在这里是不进行提交操作
//     event.preventDefault();
//     console.log(this.state.username);
//   }
// }

import React, { PureComponent } from "react";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "DefaultText",
      counter: 5,
    };
  }

  changeHandle(e) {
    // console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }

  submitHandle(e) {
    // console.log(e);

    e.preventDefault();
  }

  render() {
    const { message } = this.state;
    return (
      <>
        <div>message:{message}</div>
        <form
          onSubmit={(e) => {
            this.submitHandle(e);
          }}
        >
          <label htmlFor="message">
            <input
              type="text"
              onChange={(e) => {
                this.changeHandle(e);
              }}
            />
          </label>
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default App;
