import '../styles/Quize.scss'
import Questions from './Questions'


const Quize = () => {

  const onNext = ()=>{
    console.log('next')
  }

  const onPrev = ()=>{
    console.log('prev')
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
