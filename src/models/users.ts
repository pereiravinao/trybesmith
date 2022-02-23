import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import UserBody from '../interface/User';
import UserLogin from '../interface/UserLogin';

export const createUser = async (userCreated: UserBody) => {
  const { username, classe, level, password } = userCreated;
  const query = `
  INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES
  (?, ?, ?, ?)`;
  const values = [username, classe, level, password];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  
  const newUser = { id: data.insertId, username, classe, level, password };
  return newUser;
};

export const getByLogin = async (login: UserLogin) => {
  const { username, password } = login;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? LIMIT 1';
  const values = [username, password];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  
  return data;
};

export const removeWarnLint = () => {};
