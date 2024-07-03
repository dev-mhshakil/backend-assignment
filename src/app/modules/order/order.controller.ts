import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { ProductService } from '../product/product.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { productId, quantity } = orderData;

    const product = await ProductService.getProductByIdService(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    if (quantity > product?.inventory.quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient quantity available in inventory`,
      });
    }

    const newQuantity = product.inventory.quantity - quantity;

    product.inventory.quantity = newQuantity;
    product.inventory.inStock = newQuantity > 0;

    await product.save();

    const result = await OrderService.createOrderService(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Order creation failed';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      errorMessage,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getOrdersService();
    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Order creation failed';

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

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (typeof email !== 'string') {
      throw new Error('Invalid search term');
    }

    const result = await OrderService.getOrderByEmailService(email);

    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully.',
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = 'Order creation failed';

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

export const OrderController = {
  createOrder,
  getOrders,
  getOrderByEmail,
};
