import React, {FC, useCallback, useEffect} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import classes from './App.module.scss';
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {incrementCounterAC, initialStateType, resetCounterAC} from "./redux/counterReducer/counterReducer";


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

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className={classes.counterWrapper}>
            <ScoreMetr
                incCounter={incCounter}
                resetCounter={resetCounter}
                counter={counter.count}
               />
            <ScoreMetrSettings/>
        </div>
    );
}

export default App;
