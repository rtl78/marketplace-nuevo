describe('test mobile mode', () => {
    it('Load the page with iPhone 6 dimensions', () => {
        cy.viewport('iphone-6')
        cy.visit('http://localhost:3000/')
    })
})