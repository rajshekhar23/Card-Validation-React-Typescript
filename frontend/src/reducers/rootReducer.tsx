import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";

const rootReducer = combineReducers({
    balance: balanceReducer
});

export type RootType = ReturnType<typeof rootReducer>;

export default rootReducer;
