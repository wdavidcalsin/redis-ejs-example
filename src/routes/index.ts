import { Request, Response } from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

import { TRoutesInput } from '../types/routes.type';
import UserController from '../controllers/user.controller';
import { IData } from '../types/user.type';
import path from 'path';

export default ({ app }: TRoutesInput) => {
  let data: Array<IData> = [];

  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  app.use(expressEjsLayouts);

  app.get('/view', function (req, res) {
    res.locals = {
      title: 'Simple example of REDIS-EJS-NODEJS',
      data: data,
      message: 'This is a message',
    };

    res.render('layout');
  });

  app.get('/removeAll', (req: Request, res: Response) => {
    data = [];
    res.redirect('/');
  });

  app.post('/api/user', async (req, res) => {
    console.log('Se pidio una peticion', req.body.user, req.body.password);

    await UserController.CreateUser({
      user: req.body.user,
      password: req.body.password,
    });

    data = [...data, { user: req.body.user, password: req.body.password }];

    res.redirect('/');
  });
};
