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
