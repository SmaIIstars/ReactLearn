import React, { PureComponent } from "react";
class LoginPage extends PureComponent {
  render() {
    return <div>LoginPage</div>;
  }
}

class CartPage extends PureComponent {
  render() {
    return <div>CartPage</div>;
  }
}

function withAuth(WrappedComponent) {
  const NewComponent = (props) => {
    const { isLogin } = props;

    if (isLogin) {
      return <WrappedComponent />;
    } else {
      return <LoginPage />;
    }
  };

  NewComponent.displayName = "Stars";

  return NewComponent;
}

const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.setState({
              isLogin: !this.state.isLogin,
            });
          }}
        >
          切换
        </button>
        <AuthCartPage isLogin={this.state.isLogin} />
      </div>
    );
  }
}
