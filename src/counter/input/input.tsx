// @flow
import * as React from 'react';
import {ChangeEvent, FC} from "react";

type InputPropsType = {
    className:any
    value:number
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
};
export const Input:FC<InputPropsType> =
    ({
         className,
         value,
         onChange,
         children
    }) => {
    return (
        <div>
            <div>{children}</div>
            <input
                type="number"
                className={className}
                value={value}
                onChange={onChange} />
        </div>
    );
};