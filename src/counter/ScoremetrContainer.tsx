import React from 'react'
import { ScoreMetr } from './ScoreMetr'
import {incrementCounterAC, initialStateType, resetCounterAC} from "../redux/counterReducer/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export const ScoreMetrContainer = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)
    const incCounter = () => {
        if(counter.count < counter.maxValue) {
            dispatch(incrementCounterAC())
        }
    }
    const disableInc =  counter.maxValue === counter.minValue  || counter.maxValue < 0 || counter.count === counter.maxValue || counter.minValue <0 || counter.minValue > counter.maxValue

    const disableReset =counter.maxValue ===  counter.minValue  ||  counter.maxValue < 0 ||  counter.count ===  counter.minValue ||  counter.count < 0 || counter.minValue >  counter.maxValue

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    return (
       <ScoreMetr incCounter={incCounter} disableInc={disableInc} disableReset={disableReset} resetCounter={resetCounter} counter={counter}/>
    )
}