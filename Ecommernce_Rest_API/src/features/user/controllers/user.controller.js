import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const newUser = UserModel.signUp(name, email, password, type);
    res.status(201).send(newUser);
  }
  signIn(req, res) {
    const { email, password } = req.body;

    try {
      const isUser = UserModel.signIn(email, password);
      const token = jwt.sign(
        { userID: isUser.id, email: isUser.email },
        'M63BuTEqXKd4KdpPCAd2010Ic4tIaSrT',
        { expiresIn: '1h' }
      );
      res.status(200).send(token);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
