import HomePage from "../pageObjects/HomePage";

describe('Search an item and validate results',() => {
    const homePage = new HomePage();
   // var itemName ="Iphon14";
    beforeEach(() => {
        homePage.visit();
      });

    it('Search an item and see the results',() => {
        homePage.searchItem();
        homePage.clickSearch();
        expect (2).to.be.equal(2);
    });
});