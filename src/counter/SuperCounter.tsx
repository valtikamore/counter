import React, {FC, useState} from "react";
import './SuperCounter.css'


// type CounterValuesType = 0|1|2|3|4|5

export const Counter = () => {
    const [counter,setCounter] = useState<number>(0)

    function incCounter ()  {

        setCounter(counter + 1)


    }
    function resetCounter () {
        setCounter(0)
    }
    return (
        <div >
            <Table counter={counter}/>
            <Buttons incCounter={incCounter} resetCounter={resetCounter} counter={counter}/>
        </div>
    )
}
type ButtonsType = {
    incCounter:() => void
    resetCounter:() => void
    counter:number
}
 const Buttons:FC<ButtonsType> = ({incCounter , resetCounter , counter}) => {
    return (
        <div className='buttons'>
            <button onClick={incCounter}
                    disabled={counter >= 5 ? true : false}
                     className='inc'>inc</button>
            <button onClick={resetCounter}
                    disabled={counter === 0 ? true : false}
                    className='reset'>reset</button>
        </div>

    )
}
type TablePropsType = {
    counter:number
}

 const Table:FC<TablePropsType> = ({counter}) => {
    return (
        <div className={counter === 5 ? 'counterMaxValue' : '' }>
            <div className='table'>{counter}</div>

        </div>
    )
}