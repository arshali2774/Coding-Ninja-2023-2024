// imports
import express from 'express';
import session from 'express-session';
import path from 'path';
//app
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join('__dirname', 'public')));
app.use(
  session({
    secret: 'easilyJobPortal',
    resave: false,
    saveUninitialized: true,
  })
);

//EJS
app.set('views', path.join('__dirname', 'views'));
app.set('views engine', 'ejs');

//Routes
import authRoutes from './src/routes/authRoutes.js';
// import jobRoutes from './src/routes/jobRoutes.js';
app.use('/', authRoutes);
// app.use('/jobs', jobRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
  console.log(__dirname);
});
