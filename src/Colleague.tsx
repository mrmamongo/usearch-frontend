// @flow
import * as React from 'react';
import {useParams} from "react-router-dom";

export const Colleague = () => {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    );
};