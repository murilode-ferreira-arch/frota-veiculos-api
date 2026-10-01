import express from 'express';
import dotenv from 'dotenv';
import produtoRoutes from './routes/produto.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

