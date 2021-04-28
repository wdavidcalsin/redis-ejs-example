import { Request, Response } from 'express';

import { TRoutesInput } from '../types/routes.type';
import UserController from '../controllers/user.controller';
import { IData } from '../types/user.type';

const FirtsData = async () => {
  return await UserController.AllUser();
};

export default async ({ app }: TRoutesInput) => {
  let data: Array<IData> = [];

  data = await FirtsData();

  const click = () => {
    console.log('click');
  };

  app.get('/view', function (req, res) {
    res.locals = {
      title: 'Simple example of REDIS-EJS-NODEJS',
      data: data,
      functioClick: click,
    };

    res.render('layout');
  });

  app.get('/removeAll', (req: Request, res: Response) => {
    data = [];
    res.redirect('/');
  });

  app.post('/removeitem:id', async (req: Request, res: Response) => {
    let { id } = req.params;

    let doc = await UserController.RemoveUser(id);

    console.log('deleting: ' + JSON.stringify(doc));
    res.send('-- Find --');
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

  app.get('/api/alldata', async (req, res) => {
    console.log('Se pidio una peticion allData');

    //  await UserController.AllUser();
    console.log(await UserController.AllUser());
  });
};
