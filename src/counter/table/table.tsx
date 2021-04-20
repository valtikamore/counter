import React, {FC} from "react";
import classNames from 'classnames'
import {initialStateType} from "../../redux/counterReducer/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type TablePropsType = {

}

export const Table: FC<TablePropsType> = props => {
    const {} = props
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)
    // const tableClassName = startValue < 0 || startValue === maxValue ||
    //   startValue > maxValue
    // const counterMax = counter === maxValue ? 'maxCounter' : ''

    return (
        <div>
            {counter.error ? counter.errorText : counter.count}
        </div>
    )
}



