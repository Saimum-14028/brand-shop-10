import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import MyCart from "./MyCart";
import Products from "./Products";
import ProductsCardDetails from "./ProductsCardDetails";
import UpdateProduct from "./UpdateProduct";

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
                element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
              //  element: <AddProduct></AddProduct>,
            },
            {
                path : "/my cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/mycart'),
            },
            {
                path : "/products/:id",
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: "/product details/:id",
                element: <PrivateRoute><ProductsCardDetails></ProductsCardDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path : "/update product/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            },

            {
                path: "login",
                element : <Login></Login>
            },
            {
            path: "register",
            element : <Register></Register>
            },
        ]

    }
])

export default myCreatedRoute;