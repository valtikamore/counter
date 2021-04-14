import React, {ChangeEvent, FC} from "react";
import './ScoreMetrSettings.css'
import {Button} from "../components/button/button";
import {Input} from "../components/input/input";
import {useDispatch} from "react-redux";



type ScoreMetrSettingsType = {
    maxValue:number
    startValue:number
    setStartText: (value: boolean) => void
    setDisableIncState:(value:boolean) => void
}

export const ScoreMetrSettings:FC<ScoreMetrSettingsType> = ({maxValue,startValue, ...props}) => {
    const dispatch = useDispatch()


    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value))
    }
    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(parseInt(e.currentTarget.value))
    }

    const setTask = () => {
        props.setStartText(false)
        props.setDisableIncState(false)
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
                   <Input
                       className={classNameCounterMax}
                       onChange={onChangeMax}
                       value={maxValue}>
                       Max value:
                   </Input>
                   <Input
                       className={classNameStart}
                       onChange={onChangeStart}
                       value={startValue}>
                       Start value :
                   </Input>
               </div>
                <div>
                    <Button title='set' disabled={disableSet} onClick={setTask } />
                </div>
        </div>
    )
}
