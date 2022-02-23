import Product from '../interface/Product';
import * as products from '../models/products';
import * as validations from '../middlewares/validations';
import * as auth from '../middlewares/auth';

export const create = async (token: string, product: Product) => {
  const isValidation = validations.schemeProducts.validate(product);
  const isToken: any = await auth.verify(token);
  console.log(isToken);
  
  if (!token) {    
    return { code: 401, message: { error: 'Token not found' } };
  }
  
  if (isToken.code) {    
    return { code: 401, message: { error: 'Invalid token' } };
  }
  
  if (isValidation.error) {
    const { message } = isValidation.error.details[0];
    const code = message.includes('is required') ? 400 : 422;

    const removeQuotes = message.replace(/"/g, '');
    const newMessage = removeQuotes.charAt(0).toUpperCase() + removeQuotes.slice(1);
    
    return { code, message: { error: newMessage } }; 
  }
  const newProduct = await products.create(product);

  return { code: 201, message: { item: newProduct } };
};

export const removeWarnLint = () => {};