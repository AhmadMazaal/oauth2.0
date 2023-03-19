import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { authRoutes } from './auth/routes/auth.routes';
import { adminRoutes } from './admin/routes/admin.routes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.get(
    '/',
    (_: Request, res: Response) => {
        res.send('Hello World!');
    }
);

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

app.listen(
    port,
    () => {
        console.log(`Running app at https://localhost:${port}`.toUpperCase());
    }
);