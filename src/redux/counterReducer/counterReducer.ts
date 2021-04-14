enum ACTION_TYPES {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER',
    SET_COUNT = 'SET_COUNT'
}

export type ActionsType =
    ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof setCounterAC>

export interface initialState {
    count: number
    maxValue: number
    minValue: number
    error: 'error.set correct value'
    startText: true
    disableButton: boolean
}

let initialState = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    error: 'error.set correct value',
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
            return {...state, maxValue: action.maxValue, minValue: action.minValue}
        }
        default :
            return state
    }
}
export const incrementCounterAC = () => (
    {type: 'INCREMENT_COUNTER'} as const)
export const resetCounterAC = () => ({type: 'RESET_COUNTER'} as const)
export const setCounterAC = (maxValue: number, minValue: number) => ({type: 'SET_COUNT', maxValue, minValue} as const)

