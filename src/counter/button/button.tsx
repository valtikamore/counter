import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import classNames from  'classnames'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonsType = DefaultButtonPropsType  & {
    incCounter?:() => void
    resetCounter?:() => void
    title:string
    disabled:boolean
}

 export const Button:FC<ButtonsType> = ({incCounter , resetCounter,title,disabled, ...restProps}) => {
    return (
            <button {...restProps} className={classNames('pulse', {
                'disable' : disabled
            })} disabled={disabled}>
                {title}
            </button>
    )
}

