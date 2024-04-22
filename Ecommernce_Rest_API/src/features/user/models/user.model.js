export default class UserModel {
  constructor(id, name, email, password, type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
  static signUp(name, email, password, type) {
    const newUser = new UserModel(
      users.length + 1,
      name,
      email,
      password,
      type
    );
    users.push(newUser);
    return newUser;
  }
  static signIn(email, password) {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      throw new Error('User not found. Please Sign Up.');
    }
    return user;
  }
  static getAllUsers() {
    return users;
  }
}

let users = [
  new UserModel(
    1,
    'Seller User',
    'seller@ecom.com',
    'sellerPassword',
    'seller'
  ),
  new UserModel(2, 'Buyer User', 'buyer@ecom.com', 'buyerPassword', 'buyer'),
];
