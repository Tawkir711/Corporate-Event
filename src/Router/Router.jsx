import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetailsPage from "../components/ServiceDetailsPage/ServiceDetailsPage";
import PrivateRoute from "./PrivateRoute";
import EventPrice from "../components/Event/EventPackage ";
import EventPackage from "../components/Event/EventPackage ";
import EventGallery from "../EventGallery/EventGallery";



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
        element: <PrivateRoute><ServiceDetailsPage></ServiceDetailsPage></PrivateRoute>,
        loader: () => fetch('/watch.json')
      },
      {
        path: '/eventPackage',
        element: <PrivateRoute><EventPackage></EventPackage></PrivateRoute>
      },
      {
        path: '/eventGallery',
        element:<PrivateRoute><EventGallery></EventGallery></PrivateRoute>
      }
    ]
  }
]);
export default router;