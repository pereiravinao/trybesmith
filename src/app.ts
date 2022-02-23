import express from 'express';
import * as usersController from './controllers/usersController';
import * as LoginController from './controllers/LoginController';
import * as productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/users', usersController.create);
app.post('/login', LoginController.login);
app.post('/products', productsController.create);

export default app;
