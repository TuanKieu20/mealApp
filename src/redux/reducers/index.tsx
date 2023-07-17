import { combineReducers } from "redux";

import info from "./mealReducer";


const  reducers = combineReducers({
    mealsInfo: info
});

export default (state:any, action:any)=>reducers(state, action);