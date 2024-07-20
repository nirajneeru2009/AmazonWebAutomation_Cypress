

class HomePage {
    constructor() {
      this.signInButton = '[data-csa-c-content-id="nav_ya_signin"]';
      this.searchItems = '[id ="twotabsearchtextbox"]';
      this.seachButton = '[id = "nav-search-submit-button"]';
    }
  
    visit() {
      cy.visit(Cypress.env('app_path'));
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }

    searchItem(item){
      cy.get(this.searchItems).type(item);
    }
    clickSearch() {
      cy.get(this.seachButton).click();
    }

    
  }
  
  export default HomePage;
  