

class HomePage {
    constructor() {
      this.signInButton = '[data-csa-c-content-id="nav_ya_signin"]';
      this.searchItems = '[type ="text"]';
      this.seachButton = '[id = "nav-search-submit-button"]';
    }
  
    visit() {
      cy.visit(Cypress.env('app_path'));
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
    searchItem() {
      cy.get(this.searchItems).should('be.visible').then(($searchBox) => {
        cy.wrap($searchBox).click({force:true});
      });
    }
    clickSearch() {
      cy.get(this.seachButton).click();
    }
  }
  
  export default HomePage;
  