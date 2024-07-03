import express, { Request, Response } from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router
  .route('/')
  .post(OrderController.createOrder)
  .get(OrderController.getOrders);

router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export const OrderRoutes = router;
