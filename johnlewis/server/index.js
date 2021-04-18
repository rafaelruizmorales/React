import express from 'express';
import cors from 'cors';

import postRoutes from './routes/products.js';

import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/products', postRoutes);
               
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))