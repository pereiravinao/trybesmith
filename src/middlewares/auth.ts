import jwt, { SignOptions } from 'jsonwebtoken';

const secretJwt = process.env.JWT_SECRET || 'teste123';

interface TokenInterface {
  data: {
    username: string;
    password: string;
  };
}

interface TokenError {
  message: string;
  code: string;

}

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
    const decoded = jwt.verify(token, secretJwt) as TokenInterface;
    return decoded;
  } catch (err) {
    const error: TokenError = {
      message: 'Expired or invalid token',
      code: '401',
    };
    return error;
  }
};

// export const authentication = (token: string) => {
//   if (!token) { return { code: 401, message: 'Token not found' }; }

//   const response = verify(token);
//   if (response.code === '401') { return { code: 401, message: 'Expired or invalid token' }; }

//   return response.email;
// };