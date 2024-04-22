import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.listen(3000, (req, res) => {
  console.log(`Listening on port 3000`);
});
