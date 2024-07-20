import HomePage from "../pageObjects/HomePage";
import ResultsPage from "../pageObjects/ResultsPage";

describe('Search an item and validate results',() => {
    const homePage = new HomePage();
    const resultsPage = new ResultsPage();
   // var itemName ="Iphon14";
    beforeEach(() => {
        homePage.visit();
      });

    it('Search an item and see the results',() => {
        homePage.searchItem("iphone12");
        homePage.clickSearch();
        resultsPage.validateSerachResult("Apple iPhone 12");
    });
});