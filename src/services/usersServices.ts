import UserBody from '../interface/User';
import validations from '../middlewares/validations';
import * as auth from '../middlewares/auth';

// export default create = async (userCreated: UserBody) => {
export default function create(userCreated: UserBody) {
  const isValidation = validations.validate(userCreated);
  if (isValidation.error) { 
    const messageError = isValidation.error.details[0].message;
    return { code: 400, message: messageError }; 
  }
  const isAuth = auth.create(userCreated.username);
  
  return { code: 201, message: isAuth };
}