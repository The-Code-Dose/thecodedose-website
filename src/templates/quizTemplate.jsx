import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Question from '../components/question';
import Button from '../components/button';
import './quizTemplate.scss';

export default function QuizTemplate({ data }) {
  const { site, markdownRemark } = data;
  const {
    siteMetadata: { title: siteTitle },
  } = site;
  const {
    frontmatter: {
      title, description, thumbnail, path, questions: _questions,
    },
  } = markdownRemark;

  const processedQuestions = _questions.map((q) => {
    if (q.type === 'mcq') {
      return {
        ...q,
        options: q.options.map((o, i) => ({
          label: o,
          value: i,
          selected: false,
        })),
      };
    }
    if (q.type === 'boolean') {
      return {
        ...q,
        options: [
          { label: 'True', value: 1, selected: false },
          { label: 'False', value: 0, selected: false },
        ],
      };
    }
  });

  const [questions, setQuestions] = useState(processedQuestions);
  const [score, setScore] = useState(-1);

  const onChangeAnswer = (i, value) => {
    const updatedQues = [...questions];
    updatedQues[i].options = updatedQues[i].options.map((o) => {
      if (o.value === value) {
        return { ...o, selected: !o.selected };
      }
      return { ...o, selected: false };
    });
    setQuestions(updatedQues);
  };

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q) => {
      q.options.forEach(o => {
        if (o.selected && q.answer === o.value) {
          s += 1;
        }
      });
    });
    setScore(s);
  };

  const retakeQuiz = () => {
    setScore(-1);
    setQuestions(processedQuestions);
  }

  const scoreElement = score > -1 ? (
    <div className="quiz__score-container">
      <h2 className="quiz__score-heading">Score</h2>
      <span className="quiz__score-count">{score}</span>
      <span className="quiz__score-total">/{questions.length}</span>
    </div>
  ) : null;

  const showAnswer = score > -1;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} | ${siteTitle}`}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thecodedose.com${path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thecodedose" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <div className="quiz__container">
        <div className="quiz__title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <section className="quiz__questions">
          {scoreElement}
          {questions.map((question, i) => (
            <Question
              data={question}
              onChangeAnswer={onChangeAnswer}
              number={i}
              showAnswer={showAnswer}
            />
          ))}
          {scoreElement}
          <Button
            text={showAnswer ? 'Retake Quiz' : 'Check score'}
            variant="yellow"
            onClick={showAnswer ? retakeQuiz : calculateScore}
          />
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($pagePath: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      frontmatter {
        path
        title
        description
        questions {
          label
          type
          options
          answer
        }
      }
    }
  }
`;
