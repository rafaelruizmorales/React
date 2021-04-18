import express from 'express';

import { 
    getProducts,
    getProduct,
} from '../controllers/products.js';

const router = express.Router();
    // GET -> http://localhost:5000/products                   200 | 404
    router.get('/', getProducts);

    // GET -> http://localhost:5000/products/1955287           200 | 404
    router.get('/:id', getProduct);

export default router;