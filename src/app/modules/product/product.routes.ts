import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router
  .route('/')
  .post(ProductController.createProduct)
  .get(ProductController.getProducts);

export const ProductRoutes = router;
