const express = require('express');
const app = express();
const PORT = process.env.PORT || 5080;

app.use(express.json());

app.post('/api/game', (req, res) => {
  res.send('Game logic route');
});

app.post('/api/highscore', (req, res) => {
  res.send('Highscore submission route');
});

app.listen(PORT, () => {
  console.log(`Server plugged in at ${PORT}`);
});
