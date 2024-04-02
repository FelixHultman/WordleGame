import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 5080;

app.use(express.json());
app.use(cors());

import fetchWordList from './fetchWordList.js';
import WordFeedback from './wordFeedback.js';

app.get('/api/wordList', async (req, res) => {
  try {
    const wordList = await fetchWordList();
    res.json({ wordList });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch word list' });
  }
});

app.post('/api/guessWord', (req, res) => {
  const { guess, correctWord } = req.body;

  if (!guess || !correctWord) {
    return res.status(400).json({ error: 'Invalid guess or correct word' });
  }

  const feedback = WordFeedback(guess, correctWord);

  res.json(feedback);
});

app.post('/api/highscore', (req, res) => {
  res.send('Highscore submission route');
});

app.listen(PORT, () => {});
