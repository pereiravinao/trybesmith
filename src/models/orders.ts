import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const create = async (user: number) => {
  const query = `
  INSERT INTO Trybesmith.Orders
  (userId) VALUES
  (?)`;
  const values = [user];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  
  const newUser = { id: data.insertId, userId: user };
  return newUser;
};

export const getAll = async () => {
  const query = `
  SELECT * FROM Trybesmith.Orders`;
  const [data] = await connection.execute<ResultSetHeader>(query);
  
  return data;
};
