var TestPage = function() {};

TestPage.prototype = Object.create(
  {},
  {
    emailField: {
      get: function() {
        return element(by.id("loginEmail"));
      }
    },
    passwordField: {
      get: function() {
        return element(by.id("loginPassword"));
      }
    },
    loginTitleTxt: {
      get: function() {
        return element(by.id("login-title"));
      }
    }
  }
);

module.exports = TestPage;
