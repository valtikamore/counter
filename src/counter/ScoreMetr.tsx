import React, {FC} from "react";
import './ScoreMetr.module.scss'
import {Button} from "../components/button/button";
import {Table} from "./table/table";
import classes from './ScoreMetr.module.scss'


type ScoreMetrType = {
    resetCounter: () => void
    incCounter: () => void
    disableInc: boolean
    disableReset: boolean
}

export const ScoreMetr: FC<ScoreMetrType> = props => {
    const {incCounter, resetCounter, ...rest} = props
    return (
        <div className={classes.counter}>
            <Table/>
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





