import { NextFunction, Request, Response } from 'express';
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

export const verify = async (token: string) => {
  try {
    const decoded = await jwt.verify(token, secretJwt) as TokenInterface;
    return decoded;
  } catch (err) {
    const error: TokenError = {
      message: 'Expired or invalid token',
      code: '401',
    };

    return error;
  }
};

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (!token) { return res.status(401).json({ error: 'Token not found' }); }

  const response = await verify(token);
  
  if (Object.keys(response).length < 3) { 
    return res.status(401).json({ error: 'Invalid token' }); 
  }

  next();
};