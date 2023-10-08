import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetailsPage from "../components/ServiceDetailsPage/ServiceDetailsPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/service/:id',
        element: <ServiceDetailsPage></ServiceDetailsPage>,
        loader: () => fetch('/watch.json')
      }
    ]
  }
]);
export default router;