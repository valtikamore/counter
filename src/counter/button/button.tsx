import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonsType = DefaultButtonPropsType  & {
    incCounter?:() => void
    resetCounter?:() => void
    title:string
}

 export const Button:FC<ButtonsType> = ({incCounter , resetCounter,title, ...restProps}) => {
    return (
            <button {...restProps} >
                {title}
            </button>
    )
}

