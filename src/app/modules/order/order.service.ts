import { Order } from './order.model';

const createOrderService = (orderData: object) => {
  const order = new Order(orderData);

  const result = order.save();
  return result;
};

const getOrdersService = () => {
  const orders = Order.find({});
  return orders;
};

const getOrderByEmailService = (email: string) => {
  const order = Order.findOne({ email });
  return order;
};

export const OrderService = {
  createOrderService,
  getOrdersService,
  getOrderByEmailService,
};
