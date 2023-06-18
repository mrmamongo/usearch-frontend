import React, {useEffect, useState} from "react";
import {Colleague, Tag} from "./data/colleagues.ts";
import "./Catalogue.css";
import magnifier from "./assets/Magnifier.svg";
import {ColleagueCard} from "./ColleagueCard";


export default function Catalogue(): React.ReactElement {
    const [query, setCurrentQuery] = useState<string>("");
    const [currentFilter, setCurrentFilter] = useState<string>("all");
    const [colleagues, setColleagues] = useState<Colleague[]>([
        {
            stub: "jopa",
            long_name: "Jopa",
            url: "Jopa",
            tags: [["budget"]]
        }
    ]);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/university").then(r => r.json()).then(setColleagues)
    }, []);

    return <React.Fragment>
        <ul className="filters pt-5 d-flex gap-3">
            {
                (Object.keys(Tag) as Array<keyof typeof Tag>).map((filter, index: number) =>
                    <li key={index}>
                        <button type="button" id={filter} onClick={() => {
                            setCurrentFilter(filter)
                        }}>{Tag[filter]}</button>
                    </li>
                )
            }
        </ul>
        <div className="search pt-2 ps-5 pb-4">
            <input type="text" className="searchTerm" placeholder="Введите название ССУЗа" onChange={event => {
                setCurrentQuery(event.target.value)
            }}/>
            <button type="button" className="searchButton"><img src={magnifier} alt={"Search"}/></button>
        </div>


        <ul className="posts">
            {
                colleagues
                    .filter(colleague => colleague.long_name.includes(query))
                    .filter(colleague => currentFilter === "all" || colleague.tags.find((s: string[]) => currentFilter === s[0]) !== undefined)
                    .map((colleague: Colleague, index: number) => <ColleagueCard key={index} setCategory={setCurrentFilter}
                                                                                 colleague={colleague}/>)
            }
        </ul>
    </React.Fragment>
}