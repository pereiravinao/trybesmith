import { Request, Response } from 'express';
import * as productsServices from '../services/productsServices';
import Product from '../interface/Product';

export const create = async (req: Request, res: Response) => {
  const productCreated: Product = req.body;
  const isToken: any = req.headers.authorization;
  const { code, message } = await productsServices.create(isToken, productCreated);
  console.log(code, message);
  
  return res.status(code).json(message);
};

// Retirado do PR do Michael caxias
export const removeWarnLint = () => {};