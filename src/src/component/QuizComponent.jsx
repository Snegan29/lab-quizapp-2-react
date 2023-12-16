// QuizComponent.jsx

import React, { Component } from 'react';

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
    };
  }

  handleOptionSelect = (selectedAnswer) => {
    this.setState({ selectedOption: selectedAnswer });
  };

  handleNextQuestion = () => {
    const { quizData } = this.props;
    const { currentQuestionIndex, selectedOption, score } = this.state;

    if (selectedOption === quizData[currentQuestionIndex].answer) {
      this.setState({ score: score + 1 });
    }

    this.setState({
      selectedOption: null,
      currentQuestionIndex: currentQuestionIndex + 1,
    });
  };

  handlePreviousQuestion = () => {
    const { currentQuestionIndex } = this.state;

    if (currentQuestionIndex > 0) {
      this.setState({ selectedOption: null, currentQuestionIndex: currentQuestionIndex - 1 });
    }
  };

  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit the quiz ?')) {
      location.reload();
    }
  }

  handleRestart = () => {
    if (window.confirm('Do you want to play again ?')) {
      location.reload();
    }
  }

  render() {
    const { quizData } = this.props;
    const { currentQuestionIndex, selectedOption, score } = this.state;

    return (
      <div className="body">
        <div className="content">
      <h1>React Quiz App</h1>

          <div>
            {currentQuestionIndex < quizData.length ? (
              <div>
                <h2>{quizData[currentQuestionIndex].question}</h2>
                <div className='answerBtns'>
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button
                      id='answers'
                      key={option}
                      onClick={() => this.handleOptionSelect(quizData[currentQuestionIndex][`option${option}`])}
                      className={selectedOption === quizData[currentQuestionIndex][`option${option}`] ? 'selected' : ''}
                      disabled={selectedOption !== null} 
                    >
                      {quizData[currentQuestionIndex][`option${option}`]}
                    </button>
                  ))}
                </div>
                <p>Your Score: {score}</p>
                <button className='previous' onClick={this.handlePreviousQuestion} disabled={currentQuestionIndex === 0}> Previous </button>
                <button className='next' onClick={this.handleNextQuestion}> Next </button>
                <button className='quit' onClick={this.handleQuit} > Quit </button>
              </div>
            ) : (
              <div>
                <h3>Quiz Completed</h3>
                <p>Your Final Score: {score}</p>
                <button className='restart' onClick={this.handleRestart}>Restart</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
