import { combineReducers } from "redux"
import cartReducer from "./reducer"

export const rooted = combineReducers(
    {
        cartReducer
    })