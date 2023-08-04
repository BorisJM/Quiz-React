import { QuizHook } from "../contexts/QuizContext";

function Options() {
  const { questions, index, dispatch, answer } = QuizHook();
  const hasAnswered = answer !== null;
  const question = questions[index];
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={option}
          className={`btn btn-option ${
            hasAnswered ? (index === answer ? "answer" : "") : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
