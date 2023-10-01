import *as Action from "../redux/q_reducers"

const moveNextQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.moveNextQ())
    } catch (error) {
        console.log(error)
    }
}
const movePrevQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.movePrevQ())
    } catch (error) {
        console.log(error)
    }
}

export default {moveNextQuestion,movePrevQuestion}