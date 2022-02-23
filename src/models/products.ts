import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interface/Product';

export const create = async (product: Product) => {
  const { name, amount } = product;
  const query = `
  INSERT INTO Trybesmith.Products
  (name, amount) VALUES
  (?, ?)`;
  const values = [name, amount];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  
  const newUser = { id: data.insertId, name, amount };
  return newUser;
};

export const removeWarnLint = () => {};
