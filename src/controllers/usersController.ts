import { Request, Response } from 'express';
import usersServices from '../services/usersServices';
import UserBody from '../interface/User';

export default function create(req: Request, res: Response) {
  const userCreated: UserBody = req.body;
  const { code, message } = usersServices(userCreated);
  return res.status(code).send(message);
}