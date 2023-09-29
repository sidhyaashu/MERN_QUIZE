import { combineReducers,configureStore } from "@reduxjs/toolkit";


/**Call reducer */

import questionReducer from "./q_reducers";
import  resultReducer  from "./r_reducers";


const rootReducer = combineReducers({
    questions:questionReducer,
    result:resultReducer,
})

/* create store with reducer */
export default configureStore({reducer:rootReducer})