import React, {FC, useState} from "react";
import './ScoreMetr.css'
import {Button} from "./button/button";
import {Table} from "./table/table";
import {start} from "repl";
import {ScoreMetrSettings} from "../counterSettings/ScoreMetrSettings";


type ScoreMetrType = {
    counter:number
    incCounter:() => void
    resetCounter:() => void
    maxValue:number
    startValue:number
    startText: boolean
    setStartText: (value: boolean) => void
}

export const ScoreMetr:FC<ScoreMetrType> = ({counter,incCounter,resetCounter,maxValue,startValue, ...props }) => {

    const disableInc =  maxValue === startValue  || maxValue < 0 || counter === maxValue || startValue <0 || startValue > maxValue
    const disableReset = counter === 0 || maxValue === startValue  || maxValue < 0 || counter === startValue || counter < 0 || startValue > maxValue

    return (
        <div className={'counter'} >
                <Table counter={counter} maxValue={maxValue} startValue={startValue}
                       startText={props.startText}
                       setStartText={props.setStartText}/>
                   <div className='button-block'>
                       <Button title='inc' onClick={()=>incCounter() } disabled={disableInc} className='pulse'/>
                       <Button onClick={()=>resetCounter()}  title='reset' disabled={disableReset} className='pulse'/>
                   </div>
        </div>
    )
}




