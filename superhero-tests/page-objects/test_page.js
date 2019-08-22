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
    },

    byCSS: {
      get: function() {
        return element(by.css("#form-login > div:nth-child(1) > label"));
      }
    }
  }
);

module.exports = TestPage;
