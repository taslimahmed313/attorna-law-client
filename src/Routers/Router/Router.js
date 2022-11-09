import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/service"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/addReview/:id",
        element: <AddReview></AddReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRouter>
            <MyReview></MyReview>
          </PrivateRouter>
        ),
      },
      {
        path: '/updateReview',
        element:<UpdateReview></UpdateReview>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);