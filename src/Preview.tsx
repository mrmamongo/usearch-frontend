import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import scope_1 from "./assets/scope_1.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import scope_2 from "./assets/scope_2.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import scope_3 from "./assets/scope_3.png"

import "./Preview.css"
export default function Preview(): React.ReactElement {

    return <React.Fragment>
        <div className="menu">
                <h1 className="intro w-50 mb-5">ВЫБЕРИ КОЛЛЕДЖ СВОЕЙ МЕЧТЫ</h1>
                <p className="text mb-5 mw-50">Добро пожаловать в каталог ССУЗов Свердловской области!
                    <br/><b> AlmaMater</b> – это сайт, который сэкономит время при выборе учебного учреждения.
                    <br/>Благодаря удобным инструментам поиска, вы сможете:
                    <ul>
                        <li> найти ССУЗ с интересующей вас специальностью,</li>
                        <li> выбрать подходящий по баллу аттестата,</li>
                        <li> узнать необходимую информацию по интересующему учебному заведению.</li>
                    </ul>
                </p>
                <div className="btn"><p>ЗАРЕГИСТРИРОВАТЬСЯ</p></div>

            <div className="container pt-5 d-flex flex-column align-items-center">
                <h2 className="intro_reg">ЗАЧЕМ МНЕ РЕГИСТРИРОВАТЬСЯ??</h2>
                <h3 className="text_reg fw-bold">После регистрации вам будут доступны функции:</h3>
                <div className="scopes d-flex flex-row align-items-end justify-content-between">
                    <div><img src={scope_1} alt={"first"}/></div>
                    <div><img src={scope_2} alt={"second"}/></div>
                    <div><img src={scope_3} alt={"third"}/></div>
                </div>
                <div className="btn mt-5">ХОЧУ ЗАРЕГИСТРИРОВАТЬСЯ</div>
            </div>
        </div>
    </React.Fragment>
};