import express from 'express';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/users', usersController);

export default app;
