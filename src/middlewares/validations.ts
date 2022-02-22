import Joi from 'joi';

const newUser = Joi.object({
  username: Joi.string()
    .required()
    .$.min(3).rule({ message: 'Username must be longer than 2 characters' }),

  password: Joi.string()
    .required()
    .$.min(8).max(10).rule({ message: 'Password must be longer than 7 characters' }),

  classe: Joi.string()
    .required()
    .$.min(2).rule({ message: 'Classe must be longer than 2 characters' }),

  level: Joi.number()
    .required()
    .$.min(1).rule({ message: 'Level must be greater than 0' }),

  image: Joi.string().allow(),
});

export default newUser;
