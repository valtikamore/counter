import React, {FC} from "react";
import {initialStateType} from "../../redux/counterReducer/counterReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import classes from './table.module.scss'

type TablePropsType = {

}

export const Table: FC<TablePropsType> = () => {
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)

    return (
        <div className={classes.table}>
            <div className={counter.count === counter.maxValue ?classes.maxCounter : ''}>
                {counter.error ? counter.errorText : counter.count}
            </div>
        </div>
    )
}



