import store from "./store";
import React, { Component } from "react";

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperCommponent) => {
    return class extends Component {
      constructor(props) {
        super();

        this.state = {
          storeState: mapStateToProps(store.getState()),
        };
      }

      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unSubscribe();
      }

      render() {
        return (
          <WrapperCommponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
};

export default connect;
