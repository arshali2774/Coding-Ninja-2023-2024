export default class CartModel {
  constructor(productId, userId, quantity, id) {
    this.productId = productId;
    this.userId = userId;
    this.quantity = quantity;
    this.id = id;
  }
  static add(productId, userId, quantity) {
    const newCart = new CartModel(productId, userId, quantity);
    newCart.id = carts.length + 1;
    carts.push(newCart);
    return newCart;
  }
  static getCartItemByUser(userId) {
    return carts.filter((cart) => cart.userId === userId);
  }
  static deleteCart(cartId, userId) {
    const index = carts.findIndex(
      (cart) => cart.id === cartId && cart.userId === userId
    );
    if (index === -1) {
      throw new Error('Cart Not found');
    }
    carts.splice(index, 1);
    return carts;
  }
}
let carts = [
  new CartModel(1, 2, 1, 1),
  new CartModel(1, 1, 4, 2),
  new CartModel(2, 1, 6, 3),
];
