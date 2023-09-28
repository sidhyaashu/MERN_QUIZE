import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Main.scss"

const Main = () => {
  const inputRef = useRef(null)

  return (
    <div className="container">
      <h1 className="title text-light">Quize Application</h1>

        <ol>
          <li>You will be asked 10 questions one after another</li>
          <li>10 points is awarded for the correct answer</li>
          <li>Each question has three options. You can choose only one option</li>
          <li>You can review and change answers before submit</li>
          <li>The result will be declared at the end of the quize</li>
        </ol>

        <form id="form">
          <input type="text" placeholder='Username' />

            <NavLink to={"/quiz"} className="link" >
              Start Quize
            </NavLink>
        </form>
      
    </div>
  )
}

export default Main
