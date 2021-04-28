import React, {FC} from "react";
import './ScoreMetr.module.scss'
import {Button} from "../components/button/button";
import {Table} from "./table/table";
import classes from './ScoreMetr.module.scss'
import {initialStateType} from "../redux/counterReducer/counterReducer";


type ScoreMetrType = {
    resetCounter: () => void
    incCounter: () => void
    disableInc: boolean
    disableReset: boolean
    counter:initialStateType
}

export const ScoreMetr: FC<ScoreMetrType> = props => {
    const {incCounter, resetCounter, ...rest} = props
    return (
        <div className={classes.counter}>
            <Table counter={rest.counter}/>
            <div className={classes.buttonBlock}>
                <Button onClick={incCounter} disable={rest.disableInc}>
                    inc
                </Button>
                <Button onClick={resetCounter} disable={rest.disableReset}>
                    reset
                </Button>
            </div>
        </div>
    )
}





