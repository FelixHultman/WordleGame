import React, { useState } from 'react';

function GuessWord({ correctWord }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    console.log('guess submitted:', guess);

    try {
      const response = await fetch('http://localhost:5080/api/guessWord', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({ guess, correctWord }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit guess');
      }

      const feedbackResult = await response.json();
      setFeedback(feedbackResult);

      console.log('Feedback received:', feedbackResult);
    } catch (error) {
      console.error('Error submitting guess:', error);
    }
  };

  return (
    <div className='container'>
      <div className='guess-section'>
        <label htmlFor='guessInput'>Enter your guess:</label>
        <input
          type='text'
          id='guessInput'
          value={guess}
          maxLength={6}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='feedback-section'>
        {feedback &&
          feedback.map((item, index) => (
            <span key={index} style={{ color: item.color }}>
              {item.letter}
            </span>
          ))}
      </div>
    </div>
  );
}

export default GuessWord;
