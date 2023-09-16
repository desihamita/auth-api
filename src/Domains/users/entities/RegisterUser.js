class RegisterUser {
  constructor({ username, password, fullname }) {
    if (!username || !password || !fullname) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
  }
}

module.exports = RegisterUser;
