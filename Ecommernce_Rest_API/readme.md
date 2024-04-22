# REST API E-Commerce APP

- REST is a protocol which is follwed to make API's.
- Very light and compatable. Also very large use worldwide.
- We will be making a backend system, where we will make API's which can be used by any user to make a working **e-commerce app**.

## Setting up folder structure

```
src
 |__ features
 |    |__ cart
 |    |__ order
 |    |__ product
 |    |    |__ controllers
 |    |    |__ routes
 |    |
 |    |__ user
 |
 |__ middlewares
```

## API structure

### Product

- Root Path: `/api/products/`
- These are the details of the `Product` API's.

#### Product Controller

- `getProducts()`: fetch all products.
- `addProduct()`: add a new product.
- `getSingleProduct()`: fetch a single product.
- `rateProduct()`: update the rating of a product.

#### Product Routes

- `/api/products`
  - `/` **GET**: fetch all products.
  - `/` **POST**: add a new product.
  - `/:id` **GET**: fetch a single product.
  - `/:id` **PUT**: update the rating of a product.
