
type incrementCounterActionType = {
    type:'INCREMENT_COUNTER'
}
type decrementCounterActionType = {
    type:'DECREMENT_COUNTER'
}
enum ACTION_TYPES {
    INCREMENT_COUNTER='INCREMENT_COUNTER',
    DECREMENT_COUNTER= 'DECREMENT_COUNTER'
}
export type ActionsType =incrementCounterActionType | decrementCounterActionType

let initialState:number = 0
export const counterReducer = (state=initialState,action:ActionsType) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_COUNTER:{
            return state + 1
        }
        case ACTION_TYPES.DECREMENT_COUNTER:{
            return state - 1
        }
        default : return state
    }
}
export const incrementCounterAC = ():incrementCounterActionType => {
    return {type:'INCREMENT_COUNTER'}
}
export const decrementCounterAC = ():decrementCounterActionType => {
    return {type:'DECREMENT_COUNTER'}
}
export const setCountAC = (startValue:number,maxValue:number):decrementCounterActionType => {
    return {type:'DECREMENT_COUNTER'}
}
