import express from 'express';
import ProductsController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validationMiddleware from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const productsController =
  new ProductsController();
const usersController = new UserController();

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

app.get('/register', usersController.getRegister);
app.get('/login', usersController.getLogin);
app.post('/login', usersController.postLogin);
app.get('/logout', usersController.logout);
app.post(
  '/register',
  usersController.postRegister
);
app.get(
  '/',
  setLastVisit,
  auth,
  productsController.getProducts
);
app.get(
  '/add-product',
  auth,
  productsController.getAddProduct
);

app.get(
  '/update-product/:id',
  auth,
  productsController.getUpdateProductView
);

app.post(
  '/delete-product/:id',
  auth,
  productsController.deleteProduct
);

app.post(
  '/',
  auth,
  uploadFile.single('imageUrl'),
  validationMiddleware,
  productsController.postAddProduct
);

app.post(
  '/update-product',
  auth,
  productsController.postUpdateProduct
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
