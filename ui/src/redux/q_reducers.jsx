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
        },
        moveNextQ:(state)=>{
            state.trace++
        },
        movePrevQ:(state)=>{
            state.trace--
        }
    }
})

export const { startExamAction,moveNextQ,movePrevQ } = questionReducer.actions
export default questionReducer.reducer


// return {
//     ...state,
//     queue:action.payload
// }