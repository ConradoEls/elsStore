import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import NotFound from "../Pages/NotFound";
import SingIn from "../Pages/SingIn";
import { useRoutes } from "react-router-dom";

 export const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/my-order",
        element: <MyOrder />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/sing-in",
        element: <SingIn />,
      },
    ]);
    return routes;
  };