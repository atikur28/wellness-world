import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetail from "../pages/Home/ServiceInfo/ServiceDetail/ServiceDetail";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllServices from "../pages/AllServices/AllServices";

const createdRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/services",
                loader: () => fetch('/services.json'),
                element: <AllServices></AllServices>
            },
        ]
    }
])

export default createdRouter;