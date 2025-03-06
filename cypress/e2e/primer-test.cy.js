describe ('My first test with Cypress', () => {
    it ('loads the page correctly', () => {
       cy.visit('http://localhost:3000/');
    });
});