import { Request, Response } from 'express';
import productValidationSchema from './product.zod.validation';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);

    const result = await ProductService.createProductService(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Product creation failed';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getProductsService();
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Product not found';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
};
