describe('Mi primera prueba en Cypress', () => {
    it('Visita la página y verifica el título', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('Mens Casual Premium Slim Fit T-Shirts').click();
      cy.url()
    });
  });
  