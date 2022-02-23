import jwt, { SignOptions } from 'jsonwebtoken';

const secretJwt = process.env.JWT_SECRET || 'teste123';

export const create = (username: string) => {
  const jwtConfig: SignOptions = {
    expiresIn: '2h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ username }, secretJwt, jwtConfig);
  return token;
};

export const verify = (token: string) => {
  try {
    const decode = jwt.verify(token, secretJwt);
    return decode;
  } catch (err) {
    const error = new Error();
    // error.message = 'Expired or invalid token';
    // error.code = '401';
    return error;
  }
};

// export const authentication = (token: string) => {
//   if (!token) { return { code: 401, message: 'Token not found' }; }

//   const response = verify(token);
//   if (response.code === '401') { return { code: 401, message: 'Expired or invalid token' }; }

//   return response.email;
// };