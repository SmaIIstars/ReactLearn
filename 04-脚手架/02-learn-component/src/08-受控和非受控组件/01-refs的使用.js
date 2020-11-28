import React, { PureComponent, createRef, forwardRef } from "react";

// Can't use ref in function components, it doesn't have instance
// Use the forwardRef HOC to enhance the function component
const Profile = forwardRef(function (props, ref) {
  console.log(props.name);
  return <div ref={ref}>Profile</div>;
});

class Counter extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }
  subclassAdd() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>Counter:{counter}</div>
      </div>
    );
  }
}

class App extends PureComponent {
  constructor() {
    super();

    this.ref2 = createRef();
    this.ref3 = null;
    this.ref4 = createRef();
    this.ref5 = createRef();
  }

  changeText() {
    console.log("this", this);
    this.refs.ref1.innerHTML = "SmallStars";
    this.ref2.current.innerHTML = "BlackAngel";
    this.ref3.innerHTML = "HelloKitty";
  }

  supclassAdd() {
    // call the subclass function by ref
    this.ref4.current.subclassAdd();
  }

  render() {
    return (
      <div>
        {/* Three ways to use ref: String(Abandoned), Object(recommend), Function */}
        <div ref="ref1">DefaultText</div>
        <div ref={this.ref2}>DefaultText</div>
        <div ref={(args) => (this.ref3 = args)}>DefaultText</div>

        <Profile name="profile" ref={this.ref5} />

        <button
          onClick={(e) => {
            this.changeText();
          }}
        >
          changeText
        </button>

        <Counter ref={this.ref4} />
        <button onClick={() => this.supclassAdd()}>+</button>
      </div>
    );
  }
}

export default App;
