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
 |    |    |__ controllers
 |    |    |__ routes
 |    |    |__ model
 |    |
 |    |__ order
 |    |    |__ controllers
 |    |    |__ routes
 |    |    |__ model
 |    |
 |    |__ product
 |    |    |__ controllers
 |    |    |__ routes
 |    |    |__ model
 |    |
 |    |__ user
 |         |__ controllers
 |         |__ routes
 |         |__ model
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
  - Routes with URL parameters `/:id` are less specific than routes without them.
- Basic Authentication
  - Creating a middleware to protect routes which requires user authorization.
  - Check if `authorization` header is in request or not.
  - If not then return the response with status code `401`.
  - If it is present then decode the authorization details from `base64` to `string`.
  - Then compare with the existing users, if we get a user with same creds then we can access the api.
  - Otherwise we send a response with `401`, _Invalid Creds_.
- Why Basic Authentication bad?
  - No encryption = not secure. It uses encoding and decoding.
  - Client needs to store creds which can be exposed.
  - Easy to crack using brute force.
- JWT: JSON web token
  - Encrypted token. Uses hasing, so once the creds is ecrypted using hashing it cannot be reversed back like we did in basic authentication.
  - It is Stateless.
  - Easy to scale.
  - Can be used on mobile and web both.
  - Structure:
    - Let us take a JWT token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
    - We can see that the token consist of two period characters '.' .
    - The token is divided into 3 parts. [Header](#header).[Payload](#payload).[Signature](#signature)
      - [Header](#header):
        - `{"alg": "HS256","typ": "JWT"}`
        - This displays which encryption algo is used and what is the type of token.
      - [Payload](#payload):
        - `{"sub": "1234567890","name": "John Doe","iat": 1516239022}`.
        - More data from user.
        - What resources user can access.
        - We can add certain role information to know is the user which is authenticated is admin or not.
        - Don't store sensitive information such as password.
      - [Signature](#signature)
        - `HMACSHA256(base64UrlEncode(header) + "." +base64UrlEncode(payload),your-256-bit-secret)`
        - Using this we create the token.
- How JWT works?
  - **Client** --> Login With Credentials (`/signin`) --> **Server** --> Creates a JWT Token.
  - **Server** --> Sends the token to client in response --> **Client**.
  - **Client** --> Send the token in authorization header --> **Server** --> Verifies JWT Token, Access client info.
  - **Server** --> Send response to client --> **Client**.
- Send Token from client side
  - Import `jwt`, then create a `token` variable.
  - `const token = jwt.sign(payload,secretKey,options)`.
  - here `sign` is a method in `jwt` which accepts multiple arguments but we focus on 3 main.
  - payload about user, like `userID` or `email`.
  - a strong random secret key.
  - options contain many things but we used `expiresIn` option so that the token expires in some time.
  - as using this token any one can login.
- JWT middleware.
  - Read the token: Token must be in `req.headers` with the property of `Authorization`.
  - Check if token is present or not: If token not present return with status 401 **unauthorized**.
  - Check if token is valid: We use `jwt.verify(token,secretKey)` to check if token is valid or not, if token is valid it will return a payload. If not it will give error also if token expires then this verification will also return error, so we use a `trycatch` block.
  - Call next middleware.

## API structure

### Product

- Root Path: `/api/products/`
- These are the details of the `Product` API's.

#### Product Controller

- `getProducts()`: fetch all products.
- `addProduct()`: add a new product.
- `getSingleProduct()`: fetch a single product.
- `rateProduct()`: update the rating of a product.
- `getFilteredProducts()`: fetching filtered products based on user.

#### Product Routes

- `/api/products`
  - `/` **GET**: fetch all products.
  - `/` **POST**: add a new product.
  - `/:id` **GET**: fetch a single product.
  - `/:id` **PUT**: update the rating of a product.
  - `/filter` **GET**: using query params like `/filter?minPrice=10&maxPrice=20`.

### User

- Root Path: `/api/users/`
- Used for authentication and security purpose.

#### User Controller

- `signUp()`: creating a new user.
- `signIn()`: signing in an exixting user.

#### User Routes

- `/api/users`
  - `/signup` **POST**: creating a new user.
  - `/signin` **POST**: signing in an exixting user.
