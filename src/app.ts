import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);

const getController = (req: Request, res: Response) => {
  res.send('Welcome to the Server');
};

app.get('/', getController);

export default app;
