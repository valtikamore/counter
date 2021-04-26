import {Dispatch} from "redux";
import {AppRootStateType} from "../store";

enum ACTION_TYPES {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER',
    SET_COUNT = 'SET_COUNT',
    SET_MAX_VALUE='SET_MAX_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_ERROR='SET_ERROR',
    SET_VALUE_FROM_LOCAL_STORAGE='SET_VALUE_FROM_LOCAL_STORAGE'
}

export type ActionsType =
    ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof setCounterAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setErrorAC> |
    ReturnType<typeof setValueFromLocalStorage>

export interface initialStateType {
    count: number
    maxValue: number
    minValue: number
    errorText:`enter values and press 'set'`|`enter correct value`|``
    error: boolean
    disableButton: boolean
}

let initialState = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    errorText: `enter values and press 'set'`,
    error:true,
    disableButton: true
} as initialStateType

export const counterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_COUNTER: {
                return {...state, count: state.count + 1}
        }
        case ACTION_TYPES.RESET_COUNTER: {
            return {...state, count: state.count = state.minValue}
        }
        case ACTION_TYPES.SET_COUNT: {
            return {...state, count: state.minValue}
        }
        case ACTION_TYPES.SET_MAX_VALUE:{
            return {...state,maxValue:action.value}
        }
        case ACTION_TYPES.SET_MIN_VALUE:{
            return {...state,minValue:action.value}
        }
        case ACTION_TYPES.SET_ERROR: {
            return {...state,errorText:action.errorText,error:action.error}
        }
        case ACTION_TYPES.SET_VALUE_FROM_LOCAL_STORAGE: {
            return {...state,count: action.value,minValue:action.value}
        }
        default :
            return state
    }
}
export const incrementCounterAC = () => (
    {type: 'INCREMENT_COUNTER'} as const)
export const resetCounterAC = () => ({type: 'RESET_COUNTER'} as const)
export const setCounterAC = ( minValue: number) => ({type: 'SET_COUNT', minValue} as const)
export const setMaxValueAC = (value:number) => ({type:'SET_MAX_VALUE',value}as const)
export const setMinValueAC = (value:number) => ({type:'SET_MIN_VALUE',value}as const)
export const setErrorAC = (errorText:string,error:boolean) => ({type:'SET_ERROR',errorText,error}as const )
export const setValueFromLocalStorage = (value:number) => ({type:'SET_VALUE_FROM_LOCAL_STORAGE',value}as const )

export const IncValueTC = () => {
    return (dispatch:Dispatch , getState:() => AppRootStateType) => {
        //@ts-ignore
        let currentValue = getState().counter.count
        localStorage.setItem('counterValue',JSON.stringify(currentValue + 1 ))
        dispatch(incrementCounterAC())
    }
}
export const setValueFromLocalStorageTC = () => {
    return (dispatch:Dispatch ) => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setValueFromLocalStorage(newValue))
        }
    }
}

