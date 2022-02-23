import { Request, Response } from 'express';
import * as usersServices from '../services/usersServices';
import UserBody from '../interface/User';
import Validate from '../interface/Validate';

export const create = async (req: Request, res: Response) => {
  const userCreated: UserBody = req.body;
  const { code, message }: Validate = await usersServices.create(userCreated);
  
  return res.status(code).json(message);
};

// Retirado do PR do Michael caxias
export const removeWarnLint = () => {};