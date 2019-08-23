/* eslint-disable no-undef */
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
    },

    buttonTxt: {
      get: function() {
        return element(by.buttonText("Submit"));
      }
    },

    partialBtnTxt: {
      get: function() {
        return element(by.partialButtonText("Sub"));
      }
    },
    linkTxt: {
      get: function() {
        return element(by.id("Link"));
      }
    },
    partialLinkTxt: {
      get: function() {
        return element(by.id("lin"));
      }
    }
  }
);

module.exports = TestPage;
