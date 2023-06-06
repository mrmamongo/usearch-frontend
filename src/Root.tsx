// @flow
import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from "./assets/logo.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import magnifier from "./assets/Magnifier.svg";
import "./Root.css";
import {cities, City} from "./data/cities.ts";


// <style>
//             body{
//             background-color: #FFFFFF; /* Цвет фона веб-страницы */
//         }
//         </style>
export default function Root(): React.ReactElement {
    const [filter, setFilter] = useState<string>("");

    return <React.Fragment>
        <nav className="main-navbar">
            <Link className="me-4" to="/"><img src={logo} alt="Logo"/></Link>
            <Link to={`catalogue`} className="nav-link">КАТАЛОГ ССУЗов</Link>
            {

            }
            <Link to={"/login"} className="btn ms-auto me-4" type="button">ВОЙТИ</Link>
            <Link to={"/register"} className="btn me-0" type="button">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
        </nav>
        <div className="mainblock">
            <section className="search-section pt-4">
            <select className="btn dropcontainer">
                <option key={-1}>ВЫБРАТЬ ГОРОД</option>
                {cities.map((city: City, index: number) =>
                    <option key={index} value={index}>{city.name}</option>
                )}
            </select>
            </section>
            <Outlet />
        </div>

    </React.Fragment>
}