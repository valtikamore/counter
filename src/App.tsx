import React, {ChangeEvent, FC, useEffect, useReducer, useState} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import './App.css'
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {counterReducer, incrementCounterAC, initialState, resetCounterAC, setCounterAC} from "./redux/counterReducer/counterReducer";



const App: FC = () => {

    const [counter,dispatchToCounter] = useReducer(counterReducer,{
        count:0,
        maxValue:5,
        minValue:0,
        error:'error.set correct value',
        startText:true,
        disableButton:true
    })

        useEffect(()=> {
            let start = localStorage.getItem('startValue')
            let max = localStorage.getItem('maxValue')
        },[])

    function incCounter() {
        dispatchToCounter(incrementCounterAC())
    }
    function resetCounter() {
        dispatchToCounter(resetCounterAC())
    }
    function setCounter() {
        dispatchToCounter(setCounterAC(counter.maxValue,counter.minValue))
    }


    return (
        <div className='counter-wrapper'>
            <ScoreMetr
                counter={counter}
                incCounter={incCounter}
                resetCounter={resetCounter}
               />
            <ScoreMetrSettings
                setCounter={setCounter}
                               />
        </div>
    );
}

export default App;
