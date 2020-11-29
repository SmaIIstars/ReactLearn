import React, { PureComponent } from "react";
import { StoreContext } from "./context";

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super();

        this.stateStore = {
          // This.context hasn't been assigned here yet
          stateStore: mapStateToProps(context.getState()),
        };
      }

      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState({
            stateStore: mapStateToProps(this.context.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unSubscribe();
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }

    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  };
};
