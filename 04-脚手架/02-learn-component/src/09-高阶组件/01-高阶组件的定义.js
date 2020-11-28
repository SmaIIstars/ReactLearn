import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        {this.props.name}
      </div>
    );
  }
}

const EnhanceComponent = (WrappedComponent) => {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Change the display name of Components
  NewComponent.dispalyName = "StarsComponents";
  return NewComponent;
};

const EnhanceComponent2 = (WrappedComponent) => {
  function NewComponent(props) {
    return <WrappedComponent {...props} />;
  }

  // Change the display name of Components
  return NewComponent;
};

export default EnhanceComponent(App);
