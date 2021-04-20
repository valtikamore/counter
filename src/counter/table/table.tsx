import React, {FC} from "react";
import {initialStateType} from "../../redux/counterReducer/counterReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type TablePropsType = {

}

export const Table: FC<TablePropsType> = props => {
    const {} = props
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)

    return (
        <div>
            {counter.error ? counter.errorText : counter.count}
        </div>
    )
}



