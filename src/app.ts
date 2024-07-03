import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.routes';
import { OrderRoutes } from './app/modules/order/order.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

// products routes
app.use('/api/products', ProductRoutes);
app.use('/api/products/:productId', ProductRoutes);

// orders routes
app.use('/api/orders', OrderRoutes);

const getController = (req: Request, res: Response) => {
  res.send('Welcome to the Server');
};

app.get('/', getController);

export default app;
