import * as validations from '../middlewares/validations';
// import * as auth from '../middlewares/auth';
import UserLogin from '../interface/UserLogin';

export const login = async (user: UserLogin) => {
  const isValid = validations.schemeLogin.validate(user);
  console.log(isValid);
  return { code: 200, message: user };
};

export const removeWarnLint = () => {};