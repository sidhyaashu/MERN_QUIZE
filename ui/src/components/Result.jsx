import "../styles/Result.scss"
import { NavLink } from 'react-router-dom';
import ResultTable from './ResultTable';

const Result = () => {

  const onRestart=()=>{
    console.log('Restart clicked on')
  }
  
  return (
    <div className="container">
      <h1>Result</h1>
      <div className="flex-box">
        <div className="flex">
          <p>Username:</p>
          <span>Sidhya</span>
        </div>
        <div className="flex">
          <p>Total Quize Points: </p>
          <span>50</span>
        </div>
        <div className="flex">
          <p>Total Questions: </p>
          <span>10</span>
        </div>
        <div className="flex">
          <p>Toatal Attempt: </p>
          <span>03</span>
        </div>
        <div className="flex">
          <p>Total Earne Points: </p>
          <span>30</span>
        </div>
        <div className="flex">
          <p>Quize Result: </p>
          <span>Passed</span>
        </div>

      </div>

      <NavLink className="btn" to="/" onClick={onRestart} >Restart</NavLink>

      <div className="result-table">
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result
