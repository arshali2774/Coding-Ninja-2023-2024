export default class ProductModel {
  constructor(id, name, description, imageUrl, category, price, sizes) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }
  static getAllProducts() {
    return products;
  }
  static addProduct(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
  static getSingleProduct(id) {
    const productToFind = products.find((i) => i.id === id);
    if (!productToFind) {
      throw new Error('Product not found');
    }
    return productToFind;
  }
  static filterProducts(minPrice, maxPrice, category) {
    const filteredProducts = products.filter(
      (product) =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category === category)
    );
    if (!filteredProducts) {
      throw new Error('No product present under these filters');
    }
    return filteredProducts;
  }
}

let products = [
  new ProductModel(
    1,
    'Product 1',
    'description 1',
    'imageurl 1',
    'category 1',
    19.99,
    ['small', 'medium', 'large']
  ),
  new ProductModel(
    2,
    'Product 2',
    'description 2',
    'imageurl 2',
    'category 2',
    29.99,
    ['medium', 'large']
  ),
];
