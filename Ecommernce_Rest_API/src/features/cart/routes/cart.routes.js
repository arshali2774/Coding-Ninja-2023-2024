import express from 'express';
import CartController from '../controllers/cart.controller.js';

const router = express.Router();
const cartController = new CartController();

router.post('/', cartController.add);
router.get('/', cartController.getUserCarts);
router.delete('/', cartController.deleteCart);

export default router;
