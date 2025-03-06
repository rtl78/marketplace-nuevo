describe('Prueba de formularios', () => {
    it('Completa un input y lo envía', () => {
      cy.visit('https://example.cypress.io/commands/actions');
      
      cy.get('.action-email')
        .type('test@example.com')
        .should('have.value', 'test@example.com');
  
      cy.get('.action-form')
        .submit()
        .next()
        .should('contain', 'Your form has been submitted!');
    });
  });
  