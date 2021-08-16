import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import './database';
import './shared/container';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3000, () => {
    console.log('Server is Running!!');
});
