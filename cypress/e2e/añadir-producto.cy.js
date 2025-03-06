describe ('add product', () => {
  it('add', () => {
   cy.visit('http://localhost:3000/')
   cy.get('[data-testid="product_1"]').first().click()
  })
})