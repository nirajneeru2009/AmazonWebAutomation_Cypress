// login.spec.js
import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';

describe('Amazon Home Page and Login Page UI Element Validation', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    homePage.visit();
  });

  it('should navigate to the Login page when clicking "Sign In" from the Home page', () => {
    homePage.clickSignIn();

    cy.url().should('include', '/ap/signin');
  });

  it('should display an error message for invalid login email', () => {
    // Invalid test credentials (replace with actual test credentials for your testing)
    const invalidEmail = 'invalid_email@example.com';
    homePage.clickSignIn();
    loginPage.typeEmail(invalidEmail);
    loginPage.clickContinue();

    loginPage.getErrorMessage().should('contain', 'We cannot find an account with that email address');
  });

  it('should display an error message for invalid password email', () => {
    // Invalid test credentials (replace with actual test credentials for your testing)
    const invalidEmail = '';  //Enter your valid email associated with amazon
    const invalidPassword = 'invalid_password';
    homePage.clickSignIn();
    loginPage.typeEmail(invalidEmail);
    loginPage.clickContinue();
    loginPage.typePassword(invalidPassword);
    loginPage.clickSignIn();
    loginPage.getErrorMessage().should('contain', 'Your password is incorrect');
  });

  it('should login successfully for a valid email id and password', () => {
    // Invalid test credentials (replace with actual test credentials for your testing)
    const invalidEmail = ''; //Enter your valid email associated with amazon
    const invalidPassword = ''; //Enter your valid password associated with this amazon account
    homePage.clickSignIn();
    loginPage.typeEmail(invalidEmail);
    loginPage.clickContinue();
    loginPage.typePassword(invalidPassword);
    loginPage.clickSignIn();
    
  });

  it('should display an error message for empty email', () => {
    homePage.clickSignIn();
    loginPage.clickContinue();

    loginPage.getAlertMessage().should('contain', 'Enter your email or mobile phone number');
  });
});
