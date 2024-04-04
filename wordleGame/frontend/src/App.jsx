import { useState } from 'react';
import './App.css';
import Header from './components/header';
import GuessWord from './components/guessWord';
import GenerateWord from './components/generateWord';

function App() {
  const [correctWord, setCorrectWord] = useState('');
  const [wordLength, setWordLength] = useState(5);
  const [permitDuplicate, setPermitDuplicate] = useState(false);

  const handleGenerateWord = (word) => {
    console.log('Generated word:', word);
    setCorrectWord(word);
  };

  return (
    <>
      <Header />
      <GenerateWord
        onGenerateWord={handleGenerateWord}
        setWordLength={setWordLength}
        wordLength={wordLength}
        permitDuplicate={permitDuplicate}
        setPermitDuplicate={setPermitDuplicate}
      />
      <GuessWord correctWord={correctWord} />
    </>
  );
}

export default App;
