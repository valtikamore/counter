

enum ACTION_TYPES {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER'
}

export type ActionsType = ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof resetCounterAC>

 export interface initialState {
    count: number
    maxValue: number
    startValue:number
    errors:'error.set correct value'
}

let initialState = {
    count: 0,
    maxValue: 5,
    startValue:0,
    errors:'error.set correct value'
} as initialState
export const counterReducer = (state = initialState, action: ActionsType) => {
    debugger
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_COUNTER: {
            if(state.count < state.maxValue) {
                return {...state,count : state.count + 1 }
            }
             return state
        }
        case ACTION_TYPES.RESET_COUNTER: {
            return {...state,count: state.count = state.startValue}
        }
        default :
            return state
    }
}
export const incrementCounterAC = () => {
    return {type: 'INCREMENT_COUNTER',error:'error.set correct value'}
}
export const resetCounterAC = () => {
    return {type: 'RESET_COUNTER'}
}

