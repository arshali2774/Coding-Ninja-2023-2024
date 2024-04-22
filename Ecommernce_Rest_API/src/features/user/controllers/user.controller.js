import UserModel from '../models/user.model.js';

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
      res.status(200).send(isUser);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}
