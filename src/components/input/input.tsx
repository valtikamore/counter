// @flow
import * as React from 'react';
import {ChangeEvent, FC} from "react";

type InputPropsType = {
    onChangeMax:()=>void
    onChangeMin:()=>void
};
export const Input:FC<InputPropsType> = props => {
    const {} = props
    return (
        <div>
            <div>{props.children}</div>
            <input
                type="number"
                /*className={className}
                value={value}
                onChange={onChange}*/ />
        </div>
    );
};