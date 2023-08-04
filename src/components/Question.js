import { QuizHook } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { question } = QuizHook();

  return (
    <div>
      <h4>{question}</h4>
      <Options />
    </div>
  );
}

export default Question;
