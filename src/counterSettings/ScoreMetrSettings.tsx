import React, {ChangeEvent, FC} from "react";
import './ScoreMetrSettings.module.scss'
import {Button} from "../components/button/button";
import {Input} from "../components/input/input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {
    initialStateType,
    setCounterAC,
    setErrorAC,
    setMaxValueAC,
    setMinValueAC
} from "../redux/counterReducer/counterReducer";
import classes from './ScoreMetrSettings.module.scss'


type ScoreMetrSettingsType = {}

export const ScoreMetrSettings: FC<ScoreMetrSettingsType> = props => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType, initialStateType>(state => state.counter)
    const {} = props


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.currentTarget.value)
        if (num < 0) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else if (counter.minValue === num) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else if (num < counter.minValue) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else {
            dispatch(setErrorAC(`enter values and press 'set'`, true))
        }
        dispatch(setMaxValueAC(num))
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.currentTarget.value)
        if (num < 0) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else if (num === counter.maxValue) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else if (counter.maxValue < num) {
            dispatch(setErrorAC(`enter correct value`, true))
        } else {
            dispatch(setErrorAC(`enter values and press 'set'`, true))
        }
        dispatch(setMinValueAC(num))
    }
    const setCounter = () => {
        dispatch(setErrorAC('', false))
        dispatch(setCounterAC(counter.minValue))
    }

    const classNameStart = counter.minValue < 0 || counter.minValue === counter.maxValue || counter.maxValue < counter.minValue ? classes.error : ''
    const disableSet = counter.minValue < 0 || counter.maxValue === counter.minValue || counter.minValue > counter.maxValue

    return (
        <div className={classes.counterSettings}>
            <div>
                <Input value={counter.maxValue} onChange={onChangeMax} classname={classNameStart}>
                    Max value:
                </Input>
                <Input value={counter.minValue} onChange={onChangeMin} classname={classNameStart}>
                    Start value :
                </Input>
            </div>
            <div>
                <Button onClick={setCounter} disable={disableSet}>
                    set
                </Button>
            </div>
        </div>
    )


}

