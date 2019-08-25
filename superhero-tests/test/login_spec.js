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

    fit("should display all Login page elements", function() {
      expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);
      

      expect(loginPage.emailFldLbl.isDisplayed()).toBe(true);
      expect(loginPage.emailFld.isDisplayed()).toBe(true);
      expect(loginPage.emailFld.getText()).toEqual('')
      
      expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true);
      expect(loginPage.passwordFld.isDisplayed()).toBe(true);
      expect(loginPage.passwordFld.getText()).toEqual('')
      
      expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true);
      expect(loginPage.rememberChk.isDisplayed()).toBe(true);
      expect(loginPage.rememberChk.isSelected()).toBe(true);
      
      expect(loginPage.submitBtn.isDisplayed()).toBe(true);

    });

    it("should display error message when no email and password entered", function() {});

    it("should display error message when no password entered", function() {});

    it("should display error message when no username entered", function() {});

    it("should login", function() {});
  });
