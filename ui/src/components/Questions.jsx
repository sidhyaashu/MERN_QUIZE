import { useEffect, useState } from "react";
import data from "../data/data"
import "../styles/Questions.scss"


const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const onSelected = () => {
    setChecked(true);
    console.log("Radio button clicked");
  };

  const question = data[0]
  useEffect(()=>{
    console.log(question)
  })
  return (
    <div className="questions">
      <h3>{question.id+"." +" "+question.question}</h3>

      <ul key={question.id} >
        {
            question?.options?.map((q,i)=>(
                <li key={i} >
                <input
                    type="radio"
                    name="options"
                    // value={true}
                    id={`q${i}-question`}
                    // onChange={onSelected()}
                />
                <label htmlFor={`q${i}-question`} >{q}</label>
                <div className="check checked"></div>
                </li>
            ))
        }

      </ul>
    </div>
  );
};

export default Questions;
