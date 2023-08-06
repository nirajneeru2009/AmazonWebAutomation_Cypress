

class HomePage {
    constructor() {
      this.signInButton = '[data-csa-c-content-id="nav_ya_signin"]';
    }
  
    visit() {
      cy.visit(Cypress.env('app_path'));
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
  }
  
  export default HomePage;
  