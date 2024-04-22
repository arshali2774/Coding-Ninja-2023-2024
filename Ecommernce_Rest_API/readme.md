# REST API E-Commerce APP

- REST is a protocol which is follwed to make API's.
- Very light and compatable. Also very large use worldwide.
- We will be making a backend system, where we will make API's which can be used by any user to make a working **e-commerce app**.

## Setting up folder structure

```
public
 |__ uploads

src
 |__ features
 |    |__ cart
 |    |__ order
 |    |__ product
 |    |    |__ controllers
 |    |    |__ routes
 |    |    |__ model
 |    |
 |    |__ user
 |
 |__ middlewares
```

## Problem Solution

- Parsing the request data in **JSON** format.
  - When using **POST** method, we recieve the data sent by user in `req.body`.
  - If we log this we will see `undefined` even though user sent the data in **JSON** format.
  - So to get `req.body` data we need to parse it in **JSON** format.
  - We do this by using `body-parser` package from npm, by using it as a middleware.
- Handling file upload
  - Using multer package from npm.
  - Make a middleware file for multer in middleware directory.
  - Configure the storage to save the file.
    - setting the destination of the file, in `/public/uploads`.
    - setting the filename.
- Routes positions
  - When i created `filter` route i put it below the `id` route. Then only the `id` route was running.
  - It seems like the user can't hit the `filter` route.
  - To fix this we need to move the `filter` route above the `id` route.
  - Routes with URL parameters `/:id` are less specific than routes without them

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
