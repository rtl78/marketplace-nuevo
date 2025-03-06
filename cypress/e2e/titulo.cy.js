describe('Title verification', () => {
    it ('Must have the correct title', () => {
        cy.visit('http://localhost:3000/');
        cy.title('Ecommerce Shop');
    });
}); 