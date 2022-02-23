import { Request, Response } from 'express';
import * as loginServices from '../services/loginServices';
import UserLogin from '../interface/UserLogin';

export const login = async (req: Request, res: Response) => {
  const userLogin: UserLogin = req.body;
  const { code, message } = await loginServices.login(userLogin);
  
  return res.status(code).json(message);
};

// Retirado do PR do Michael caxias
export const removeWarnLint = () => {};