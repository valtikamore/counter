import React, {FC, useEffect, useState} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import './App.css'
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {incrementCounterAC, initialState, resetCounterAC} from "./redux/counterReducer/counterReducer";


const App: FC = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType,initialState>(state => state.counter)

        useEffect(()=> {
            // let start = localStorage.getItem('startValue')
            // let max = localStorage.getItem('maxValue')
            // if(start && max) {
            //     setMaxValue(+max)
            //     setStartValue(+start)
            // }
        },[])

    const  incCounter = () => {
        if(counter.count < counter.maxValue) {
            dispatch(incrementCounterAC())
        }
    }
    function resetCounter() {
        dispatch(resetCounterAC())
    }

    return (
        <div className='counter-wrapper'>
            <ScoreMetr
                incCounter={incCounter}
                resetCounter={resetCounter}
                counter={counter.count}
               />
            <ScoreMetrSettings
                               />
        </div>
    );
}

export default App;
