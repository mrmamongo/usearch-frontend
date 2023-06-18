// @flow 
import * as React from 'react';
import {Colleague} from "./data/colleagues";
import {Link} from "react-router-dom";

type Props = {
    colleague: Colleague
    setCategory: CallableFunction
};
export const ColleagueCard = ({colleague, setCategory}: Props) => {

    return (
        <li className="card">
            <div className="card-body">
                <ul className="card-header d-flex flex-row flex-wrap">
                    {
                        colleague.tags.map((t: string[], tag_index: number) => <li key={tag_index} onClick={() => setCategory(t[1])}><a className={"post-category"}>{t[1]}</a></li>)
                    }
                </ul>
                <Link className="card-text" to={colleague.stub}>{colleague.long_name}</Link>
            </div>
        </li>
    );
};