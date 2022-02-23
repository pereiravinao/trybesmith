import express from 'express';
import * as usersController from './controllers/usersController';
import * as LoginController from './controllers/LoginController';

const app = express();

app.use(express.json());

app.post('/users', usersController.create);
app.post('/login', LoginController.login);

export default app;
