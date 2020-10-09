import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";

// axios 公共配置
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "dsafas";
// axios.defaults.headers.post["Content-Type"] = "application/text";

ReactDOM.render(<App />, document.getElementById("root"));
