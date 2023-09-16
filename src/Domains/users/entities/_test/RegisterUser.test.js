const RegisterUser = require('../RegisterUser');

describe('A RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // arrage
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // action and assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
});
