import { QuizHook } from "../contexts/QuizContext";
import NumOfQuestions from "./NumOfQuestions";

function StartScreen() {
  const { originalQuestions, numQuestions, dispatch } = QuizHook();

  function handleDifficulty(e) {
    const questionsFiltered = originalQuestions
      .map((q) => {
        if (q.points === +e.target.value) return q;
        else return "";
      })
      .filter((q) => q !== "");

    dispatch({
      type: "difficulty",
      payload: e.target.value === "all" ? originalQuestions : questionsFiltered,
    });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <div className="filter">
        <NumOfQuestions />
        <label for="difficulty">Difficulty</label>
        <select id="difficulty" onChange={handleDifficulty}>
          <option value={"all"}>All</option>
          <option value={10}>Easy</option>
          <option value={20}>Medium</option>
          <option value={30}>Hard</option>
        </select>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
