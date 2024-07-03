import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductService = async (productData: TProduct) => {
  const product = new Product(productData);
  const result = await product.save();
  return result;
};

const getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

export const ProductService = {
  createProductService,
  getProductsService,
};
