import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import connect from './connect';
import routes from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) => res.redirect('/view'));

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`),
);

const db = `${process.env.MONGO_URL}`;

connect({ db });
routes({ app });
