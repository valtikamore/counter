import React, {FC, useEffect} from 'react';
import {ScoreMetr} from './counter/ScoreMetr';
import {ScoreMetrSettings} from "./counterSettings/ScoreMetrSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    incrementCounterAC,
    initialStateType,
    resetCounterAC,
} from "./redux/counterReducer/counterReducer";
import classes from './App.module.scss'
import {ScoreMetrContainer} from "./counter/ScoremetrContainer";


const App: FC = () => {




    return (
        <div className={classes.counter_wrapper}>
            <ScoreMetrContainer/>
            <ScoreMetrSettings/>
        </div>
    );
}

export default App;
