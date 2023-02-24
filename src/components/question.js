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
          {options.map((o) => (
            <div
              onClick={() => onChangeAnswer(number, o.value)}
              className={`question__option ${o.selected ? 'question__option--selected' : ''}`}
            >
              <input type="checkbox" onChange={(e) => onChangeAnswer(number, o.value)} checked={o.selected} />{o.label}
            </div>
          ))}
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
