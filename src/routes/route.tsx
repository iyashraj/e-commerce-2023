import { useRoutes } from "react-router-dom";
import HomeMain from "../pages/home";
import Login from "../pages/auth-login/login";
import SignUp from "../pages/auth-login/signup";
import Navbar from "../components/home/navbar";
import ErrorPage from "../components/404";
import ProtectedRoute from "./protectedRoute";
export function Routes() {
    const element = useRoutes([
      { path: "/", element: <HomeMain/> },
      { path: "/login",
        element: <Login/>,
        children: [
          { index: true, element: <SignUp/> },
          { path: ":slug", element: <Login/> }
        ],
      },
      { path: "/nav", element: <Navbar/> },
      { path: "*", element: <ProtectedRoute user={false}><ErrorPage/></ProtectedRoute>}
    ]);
    return element;
  }

