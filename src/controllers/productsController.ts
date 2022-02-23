import { Request, Response } from 'express';
import * as productsServices from '../services/productsServices';
import Product from '../interface/Product';

export const create = async (req: Request, res: Response) => {
  const productCreated: Product = req.body;
  const { code, message } = await productsServices.create(productCreated);
  
  return res.status(code).json(message);
};

export const getAll = async (req: Request, res: Response) => {
  const { code, message } = await productsServices.getAll();
  return res.status(code).json(message);
};