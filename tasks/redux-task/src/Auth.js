class Auth {
  constructor() {
    this.authenticated = false;
  }
  LoginHandler = (cb) => {
    this.authenticated = true;

    cb();
  };
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
