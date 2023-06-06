import React from "react";
import {Outlet} from "react-router-dom";

export default function ErrorPage({}: Props): React.ReactElement {

    return <React.Fragment>        <Outlet /></React.Fragment>
};