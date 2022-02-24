import { Request, Response } from 'express';
import * as ordersServices from '../services/ordersServices';

interface Product {
  products: Array<number | string>
}

export const create = async (req: Request, res: Response) => {
  const order: Product = req.body;
  const { code, message } = await ordersServices.create(order);
  
  return res.status(code).json(message);
};

// Retirado do PR do Michael caxias
export const removeWarnLint = () => {};