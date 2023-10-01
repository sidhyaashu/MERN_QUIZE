import { useEffect } from 'react'
import '../styles/Quize.scss'
import Questions from './Questions'
import { useSelector ,useDispatch} from "react-redux"
import shift from '../hooks/shiftingQuestion'

const Quize = () => {
  const {queue,trace} = useSelector(state=>state.questions)
  const dispatch = useDispatch()


  useEffect(()=>{
    console.log(queue.length)
  })

  const onNext = ()=>{
    if(trace< queue.length-1){
      dispatch(shift.moveNextQuestion())
    }
  }

  const onPrev = ()=>{
    if(trace>0){
      dispatch(shift.movePrevQuestion())
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quizes</h1>

      {/* display questions */}
      <Questions/>

      <div className="grid">
        <button className='prev'  onClick={onPrev} >Prev</button>
        <button className='next'  onClick={onNext} >Next</button>
      </div>

    </div>
  )
}

export default Quize
