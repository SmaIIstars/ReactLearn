import Home from "../pages/home";
import About, {
  AboutHistory,
  AboutCulture,
  AboutContact,
  AboutJoin,
} from "../pages/about";
import Profile from "../pages/profile";
import User from "../pages/user";
import Detail from "../pages/detail";
import Detail2 from "../pages/detail2";
import Detail3 from "../pages/detail3";
import Product from "../pages/product";
// import Home from "../pages/home";

const routers = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHistory,
      },
      {
        path: "/about/culture",
        component: AboutCulture,
      },
      {
        path: "/about/contact",
        component: AboutContact,
      },
      {
        path: "/about/join",
        component: AboutJoin,
      },
    ],
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/detail2",
    component: Detail2,
  },
  {
    path: "/detail3",
    component: Detail3,
  },
  {
    path: "/product",
    component: Product,
  },
];

export default routers;
