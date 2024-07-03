import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router
  .route('/')
  .post(OrderController.createOrder)
  .get(OrderController.getOrders);

export const OrderRoutes = router;
