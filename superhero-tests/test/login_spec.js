/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Tests for Login Page

// Page Object File
var LoginPage = require("../page-objects/login_page");

// eslint-disable-next-line no-undef
describe("Login Page Tests", function() {
    var loginPage;

    beforeEach(function() {
      loginPage = new LoginPage();

      // Since this is not an Angular site
      browser.ignoreSynchronization = true;

      // Open URL
      browser.get("file:///C:/Udemy/protractor/protractor/superhero/index.html");
    });

    afterEach(function() {});

    it("should display all Login page elements", function() {
     // expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);

      // loginPage.loginTitleTxt
      // loginPage.emailFldLbl
      // loginPage.emailFld
      // loginPage.passwordFldLbl
      // loginPage.passwordFld
      // loginPage.rememberChkLbl
      // loginPage.rememberChk
      // loginPage.submitBtn
    });

    // it("should display error message when no email and password entered", function() {});

    // it("should display error message when no password entered", function() {});

    // it("should display error message when no username entered", function() {});

    // it("should login", function() {});
  });
