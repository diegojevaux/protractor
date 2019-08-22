// Login Page Objects

var LoginPage = function() {};

LoginPage.prototype = Object.create(
  {},
  {

    // Update for your element
    elementName: {
      get: function() {
        return element(by.id(""));
      }
    }
  }
);

module.exports = LoginPage;
