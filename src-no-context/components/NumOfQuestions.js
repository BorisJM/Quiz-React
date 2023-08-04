import { useRef, useState } from "react";
import InvalidInput from "./InvalidInput";

function NumOfQuestions({ dispatch, questions }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const ref = useRef(null);
  function handleNumOfQuestions(e) {
    setErrorMessage(false);
    if (+e.target.value > questions.length || +e.target.value <= 0) {
      if (e.target.value === "") {
        dispatch({ type: "numQuestions", payload: questions.length });
        return;
      }
      ref.current.value = "";

      setErrorMessage(true);
      dispatch({ type: "numQuestions", payload: questions.length });
      return;
    }
    dispatch({
      type: "numQuestions",
      payload: e.target.value !== "" ? +e.target.value : questions.length,
    });
  }

  return (
    <>
      <div>
        <label for="num">Number of Questions</label>
        <input
          placeholder="Enter number of questions..."
          ref={ref}
          onChange={handleNumOfQuestions}
          id="num"
          type="number"
          min={1}
          max={questions.length}
        />
      </div>
      {errorMessage && <InvalidInput />}
    </>
  );
}

export default NumOfQuestions;
