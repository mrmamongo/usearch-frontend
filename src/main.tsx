import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root.tsx";
import ErrorPage from "./errors/ErrorPage.tsx";
import Preview from "./Preview.tsx";
import './index.css'
import Catalogue from "./Catalogue.tsx";
import {Login} from "./Login.tsx";
import {Register} from "./Register.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Preview />,
            },
            {
                path: "/catalogue",
                element: <Catalogue filter={""}/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);