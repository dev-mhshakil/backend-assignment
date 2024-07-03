import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.route('/').get(ProductController.searchAProduct);

router
  .route('/:productId')
  .put(ProductController.updateProduct)
  .get(ProductController.getProductById)
  .delete(ProductController.deleteProductById);

router
  .route('/')
  .post(ProductController.createProduct)
  .get(ProductController.getProducts);

export const ProductRoutes = router;
