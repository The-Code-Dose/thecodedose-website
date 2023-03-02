import React from 'react';

import './question.scss';

const Question = ({
  data: {
    label,
    answer,
    type,
    options,
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
            const isCorrect = showAnswer && answer === o.value;
            const isIncorrect = showAnswer && o.selected && answer !== o.value;
            return (
              <div
                onClick={() => onChangeAnswer(number, o.value)}
                className={`question__option ${o.selected ? 'question__option--selected' : ''} ${isCorrect ? 'question__option--correct' : ''} ${isIncorrect ? 'question__option--incorrect' : ''}`}
              >
                <input type="checkbox" onChange={(e) => onChangeAnswer(number, o.value)} checked={o.selected} />{o.label}
              </div>
            );
          })}
        </div>
      );
      break;
    default: break;
  }

  return (
    <div className="question__container">
      <p className="question__label">{label}</p>
      {body}
    </div>
  );
};

export default Question;
