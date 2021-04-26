import React, {FC, useEffect} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {incrementCounterAC, initialStateType, resetCounterAC} from "./redux/counterReducer/counterReducer";
import classes from './App.module.scss'


const App: FC = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType,initialStateType>(state => state.counter)

        useEffect(()=> {
            // let start = localStorage.getItem('startValue')
            // let max = localStorage.getItem('maxValue')
            // if(start && max) {
            //     setMaxValue(+max)
            //     setStartValue(+start)
            // }
        },[])

    const incCounter = () => {
        if(counter.count < counter.maxValue) {
            dispatch(incrementCounterAC())
        }
    }
    const disableInc =  counter.maxValue === counter.minValue  || counter.maxValue < 0 || counter.count === counter.maxValue || counter.minValue <0 || counter.minValue > counter.maxValue

    const disableReset =  counter.count === 0 ||  counter.maxValue ===  counter.minValue  ||  counter.maxValue < 0 ||  counter.count ===  counter.minValue ||  counter.count < 0 || counter.minValue >  counter.maxValue

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className={classes.counter_wrapper}>
            <ScoreMetr
                incCounter={incCounter}
                resetCounter={resetCounter}
                disableInc={disableInc}
                disableReset={disableReset}
               />
            <ScoreMetrSettings/>
        </div>
    );
}

export default App;
