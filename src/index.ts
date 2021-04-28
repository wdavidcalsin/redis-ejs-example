import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connect from './connect';
import routes from './routes';
import expressEjsLayouts from 'express-ejs-layouts';

const app: Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(expressEjsLayouts);

app.get('/', (req: Request, res: Response) => res.redirect('/view'));

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`),
);

const db = `${process.env.MONGO_URL}`;

connect({ db });
routes({ app });
