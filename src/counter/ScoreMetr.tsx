import React, {FC} from "react";
import './ScoreMetr.css'
import {Button} from "../components/button/button";
import {Table} from "./table/table";
import {initialState} from "../redux/counterReducer/counterReducer";



type ScoreMetrType = {
    incCounter: () => void
    resetCounter: () => void
    counter: initialState
}

export const ScoreMetr: FC<ScoreMetrType> = props => {
    const {resetCounter, incCounter, counter} = props

    // const disableInc =  maxValue === startValue  || maxValue < 0 || counter === maxValue || startValue <0 || startValue > maxValue
    // const disableReset = counter === 0 || maxValue === startValue  || maxValue < 0 || counter === startValue || counter < 0 || startValue > maxValue

    return (
        <div className={'counter'}>
            <Table counter={counter}/>
            <div className='button-block'>
                <Button onButtonClick={incCounter}>
                    inc
                </Button>
                <Button onButtonClick={resetCounter}>
                    reset
                </Button>
            </div>
        </div>
    )
}




