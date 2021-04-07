import express from 'express';
import { createServer } from 'http';

const app = express();
const http = createServer(app);

app.get('/', (req, res) => {
  res.send('Hello world redis');
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});
