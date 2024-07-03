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

const getProductByIdService = async (id: string) => {
  const result = await Product.findOne({ _id: id });

  return result;
};

const updateProductByIdService = async (id: string, productData: object) => {
  const result = Product.updateOne({ _id: id }, productData);
  return result;
};

const deleteProductByIdService = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const searchAProductService = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search regex
  const result = await Product.find({ name: { $regex: regex } }).exec();
  return result;
};

export const ProductService = {
  createProductService,
  getProductsService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
  searchAProductService,
};
