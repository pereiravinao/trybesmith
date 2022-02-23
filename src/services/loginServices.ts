import * as validations from '../middlewares/validations';
import * as auth from '../middlewares/auth';
import UserLogin from '../interface/UserLogin';

export const login = async (user: UserLogin) => {
  const isValid = validations.schemeLogin.validate(user);

  if (isValid.error) { 
    const { message } = isValid.error.details[0];
    const code = message.includes('is required') ? 400 : 401;

    const removeQuotes = message.replace(/"/g, '');
    const newMessage = removeQuotes.charAt(0).toUpperCase() + removeQuotes.slice(1);
    return { code, message: { error: newMessage } }; 
  }

  const isAuth = auth.create(user.password);
  
  return { code: 200, message: { token: isAuth } };
};

export const removeWarnLint = () => {};