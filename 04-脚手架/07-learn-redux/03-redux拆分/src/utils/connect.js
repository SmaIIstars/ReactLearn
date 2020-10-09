import React, { PureComponent } from "react";
import store from "../store";

// 使用高阶组件
export function connect(mapStateToProps, mapDispatchToProps) {
  // 组件增强
  return function enchanceHOC(WrappedComponent) {
    // 返回新组件
    return class extends PureComponent {
      constructor(props) {
        super();

        this.state = {
          // 这里是先把 store 中的 state 传入组件，再接收从组件传回的 state，再进行更新
          storeState: mapStateToProps(store.getState()),
        };
      }

      componentDidMount() {
        // 进行更新
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unSubscribe();
      }

      /**
       * 1.自己的参数 props
       * 2.store 传入的 state
       * 3.store 传入的 dispatch
       */
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}
