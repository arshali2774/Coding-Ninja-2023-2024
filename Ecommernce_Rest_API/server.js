import express from 'express';
import ProductRouter from './src/features/product/routes/product.routes.js';
import bodyParser from 'body-parser';
import UserRouter from './src/features/user/routes/user.routes.js';
import basicAuth from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';

const app = express();

//middlewares
app.use(bodyParser.json());

// handle product routes
app.use('/api/products', jwtAuth, ProductRouter);
app.use('/api/users', UserRouter);

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.listen(3000, (req, res) => {
  console.log(`Listening on port 3000`);
});
