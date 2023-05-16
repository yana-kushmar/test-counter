import { combineReducers, legacy_createStore } from "redux";
import {countReducer} from "./CountReducer";

const rootReducer = combineReducers({
        count: countReducer,
}
)

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


