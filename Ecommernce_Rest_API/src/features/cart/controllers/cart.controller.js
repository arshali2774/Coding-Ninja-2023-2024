import CartModel from '../models/cart.model.js';

export default class CartController {
  add(req, res) {
    const { productId, quantity } = req.query;
    const userId = Number(req.userID);
    CartModel.add(productId, userId, quantity);
    res.status(201).send('Cart updated');
  }
  getUserCarts(req, res) {
    const userId = Number(req.userID);
    const cartItems = CartModel.getCartItemByUser(userId);
    return res.status(200).send(cartItems);
  }
  deleteCart(req, res) {
    const { cartId, userId } = req.query;
    try {
      const carts = CartModel.deleteCart(Number(cartId), Number(userId));
      res.status(200).send(carts);
    } catch (error) {
      return res.status(400).json({ err: error.message });
    }
  }
}
