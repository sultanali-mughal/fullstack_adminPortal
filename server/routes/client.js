import express from 'express';
import {getProducts} from '../controller/client.js';


const router = express.Router();

router.get('/products', getProducts);

export default router;
