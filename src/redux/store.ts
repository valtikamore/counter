import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(
    rootReducer,loadState(), composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)

store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    })
})
export type AppRootStateType = ReturnType<typeof rootReducer>

