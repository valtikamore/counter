import React, {ChangeEvent, FC, MouseEventHandler, useState} from "react";
import './ScoreMetrSettings.css'
import {Button} from "../counter/button/button";



type ScoreMetrSettingsType = {
    maxValue:number
    startValue:number
    setMaxValue:(n:number)=>void
    setStartValue:(n:number)=>void
    setCounter:(n:number)=>void
    setStartText: (value: boolean) => void
}

export const ScoreMetrSettings:FC<ScoreMetrSettingsType> = ({maxValue,startValue,setMaxValue,setStartValue,setCounter, ...props}) => {

    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value))
    }
    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(parseInt(e.currentTarget.value))
    }

    const setTask = (e:any) => {
        props.setStartText(false)
        setCounter(startValue)
        localStorage.setItem('startValue',JSON.stringify(startValue))
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
    }
    const classNameStart = startValue<0 || startValue === maxValue || maxValue < startValue ? 'error':''
    const classNameCounterMax =  startValue === maxValue || maxValue < startValue ? 'error':''

    const disableSet = startValue < 0 || maxValue === startValue || startValue > maxValue
    return (
        <div className={'counterSettings'} >
               <div className='values'>
                   <div>max value:</div>
                   <input
                       type="number"
                       className={classNameCounterMax}
                       value={maxValue}
                       onChange={onChangeMax} />
                    <div>start value</div>
                    <input
                        type="number"
                        value={startValue}
                        onChange={onChangeStart}
                        className={classNameStart}/>
               </div>
                <div>
                    <Button title='set' disabled={disableSet} onClick={setTask }className='pulse' />
                </div>
        </div>
    )
}
