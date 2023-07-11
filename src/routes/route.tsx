import HomeMain from "../pages/home/index";
import Login from "../pages/auth-login/login";
import SignUp from "../pages/auth-login/signup";
import ErrorPage from '../components/404';

export default [
  {
    path: "/",
    element: <HomeMain />,
    children: [
      { index: true, element: <HomeMain /> },
      {
        path: "/login",
        element: <Login />,
        RouteName: "Login",
        protected: false,
      },
      {
        path: "/register",
        element: <SignUp />,
        RouteName: "Register",
        protected: false,
      },
      {
        path: "/errorpage",
        element: <RequireAuth><ErrorPage/></RequireAuth>,
        RouteName: "ErrorPage",
        protected: true,
      },
    ],
  },
];
