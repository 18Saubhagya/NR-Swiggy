import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact.Js";
import About from "./components/About";
import Contact from "./components/Contact.Js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);