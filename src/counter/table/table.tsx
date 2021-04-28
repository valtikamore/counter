import React, {FC} from "react";
import {initialStateType} from "../../redux/counterReducer/counterReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import classes from './table.module.scss'
import classNames from "classnames";

type TablePropsType = {
    counter:initialStateType
}

export const Table: FC<TablePropsType> = () => {
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)

    return (
        <div className={classNames(classes.table,{
            [classes.maxCounter] : counter.count === counter.maxValue
        })}>
                {counter.error ? counter.errorText : counter.count}
        </div>
    )
}



