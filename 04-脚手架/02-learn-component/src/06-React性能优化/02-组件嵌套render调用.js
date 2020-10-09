import React, { Component } from "react";

// Header
function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>;
}

// Main
function Banner() {
  console.log("Banner被调用");
  return <h2>我是Banner组件</h2>;
}

class ProductList extends Component {
  render() {
    console.log("ProductList被调用");
    return (
      <ul>
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表5</li>
      </ul>
    );
  }
}

class Main extends Component {
  render() {
    console.log("Main被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

// Footer
function Footer() {
  console.log("Footer被调用");
  return <h2>我是Footer组件</h2>;
}

export default class App extends Component {
  constructor(props) {
    super();

    this.props = props;

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
