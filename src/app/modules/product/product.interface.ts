import { Model } from 'mongoose';

export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Home' | 'Other';
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
};

export type ProductMethods = {
  isProductExists(name: string): Promise<TProduct | null>;
};

export type ProductModel = Model<
  TProduct,
  Record<string, never>,
  ProductMethods
>;
