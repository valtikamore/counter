enum ACTION_TYPES {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER',
    SET_COUNT = 'SET_COUNT',
    SET_MAX_VALUE='SET_MAX_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_ERROR='SET_ERROR'
}

export type ActionsType =
    ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof setCounterAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setErrorAC>

export interface initialState {
    count: number
    maxValue: number
    minValue: number
    error: string
    startText: true
    disableButton: boolean
}

let initialState = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    error: `enter values and press 'set'`,
    startText: true,
    disableButton: true
} as initialState

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
            return {...state,error:action.errorText}
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
export const setErrorAC = (errorText:string) => ({type:'SET_ERROR',errorText}as const )

