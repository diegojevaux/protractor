// Tests for Login Page

// Page Object File
var LoginPage = require('../page-objects/login_page')


describe('Login Page Tests'), function(){

    var loginPage = new LoginPage

    // Since this is not an Angular site
    browser.ignoreSynchronization = true

    // Open URL
    browser.get("file:///C:/Udemy/protractor/protractor/superhero/index.html");

    beforeEach(() => {
        
    });

    afterEach(() => {
        
    });

    it('should behave...', () => {
        
    });
})