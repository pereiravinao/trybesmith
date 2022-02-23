import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import UserBody from '../interface/User';

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

export const removeWarnLint = () => {};
