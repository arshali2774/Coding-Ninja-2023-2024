import express from 'express';
import ProductRouter from './src/features/product/routes/product.routes.js';
import bodyParser from 'body-parser';
import UserRouter from './src/features/user/routes/user.routes.js';
import basicAuth from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import CartRouter from './src/features/cart/routes/cart.routes.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert { type: 'json' };
const app = express();

//middlewares
app.use(bodyParser.json());

// handle product routes
app.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
app.use('/api/products', jwtAuth, ProductRouter);
app.use('/api/users', UserRouter);
app.use('/api/carts', jwtAuth, CartRouter);

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.listen(3000, (req, res) => {
  console.log(`Listening on port 3000`);
});
