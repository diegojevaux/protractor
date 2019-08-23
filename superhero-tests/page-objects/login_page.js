/* eslint-disable no-undef */
// Login Page Objects

var LoginPage = function() {};

LoginPage.prototype = Object.create(
  {},
  {
    // Update for your element
    loginTitleTxt: {
      get: function() {
        return element(by.id("login-title"));
      }
    },
    emailFldLbl: {
      get: function() {
        return element(by.css("#form-login > div:nth-child(1) > label"));
      }
    },
    emailFld: {
      get: function() {
        return element(by.css("#loginEmail"));
      }
    },
    passwordFldLbl: {
      get: function() {
        return element(by.css("#form-login > div:nth-child(2) > label"));
      }
    },
    passwordFld: {
      get: function() {
        return element(by.css("#loginPassword"));
      }
    },
    rememberChkLbl: {
      get: function() {
        return element(by.css("#form-login > div.form-check > label"));
      }
    },
    rememberChk: {
      get: function() {
        return element(by.css("#rememberLoginChk"));
      }
    },
    submitBtn: {
      get: function() {
        return element(by.buttonText("Submit"));
      }
    }
  }
);

module.exports = LoginPage;
