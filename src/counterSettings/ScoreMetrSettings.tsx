import React, {ChangeEvent, FC} from "react";
import './ScoreMetrSettings.css'
import {Button} from "../components/button/button";
import {Input} from "../components/input/input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {setCounterAC, setErrorAC, setMaxValueAC, setMinValueAC} from "../redux/counterReducer/counterReducer";


type ScoreMetrSettingsType = {}

export const ScoreMetrSettings: FC<ScoreMetrSettingsType> = props => {
    const dispatch = useDispatch()
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const {} = props


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.currentTarget.value)
        if (minValue < 0 || minValue === maxValue || maxValue < minValue) {
            setErrorAC('set correct value. Error',true)
        } else {
            dispatch(setMaxValueAC(num))
        }
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {

        let num = parseInt(e.currentTarget.value)
        if (num < 0 || num === maxValue || maxValue < num) {
            dispatch(setErrorAC('enter correct value',true))
        } else {
            dispatch(setErrorAC('',false))
            dispatch(setMinValueAC(num))
        }

    }

    const setCounter = () => {
        dispatch(setCounterAC(minValue))
    }
    const classNameStart = minValue < 0 || minValue === maxValue || maxValue < minValue ? 'error' : ''
    const disableSet = minValue < 0 || maxValue === minValue || minValue > maxValue

    return (
        <div className={'counterSettings'}>
            <div>
                <Input value={maxValue} onChange={onChangeMax} classname={classNameStart}>
                    Max value:
                </Input>
                <Input value={minValue} onChange={onChangeMin} classname={classNameStart}>
                    Start value :
                </Input>
            </div>
            <div>
                <Button onClick={setCounter} disable={disableSet} >
                    set
                </Button>
            </div>
        </div>
    )



}

