import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact.Js";
import About from "./components/About";
import Contact from "./components/Contact.Js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const data = {
            name : "Name",
        };
        setUserInfo(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
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