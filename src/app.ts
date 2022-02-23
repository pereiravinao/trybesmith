import express from 'express';
import * as usersController from './controllers/usersController';
import * as LoginController from './controllers/LoginController';
import * as productsController from './controllers/productsController';
import * as auth from './middlewares/auth';

const app = express();

app.use(express.json());

app.post('/users', usersController.create);
app.post('/login', LoginController.login);

app.route('/products')
  .post(auth.authentication, productsController.create)
  .get(auth.authentication, productsController.getAll);

export default app;
