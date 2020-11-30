import React, { PureComponent } from "react";
import { connect } from "../utils/connect";
import { getHomeMultidataAction } from "../store/home/actionCreator";

// import axios from "axios";

class Network extends PureComponent {
  componentDidMount() {
    // 应用中间件后，不在这里进行异步请求
    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   const data = res.data.data;
    //   // 注意: 这里的函数是传过来的，不是在类里面定义的
    //   this.props.changeBanner(data.banner.list);
    //   this.props.changeRecommend(data.recommend.list);
    // });

    this.props.getHomeMultidata();
  }

  render() {
    if (this.props.banner.length === 0) {
      return <div>暂无数据</div>;
    }

    return (
      <div>
        <h2>Network</h2>
        <div>
          Banner:
          <ul>
            {this.props.banner.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>;
            })}
          </ul>
        </div>

        <div>
          Recommend:
          <ul>
            {this.props.recommend.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  banner: state.homeInfo.banner,
  recommend: state.homeInfo.recommend,
});

const mapDispatchToProps = (dispatch) => ({
  // 这里传入的是函数，不再是对象了，而且不需要手动调用函数
  getHomeMultidata() {
    dispatch(getHomeMultidataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
