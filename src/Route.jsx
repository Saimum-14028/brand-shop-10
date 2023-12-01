import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import AddProduct from "./AddProduct";

const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/add product",
              //  element : <PrivateRoute><MyEvents></MyEvents></PrivateRoute>
                element: <AddProduct></AddProduct>,
            },
            // {
            //     path : "/donation",
            //     element : <PrivateRoute><Donation></Donation></PrivateRoute>
            // },
            // {
            //     path : "service/:id",
            //     element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            // },
            // {
            //     path: "login",
            //     element : <Login></Login>
            // },
            // {
            // path: "register",
            // element : <Register></Register>
            // },
        ]

    }
])

export default myCreatedRoute;