import React, {FC} from "react";
import classNames from 'classnames'
import {initialState} from "../../redux/counterReducer/counterReducer";

type TablePropsType = {
    counter: initialState
}

export const Table: FC<TablePropsType> = props => {
    const {counter} = props
    // const tableClassName = startValue < 0 || startValue === maxValue ||
    //   startValue > maxValue
    // const counterMax = counter === maxValue ? 'maxCounter' : ''

    return (

        <div>
            {counter.count}
        </div>
    )
}



