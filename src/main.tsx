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
import {Colleague} from "./Colleague";

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
                path: "/catalogue/:id",
                element: <Colleague/>
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