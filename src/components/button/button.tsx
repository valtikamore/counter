import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import classes from './button.module.scss'
import classNames from "classnames";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonsType = DefaultButtonPropsType & {
    onClick: () => void
    disable?: boolean
}

export const Button: FC<ButtonsType> = props => {
    const {onClick, disable} = props
    return (
        <button onClick={() => onClick()}  className={disable?classes.disable:classes.pulse}>
            {props.children}
        </button>
    )
}

