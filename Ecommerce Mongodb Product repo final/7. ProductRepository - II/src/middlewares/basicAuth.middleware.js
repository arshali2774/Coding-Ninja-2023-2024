import bAuth from 'express-basic-auth';
import UserModel from '../features/user/user.model.js';

const basicAuthorizer = (username, password) => {
  // 1. Get users
  const users = UserModel.getAll();
  // 2. Compare email
  const user = users.find((u) =>
    bAuth.safeCompare(username, u.email)
  );
  if (user) {
    // 3. Compare password and return
    return bAuth.safeCompare(
      password,
      user.password
    );
  } else {
    // 4. Return error message
    return false;
  }
};

const authorizer = bAuth({
  authorizer: basicAuthorizer,
  challenge: true,
});

export default authorizer;
