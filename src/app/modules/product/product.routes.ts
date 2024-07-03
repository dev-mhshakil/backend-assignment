import express, { Request, Response } from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// Search products by searchTerm
router.get('/search', ProductController.searchAProduct);

// CRUD operations for products
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);

// Individual product operations
router.get('/:productId', ProductController.getProductById);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProductById);

router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export const ProductRoutes = router;
