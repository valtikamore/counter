import React, {FC, useEffect, useState} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import './App.css'
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterAC, resetCounterAC} from "./redux/counterReducer/counterReducer";
import {AppRootStateType} from "./redux/store";


const App: FC = () => {
    const dispatch = useDispatch()

    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    const [startText, setStartText] = useState<boolean>(true)
    const [disableIncState,setDisableIncState] = useState<boolean>(true)

        useEffect(()=> {
            let start = localStorage.getItem('startValue')
            let max = localStorage.getItem('maxValue')
            if(start && max) {
                setMaxValue(+max)
                setStartValue(+start)
            }
        },[])
    function incCounter() {
        let action = incrementCounterAC()
        dispatch(action)
        // if (counter < maxValue) {
        //     setCounter(counter + 1)
        // }
    }
    function resetCounter() {
        let action = resetCounterAC()
        dispatch(action)
        // setCounter(startValue)
    }

    return (
        <div className='counter-wrapper'>
            <ScoreMetr
                maxValue={maxValue}
                resetCounter={resetCounter}
                counter={counter}
                incCounter={incCounter}
                startValue={startValue}
                startText={startText}
                setStartText={setStartText}
                disableIncState={disableIncState}
               />
            <ScoreMetrSettings maxValue={maxValue}
                               startValue={startValue}
                               setMaxValue={setMaxValue}
                               setStartValue={setStartValue}
                               setCounter={setCounter}
                               setStartText={setStartText}
                               setDisableIncState={setDisableIncState}
                               />
        </div>
    );
}

export default App;
