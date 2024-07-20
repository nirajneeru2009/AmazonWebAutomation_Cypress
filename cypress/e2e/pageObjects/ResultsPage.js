class ResultsPage{
    constructor() {
        this.searchResult = '[class="a-size-medium a-color-base a-text-normal"]';
      }

      validateSerachResult(itemName){
        cy.get(this.searchResult).eq(3).should('contain',itemName);
      }
}

export default ResultsPage;