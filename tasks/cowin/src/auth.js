class Auth {
  constructor() {
    this.authenticated = false;
  }
  proceedHandler = (cb) => {
    this.authenticated = true;

    cb();
  };
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
