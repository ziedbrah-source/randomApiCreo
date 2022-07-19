const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/wallets/:wallet', (req, res) => {
  const randomRes = Math.floor(Math.random() * 10);

  res.status(200).json({ coins: randomRes });
});

app.get('/', (req, res) => {
  res.send('WELCOME TO CREOMETRY COMMUNITY CLUSTER');
});

app.listen(port, () => {
  console.log('APP LISTENING on port : ' + port);
});
