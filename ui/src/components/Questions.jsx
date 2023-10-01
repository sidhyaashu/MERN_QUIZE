import {  useEffect, useState } from "react";
import "../styles/Questions.scss";
import useFetchQuestion from "../hooks/fetchQuestions";
import { useSelector } from "react-redux";

const Questions = () => {
  /** fetch data by custom hook */
  const [{ Loading, apiData, serverError }] = useFetchQuestion();

  
  /**Get data from store */
  const question = useSelector(state=>state.questions.queue[state.questions.trace])
  const trace = useSelector(state=>state.questions.trace)

  /**contol radio button */
  const [checked, setChecked] = useState(undefined);

  useEffect(()=>{
    // console.log(question)
    console.log(`trace count ${trace}`)
  })

  const onSelected = () => {
    setChecked(true);
    // console.log("Radio button clicked");
  };


  if(Loading) {return <h3>Loading</h3>}
  if(serverError) {return <h3>{serverError || "Unknowen Error"}</h3>}


  return (
    <div className="questions">
      <h3>{question?.id + "." + trace+" " + question?.question}</h3>

      <ul key={question?.id}>
        {question?.options?.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              value={false}
              id={`q${i}-question`}
              // onChange={onSelected()}
            />
            <label htmlFor={`q${i}-question`}>{q}</label>
            <div className="check checked"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
