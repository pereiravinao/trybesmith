import * as orders from '../models/orders';
import * as validations from '../middlewares/validations';

interface Product {
  products: Array<number | string>
}

export const create = async (order: Product) => {
  const isValidation = validations.schemeOrdersJoi(order);
  
  if (isValidation.error) {
    const { message } = isValidation.error;
    const code = message.includes('is required') ? 400 : 422;

    const removeQuotes = message.replace(/"/g, '');
    const newMessage = removeQuotes.charAt(0).toUpperCase() + removeQuotes.slice(1);
    
    return { code, message: { error: newMessage } }; 
  }
  const { userId } = await orders.create(1);
  const returnOrder = { userId, ...order };
  return { code: 201, message: { order: returnOrder } };
};

export const getAll = async () => {
  const allOrders = await orders.getAll();

  return { code: 200, message: allOrders };
};