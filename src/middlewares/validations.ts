import Joi from 'joi';

const schemeNewUser = Joi.object({
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

export default schemeNewUser;
