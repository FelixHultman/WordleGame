import React, { useState } from 'react';

function GenerateWord({ onGenerateWord }) {
  const [permitDuplicate, setPermitDuplicate] = useState(false);
  const [wordLength, setWordLength] = useState(5);
  const [feedback, setFeedback] = useState('');

  const handleGenerateWord = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      word += alphabet[randomIndex];
    }

    setFeedback('A new word has been generated. You can now make your guess.');
    onGenerateWord(word);
  };

  return (
    <div className='containers'>
      <h1>Wordle Game</h1>
      <div className='options-select'>
        <label>
          <input
            type='checkbox'
            checked={permitDuplicate}
            onChange={() => setPermitDuplicate(!permitDuplicate)}
          />
          Allow Duplicates
        </label>
        <label>
          Word Length:
          <input
            type='number'
            value={wordLength}
            min='4'
            max='6'
            onChange={(e) => setWordLength(parseInt(e.target.value))}
          />
        </label>
        <button onClick={handleGenerateWord}>Generate Word</button>
      </div>
      <div className='feedback-section'>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default GenerateWord;
