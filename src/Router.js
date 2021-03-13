import React from "react";
import Home from './page/home/home'
import Register from './page/register/register'
import Login from './page/login/login'
import Profile from './page/Profile/profile'


const Router = [
    {
          path: "/",
        element: <Home />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/Login",
        element: <Login />,
    },

    {
        path: "/Profile",
        element: <Profile />,
    },
];
export default Router;