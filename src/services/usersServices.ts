import UserBody from '../interface/User';
import * as users from '../models/users';
import * as validations from '../middlewares/validations';
import * as auth from '../middlewares/auth';

export const create = async (userCreated: UserBody) => {
  const isValidation = validations.schemeNewUser.validate(userCreated);
  
  if (isValidation.error) { 
    const { message } = isValidation.error.details[0];
    const code = message.includes('is required') ? 400 : 422;

    // Logica para arrumar a string retirada do pR do Michael
    const removeQuotes = message.replace(/"/g, '');
    const newMessage = removeQuotes.charAt(0).toUpperCase() + removeQuotes.slice(1);
    
    return { code, message: { error: newMessage } }; 
  }
  const isAuth = auth.create(userCreated.username);
  await users.createUser(userCreated);
  return { code: 201, message: { token: isAuth } };
};

export const removeWarnLint = () => {};