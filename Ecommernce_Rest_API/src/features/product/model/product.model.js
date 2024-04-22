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
  static getAll() {
    return products;
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
