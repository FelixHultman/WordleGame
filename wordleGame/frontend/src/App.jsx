import { useState } from 'react';
import './App.css';
import Header from './components/header';
import GuessWord from './components/guessWord';
import GenerateWord from './components/generateWord';
import './index.css';

function App() {
  const [correctWord, setCorrectWord] = useState('');

  const handleGenerateWord = (word) => {
    console.log('Generated word:', word);
    setCorrectWord(word);
  };

  return (
    <>
      <Header />
      <GenerateWord onGenerateWord={handleGenerateWord} />
      <GuessWord correctWord={correctWord} />
    </>
  );
}

export default App;
