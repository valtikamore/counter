import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import classNames from 'classnames'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonsType = DefaultButtonPropsType & {
    onButtonClick?: () => void
}

export const Button: FC<ButtonsType> = props => {
    const {onButtonClick} = props
    return (
        <button onClick={onButtonClick}>
            {props.children}
        </button>
    )
}

