import React from 'react';
import QuizComponent from './component/QuizComponent';
import QuizData from './component/quizQuestion.json';

const App = () => {
  return (
    <div>
      <QuizComponent quizData = {QuizData} />
    </div>
  );
};

export default App;
