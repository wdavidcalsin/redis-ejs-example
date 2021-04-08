import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(expressEjsLayouts);

app.get('/', function (req, res) {
  res.locals = {
    title: 'Ejemplo sensillo de EJS-NODEJS',
    message: 'This is a message',
  };
  res.render('layout');
});

app.listen(port, () => {
  console.log('listening on *:', port);
});

export default app;
