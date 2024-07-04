import {
  ProductMethods,
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from './product.interface';
import { Schema, model } from 'mongoose';

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 50,
  },
  value: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 50,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<TProduct, ProductModel, ProductMethods>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
      maxLength: 500,
    },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      required: true,
      enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Other'],
    },
    tags: [{ type: String, required: true }],
    variants: [variantSchema],
    inventory: inventorySchema,
  },
  { timestamps: true },
);

// creating custom static method

productSchema.methods.isProductExists = async function (name: string) {
  const existingProduct = await Product.findOne({ name });
  return existingProduct;
};

// productSchema.statics.isProductExists = async function (name: string) {
//   return this.findOne({ name });
// };

export const Product = model<TProduct, ProductModel>('Product', productSchema);
