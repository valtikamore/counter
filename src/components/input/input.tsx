// @flow
import * as React from 'react';
import {ChangeEvent, FC} from "react";

type InputPropsType = {
   value:number
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
};
export const Input:FC<InputPropsType> =props => {
    const {value,children,onChange} = props
    return (
        <div>
            <div>{children}</div>
            <input
                type="number"
                value={value}
                onChange={onChange}
               />
        </div>
    );
};