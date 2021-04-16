import express, { Request, Response } from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import bodyParser from 'body-parser';
import { getData, setData } from './redis';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

type IData = {
  user: string;
  password: string;
};

let data: Array<IData> = [];

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(expressEjsLayouts);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/view', function (req, res) {
  res.locals = {
    title: 'Simple example of REDIS-EJS-NODEJS',
    data: data,
    message: 'This is a message',
  };

  res.send('david');
});

app.post('/save', (req: Request, res: Response) => {
  console.log('Se pidio una peticion', req.body.user, req.body.password);
  data = [...data, { user: req.body.user, password: req.body.password }];

  setData(req.body.user, req.body.password);
  getData();

  res.redirect('/');
});

app.get('/removeAll', (req: Request, res: Response) => {
  data = [];
  res.redirect('/');
});

app.listen(port, () => {
  console.log('listening on *:', port);
});

export default app;
