import React from "react";

type Props = {
  question?: string;
  answers: string[] | any;
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNr,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        {questionNr}
        Question: {question} / {totalQuestions}
      </p>
      <p>{{ question }}</p>
      <div>
        {answers.map((answer: string) => {
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span>{{ answer }}</span>
            </button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
