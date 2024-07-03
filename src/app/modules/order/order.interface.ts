import { Model, Types } from 'mongoose';
import { ProductModel } from '../product/product.interface';

export type TOrder = {
  email: string;
  productId: Types.ObjectId | ProductModel;
  price: number;
  quantity: number;
};

export type OrderModel = Model<TOrder>;
