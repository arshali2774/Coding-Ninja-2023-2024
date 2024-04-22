import express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();
const productController = new ProductController();

// paths
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.get('/:id', productController.getSingleProduct);

export default router;
