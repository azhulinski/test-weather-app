import {combineReducers} from "@reduxjs/toolkit";
import {citiesReducer} from "./reducers/citiesReducer";

const rootReducer = combineReducers({
    citiesReducer,
});

export default rootReducer;