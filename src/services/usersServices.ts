import UserBody from '../interface/User';
import validations from '../middlewares/validations';
import * as auth from '../middlewares/auth';

export const create = async (userCreated: UserBody) => {
  const isValidation = validations.validate(userCreated);
  
  if (isValidation.error) { 
    const { message } = isValidation.error.details[0];
    const code = message.includes('is required') ? 400 : 422;    
    return { code, message }; 
  }
  const isAuth = auth.create(userCreated.username);
  
  return { code: 201, message: isAuth };
};

export const removeWarnLint = () => {};