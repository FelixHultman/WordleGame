import React, { useState } from 'react';

function GuessWord({ correctWord }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log('guess submitted:', guess);
    const feedbackResult = wordFeedback(guess, correctWord);
    setFeedback(feedbackResult);
  };

  return (
    <div className='container'>
      <div className='guess-section'>
        <label htmlFor='guessInput'>Enter your guess:</label>
        <input
          type='text'
          id='guessInput'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='feedback-section'>
        {feedback &&
          feedback.map((item, index) => (
            <p key={index}>
              <strong>Letter:</strong> {item.letter}, <strong>Result:</strong>{' '}
              {item.result}
            </p>
          ))}
      </div>
    </div>
  );
}

export default GuessWord;
