import React from 'react';

import './question.scss';

const Question = ({
  data: {
    label, answer, type, options,
  },
  number,
  showAnswer,
  onChangeAnswer,
}) => {
  let body = <></>;

  switch (type) {
    case 'mcq':
    case 'boolean':
      body = (
        <div className="question__options">
          {options.map((o) => {
            const selectedCorrect = showAnswer && o.selected && answer === o.value;
            const unselectedCorrect = showAnswer && !o.selected && answer === o.value;
            const selectedIncorrect = showAnswer && o.selected && answer !== o.value;
            return (
              <div
                onClick={() => !showAnswer && onChangeAnswer(number, o.value)}
                className={`question__option ${
                  o.selected ? 'question__option--selected' : ''
                } ${selectedCorrect ? 'question__option--correct' : ''} ${
                  selectedIncorrect ? 'question__option--incorrect' : ''
                } ${unselectedCorrect ? 'question__option--answer' : ''}`}
              >
                <input
                  type="checkbox"
                  disabled={showAnswer}
                  onChange={() => !showAnswer && onChangeAnswer(number, o.value)}
                  checked={o.selected}
                />
                {o.label}
              </div>
            );
          })}
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="question__container">
      <p className="question__label">{label}</p>
      {body}
    </div>
  );
};

export default Question;
