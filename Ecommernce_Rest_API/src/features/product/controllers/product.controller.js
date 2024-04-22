import ProductModel from '../model/product.model.js';

export default class ProductController {
  getAllProducts(req, res) {
    const allProducts = ProductModel.getAll();
    res.status(200).send(allProducts);
  }
  addProduct(req, res) {}
  getSingleProduct(req, res) {}
  rateProduct(req, res) {}
}
