import React, {FC, useEffect, useState} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import './App.css'
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterAC, initialState, resetCounterAC} from "./redux/counterReducer/counterReducer";
import {AppRootStateType} from "./redux/store";

interface counterType extends initialState  {

}

const App: FC = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType,counterType>(state => state.counter)


    const [startText, setStartText] = useState<boolean>(true)
    const [disableIncState,setDisableIncState] = useState<boolean>(true)

        useEffect(()=> {
            let start = localStorage.getItem('startValue')
            let max = localStorage.getItem('maxValue')
            // if(start && max) {
            //     setMaxValue(+max)
            //     setStartValue(+start)
            // }
        },[])
    function incCounter() {
        let action = incrementCounterAC()
        dispatch(action)
    }
    function resetCounter() {
        let action = resetCounterAC()
        dispatch(action)
    }

    return (
        <div className='counter-wrapper'>
            <ScoreMetr
                maxValue={counter.maxValue}
                resetCounter={resetCounter}
                counter={counter.count}
                incCounter={incCounter}
                startValue={counter.startValue}
                startText={startText}
                setStartText={setStartText}
                disableIncState={disableIncState}
               />
            <ScoreMetrSettings maxValue={counter.maxValue}
                               startValue={counter.startValue}
                               // setMaxValue={setMaxValue}
                               // setStartValue={setStartValue}
                               // setCounter={setCounter}
                               setStartText={setStartText}
                               setDisableIncState={setDisableIncState}
                               />
        </div>
    );
}

export default App;
