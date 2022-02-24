import Joi from 'joi';

export const schemeNewUser = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.min': '"username" must be longer than 2 characters',
  }),
  classe: Joi.string().required().min(3).messages({
    'string.min': '"classe" must be longer than 2 characters',
  }),
  level: Joi.number().required().greater(0),
  password: Joi.string().required().min(8).messages({
    'string.min': '"password" must be longer than 7 characters',
  }),
}).strict();

export const schemeLogin = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.min': '"username" must be longer than 2 characters',
  }),
  password: Joi.string().required().min(8).messages({
    'string.min': '"password" must be longer than 7 characters',
  }),
}).strict();

export const schemeProducts = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.min': 'Name must be longer than 2 characters',
  }),
  amount: Joi.string().required().min(3).messages({
    'string.min': 'Amount must be longer than 2 characters',
  }),
}).strict();

export const schemeOrders = Joi.array().items(Joi.number()
  .messages({ 'string.min': 'Products must be an array of numbers',
  }));

interface Product {
  products: Array<number | string>
}

export const schemeOrdersJoi = ({ products }: Product) => {
  console.log({ products });
  if (!products) { return { error: { code: 400, message: 'Products is required' } }; }
  if (!Array.isArray(products)) { 
    return { error: { code: 422, message: 'Products must be an array of numbers' } }; 
  }
  if (products.length === 0) { 
    return { error: { code: 422, message: 'Products can\'t be empty' } }; 
  }
  return { code: 201, message: 'Ok' };
};