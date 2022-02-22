import UserBody from '../interface/User';
import validations from '../middlewares/validations';

export default function create(userCreated: UserBody) {
  const isValidation = validations.validate(userCreated);
  if (isValidation.error) { 
    const messageError = isValidation.error.details[0].message;
    return { code: 400, message: messageError }; 
  }
  
  return { code: 201, message: userCreated };
}