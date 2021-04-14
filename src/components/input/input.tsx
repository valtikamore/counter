// @flow
import * as React from 'react';
import {ChangeEvent, FC} from "react";

type InputPropsType = {
    value:number
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    classname?:string
};
export const Input:FC<InputPropsType> =props => {
    const {value,children,onChange,classname} = props
    return (
        <div>
            <div>{children}</div>
            <input
                className={classname}
                type="number"
                value={value}
                onChange={onChange}
               />
        </div>
    );
};