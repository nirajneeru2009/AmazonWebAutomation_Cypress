describe ('API Tests', () => {
   
   
    it('get single user', () => {
        cy.request('GET','https://reqres.in/api/users/2').then((response) => {
            cy.log('the response is', JSON.stringify(response.body));
        });
    });
});