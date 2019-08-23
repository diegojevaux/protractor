/* eslint-disable no-undef */
var TestePage = require("../page-objects/test_page");

describe("Super Hero Page", function() {
  var testPage;
  //Before each test case, do something
  beforeEach(function() {
    testPage = new TestePage();

    //browser.ignoreSynchronization = true;

    // Open URL
    browser.get("file:///C:/Udemy/protractor/protractor/superhero/index.html");
  });

  //After each test case, do something
  afterEach(function() {});

  it("should load the correct URL", function() {
    // Enter Text into fields
    testPage.emailField.sendKeys("just testing");
    testPage.passwordField.sendKeys("testing");

    // Verify
    //expect(element(by.id('login-title')).getText()).toContain('Welcom')
    expect(testPage.loginTitleTxt.getText()).toEqual(
      "Welcome. Please Log In."
    );
    expect(testPage.emailField.getAttribute("value")).toEqual(
      "just testing"
    );

    // browser.sleep(5000);
  });
});
