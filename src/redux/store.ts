import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    counter:counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const  store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)
type AppStoreType = typeof store

