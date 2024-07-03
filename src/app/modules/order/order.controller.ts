import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

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
      message: errorMessage,
      error,
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
