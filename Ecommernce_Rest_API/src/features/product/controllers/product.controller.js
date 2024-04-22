import ProductModel from '../model/product.model.js';

export default class ProductController {
  getAllProducts(req, res) {
    const allProducts = ProductModel.getAllProducts();
    res.status(200).send(allProducts);
  }
  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(','),
      imageUrl: req.file.filename,
    };
    const createProduct = ProductModel.addProduct(newProduct);
    res.status(201).send(createProduct);
  }
  getSingleProduct(req, res) {
    const id = Number(req.params.id);
    try {
      const product = ProductModel.getSingleProduct(id);
      res.status(200).send(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  getFilteredProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    try {
      const filteredProducts = ProductModel.filterProducts(
        minPrice,
        maxPrice,
        category
      );
      res.status(200).send(filteredProducts);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  rateProduct(req, res) {}
}
