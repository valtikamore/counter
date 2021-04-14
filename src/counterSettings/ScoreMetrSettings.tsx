import React, {ChangeEvent, FC} from "react";
import './ScoreMetrSettings.css'
import {Button} from "../components/button/button";
import {Input} from "../components/input/input";
import {useDispatch} from "react-redux";



type ScoreMetrSettingsType = {
    setCounter:()=>void
}

export const ScoreMetrSettings:FC<ScoreMetrSettingsType> = props=> {

    const {setCounter} = props


    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
      /*  setMaxValue(parseInt(e.currentTarget.value))*/
    }
    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
       /* setStartValue(parseInt(e.currentTarget.value))*/
    }

    const setTask = () => {
       /* props.setStartText(false)
        props.setDisableIncState(false)
        setCounter(startValue)
        */
    }
   /* const classNameStart = startValue<0 || startValue === maxValue || maxValue < startValue ? 'error':''
    const classNameCounterMax =  startValue === maxValue || maxValue < startValue ? 'error':''

    const disableSet = startValue < 0 || maxValue === startValue || startValue > maxValue*/
    return (
        <div className={'counterSettings'} >
               <div className='values'>
                   <Input onChangeMax={}>
                       Max value:
                   </Input>
                   <Input>
                       Start value :
                   </Input>
               </div>
                <div>
                    <Button onButtonClick={setCounter}>
                        set
                    </Button>
                </div>
        </div>
    )
}
