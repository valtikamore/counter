import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";



const rootReducer = combineReducers({
    counter:counterReducer
})
export const  store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
export type AppRootStateType = ReturnType<typeof rootReducer>

