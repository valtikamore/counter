import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import classNames from 'classnames'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonsType = DefaultButtonPropsType & {
    onClick: () => void
}

export const Button: FC<ButtonsType> = props => {
    const {onClick} = props
    return (
        <button onClick={()=> onClick()}>
            {props.children}
        </button>
    )
}

