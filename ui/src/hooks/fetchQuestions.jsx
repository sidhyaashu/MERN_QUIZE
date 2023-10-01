/**Fetch question hook to fetch api data and set value to store */
import { useState, useEffect } from "react";
import data from "../data/data";
import { useDispatch } from "react-redux";

/**Redux action */
import * as Action from "../redux/q_reducers";

const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setData] = useState({
    Loading: false,
    apiData: [],
    serverError: false,
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      Loading: true,
    }));

    /**async function fetch backend data */
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setData((prev) => ({ ...prev, apiData: question, Loading: false }));

          /**Dispatch an action  */
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No questions awailable");
        }
      } catch (error) {
        setData((prev) => ({ ...prev, Loading: false, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setData];
};

export default useFetchQuestion;
