type incrementCounterActionType = {
    type: 'INCREMENT_COUNTER'
}
type resetCounterActionType = {
    type: 'RESET_COUNTER'
}

enum ACTION_TYPES {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER'
}

export type ActionsType = incrementCounterActionType | resetCounterActionType

interface initialState {
    count: number
    maxValue: number
}

let initialState = {
    count: 0,
    maxValue: 5
} as initialState
export const counterReducer = (state = initialState, action: ActionsType) => {
    debugger
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_COUNTER: {

            return state.count + 1


        }
        case ACTION_TYPES.RESET_COUNTER: {
            return state.count = state.maxValue
        }
        default :
            return state
    }
}
export const incrementCounterAC = (): incrementCounterActionType => {
    return {type: 'INCREMENT_COUNTER'}
}
export const resetCounterAC = (): resetCounterActionType => {
    return {type: 'RESET_COUNTER'}
}

