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
      message: 'Product creation failed',
      errorMessage,
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
      message: 'Product not found',
      errorMessage,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProductByIdService(productId);

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
      message: 'Product not found',
      errorMessage,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await ProductService.updateProductByIdService(
      productId,
      zodParsedData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Product not found';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      message: 'Product not found',
      errorMessage,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id: productId } = req.params;
    const result = await ProductService.deleteProductByIdService(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Product not found';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      message: 'Product not found',
      errorMessage,
    });
  }
};

const searchAProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (typeof searchTerm !== 'string') {
      throw new Error('Invalid search term');
    }

    const result = await ProductService.searchAProductService(searchTerm);

    if (result.length === 0) {
      res.status(500).json({
        success: false,
        message: 'Product not found',
      });
    }
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
      message: 'Product not found',
      errorMessage,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProductById,
  searchAProduct,
};
