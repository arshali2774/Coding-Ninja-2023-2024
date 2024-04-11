import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hel');
});
router.post('/register');
router.post('/login');
router.post('/logout');

export default router;
