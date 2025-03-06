describe('listado de los productos', () => {
  it('carga correctamente los productos', () =>{
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="product-list"]').should('exist');
    cy.get('[data-cy="product-item"]').should('have.length.greaterThan', 0)
    cy.get('[data-cy="product-item"]').each(($product) =>{
      cy.wrap($product).within(() => {
        cy.get('[data-cy="product-name"]').click().should('exist').and('not.be.empty')
        cy.get('[data-cy="product-price"]').should('exist').and('not.be.empty');  
        cy.get('[data-cy="add-to-cart"]').should('exist')

      })  
    })
  })
})