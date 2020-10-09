import React, { PureComponent } from "react";
import axios from "axios";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      products: [],
    };
  }

  // 使用await必须标志函数是异步函数
  async componentDidMount() {
    // 基本流程
    // const res = "";
    // // 获取数据
    // this.setState({
    //   products: [...this.state.products, ...res],
    // });
    // 2种基本请求格式
    axios({
      url: "http://httpbin.org/get",
      // method: "get",
      params: {
        name: "Smallstars",
        age: 18,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios({
    //   url: "http://httpbin.org/post",
    //   method: "post",
    //   params: {
    //     name: "BlackAngel",
    //     age: 19,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // await的错误获取
    // try {
    //   const data = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: "Smallstars",
    //       age: 18,
    //     },
    //   });
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }

    // 拦截器 (结束后一定要返回)
    axios.interceptors.request.use(
      (config) => {
        console.log("请求成功");
        return config;
      },
      (err) => {
        console.log(err, "请求失败");
      }
    );
    axios.interceptors.response.use(
      (config) => {
        console.log("响应成功");
        return config;
      },
      (err) => {
        console.log(err, "响应失败");
      }
    );
  }

  render() {
    return <div>App</div>;
  }
}
