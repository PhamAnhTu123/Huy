import AuthController from './controller';
import AuthValidator from './validator';

class AuthHander {
  constructor(server) {
    this.controller = new AuthController();
    this.validator = new AuthValidator();
    server.bind(this.controller);
  }

  login = () => ({
    tags: ['api', 'v1'],
    description: 'Login with account',
    notes: 'Login with available account',
    handler: this.controller.login,
    auth: false,
    validate: {
      payload: this.validator.payloadLogin,
    },
  });

  register = () => ({
    tags: ['api', 'v1'],
    description: 'Register new account',
    notes: 'Register new account',
    handler: this.controller.register,
    auth: false,
    validate: {
      payload: this.validator.payloadRegister,
    },
  });
}

export default AuthHander;
