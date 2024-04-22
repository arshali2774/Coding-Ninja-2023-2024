import express from 'express';
import ProductController from '../controllers/product.controller.js';
import upload from '../../../middlewares/multer.middleware.js';

const router = express.Router();
const productController = new ProductController();

// paths
router.get('/', productController.getAllProducts);
router.post('/', upload.single('imageUrl'), productController.addProduct);
router.post('/rate', productController.rateProduct);
router.get('/filter', productController.getFilteredProducts);
router.get('/:id', productController.getSingleProduct);

export default router;
