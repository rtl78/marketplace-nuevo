describe('Verification of the "discover more" link', () => {
    it('Redirects to the correct session or page on click', () => {
      
      cy.visit('http://localhost:3000/');
  
      
      cy.contains('Discover More').click();
  
      
      cy.url();
 
    
      
    });
  });
  