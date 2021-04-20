import React, {FC} from "react";
import './ScoreMetr.module.scss'
import {Button} from "../components/button/button";
import {Table} from "./table/table";
import {initialStateType} from "../redux/counterReducer/counterReducer";



type ScoreMetrType = {
    resetCounter:()=>void
    incCounter:()=>void
    counter:number
}

export const ScoreMetr: FC<ScoreMetrType> = props => {
    const {incCounter,resetCounter,counter} = props
    return (
        <div>
            <Table/>
            <div>
                <Button onClick={incCounter}>
                    inc
                </Button>
                <Button onClick={resetCounter}>
                    reset
                </Button>
            </div>
        </div>
    )
}


// const disableInc =  maxValue === startValue  || maxValue < 0 || counter === maxValue || startValue <0 || startValue > maxValue
// const disableReset = counter === 0 || maxValue === startValue  || maxValue < 0 || counter === startValue || counter < 0 || startValue > maxValue

