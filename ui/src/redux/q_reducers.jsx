import { createSlice } from "@reduxjs/toolkit";

const questionReducer = createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },
    reducers:{
        startExamAction:(state,action)=>{
            state.queue=action.payload
        }
    }
})

export const { startExamAction } = questionReducer.actions
export default questionReducer.reducer


// return {
//     ...state,
//     queue:action.payload
// }