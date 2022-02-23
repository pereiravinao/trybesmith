import express from 'express';
import * as usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/users', usersController.create);

export default app;
