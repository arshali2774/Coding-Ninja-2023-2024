import UserModel from '../features/user/models/user.model.js';

const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).send('No auth details found');
  }
  const base64Creds = authHeader.replace('Basic ', '');
  console.log(base64Creds);
  const decodeCreds = Buffer.from(base64Creds, 'base64').toString('utf-8');
  console.log(decodeCreds);
  const creds = decodeCreds.split(':');
  const user = UserModel.getAllUsers().find(
    (u) => u.email === creds[0] && u.password === creds[1]
  );
  console.log(user);
  if (user) {
    next();
  } else {
    return res.status(401).send('Incorrect Creds');
  }
};

export default basicAuth;
