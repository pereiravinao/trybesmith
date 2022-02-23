import { Request, Response } from 'express';
import * as usersServices from '../services/usersServices';
import UserBody from '../interface/User';

export const create = async (req: Request, res: Response) => {
  const userCreated: UserBody = req.body;
  const { code, message } = await usersServices.create(userCreated);
  console.log(code, message);
  
  return res.status(code).json(message);
};

// Retirado do PR do Michael caxias
export const removeWarnLint = () => {};