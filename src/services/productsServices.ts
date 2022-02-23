import Product from '../interface/Product';
import * as products from '../models/products';
import * as validations from '../middlewares/validations';

export const create = async (product: Product) => {
  const isValidation = validations.schemeProducts.validate(product);

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

export const getAll = async () => {
  const allProducts = await products.getAll();

  return { code: 200, message: allProducts };
};