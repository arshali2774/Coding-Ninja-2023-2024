import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const payload = jwt.verify(token, 'M63BuTEqXKd4KdpPCAd2010Ic4tIaSrT');
    req.userID = payload.userID;
  } catch (error) {
    console.log(error);
    return res.status(401).send('Unauthorized');
  }
  next();
};

export default jwtAuth;
