// loginPage.js

class LoginPage {
    constructor() {
      this.emailInput = '[id="ap_email"]';
      this.passwordInput = '[id="ap_password"]';
      this.signInButton = '[id="signInSubmit"]';
      this.errorMessage = '[id="auth-error-message-box"]';
      this.alertMessage = '[class="a-alert-content"]';
    }
  
    visit() {
      cy.visit(Cypress.env('app_path'));
    }
  
    typeEmail(email) {
      cy.get(this.emailInput).type(email);
    }
  
    typePassword(password) {
      cy.get(this.passwordInput).type(password);
    }

    clickContinue(){
        cy.get('[id="continue"]').first().click();
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
  
    getErrorMessage() {
      return cy.get(this.errorMessage).invoke('text');
    }

    getAlertMessage(){
        return cy.get(this.alertMessage).invoke('text');
    }
  }
  
  export default LoginPage;
  