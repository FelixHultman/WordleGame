import React, { useState } from 'react';

function GenerateWord({ onGenerateWord, wordLength, permitDuplicate }) {
  const [feedback, setFeedback] = useState('');
  const [wordGenerated, setWordGenerated] = useState(false);

  const removeWordsWithDuplicates = (wordList) => {
    return wordList.filter((word) => {
      const charSet = new Set(word);
      return charSet.size === word.length;
    });
  };

  const filterWordsByLength = (wordList, length) => {
    return wordList.filter((word) => word.length === length);
  };

  const handleGenerateWord = async () => {
    try {
      const response = await fetch('http://localhost:5080/api/wordList');
      if (!response.ok) {
        throw new Error('Failed to generate word');
      }
      const data = await response.json();
      let wordList = data.wordList;
      console.log('Words:', wordList);

      if (!permitDuplicate) {
        wordList = removeWordsWithDuplicates(wordList);
      }

      wordList = filterWordsByLength(wordList, wordLength);

      if (wordList.length === 0) {
        throw new Error('No word found matching the length');
      }

      const randomIndex = Math.floor(Math.random() * wordList.length);
      const randomWord = wordList[randomIndex];

      setFeedback(
        'A New word has been Generated you can now make your guess to start the game.'
      );
      onGenerateWord(randomWord);
      setWordGenerated(true);
    } catch (error) {
      console.error('Error generating word:', error);
      setFeedback('Failed to generate word. Please try again');
    }
  };

  return (
    <div className=' flex flex-col items-center justify-center '>
      <div
        className={`flex flex-col items-center justify-center ${
          wordGenerated ? 'hidden' : ''
        }`}
      >
        <h1 className='text-green-500 font-bold'>Wordle Game</h1>
        <p>
          Choose if you want to allow duplicates and the length of the word you
          want
        </p>
        <label className=' p-4 '>
          <input
            type='checkbox'
            checked={permitDuplicate}
            onChange={() => setPermitDuplicate(!permitDuplicate)}
          />
          Allow Duplicates
        </label>
        <label className=' p-4'>
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
      <div>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default GenerateWord;
