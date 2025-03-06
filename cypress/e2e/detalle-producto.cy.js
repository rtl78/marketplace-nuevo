describe('verify the complete rendering of a product', () => {
    it('should load all products', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="product_title_1"]')
        .scrollIntoView({ ensureScrollable: false })  
        .trigger('mouseover')  
        .click({force:true});  
        cy.url().should('include', 'http://localhost:3000/product/1');
      
    })
})