import express from 'express';
import ProductRouter from './src/features/product/routes/product.routes.js';

const app = express();

// handle product routes
app.use('/api/products', ProductRouter);

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.listen(3000, (req, res) => {
  console.log(`Listening on port 3000`);
});
